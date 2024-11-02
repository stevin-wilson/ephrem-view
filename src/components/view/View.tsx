import BiblePassageDisplay, {
	BiblePassageDisplayProps,
} from "../passage/Passage.tsx";
import { SupportedColors } from "../utils.ts";
import React, { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import Anchor from "../anchor/Anchor.tsx";

export interface PassageViewProps extends BiblePassageDisplayProps {
	variant: "outlined" | "contained" | "text";
	children: React.ReactNode;
	color: SupportedColors;
	darkMode: boolean;
	highContrast: boolean;
}

const PassageView = ({ children, ...props }: PassageViewProps) => {
	const [showPopper, setShowPopper] = useState(false);
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const popperRef = useRef<HTMLDivElement>(null);
	const { styles, attributes, update, forceUpdate } = usePopper(
		anchorRef.current,
		popperRef.current,
		{
			placement: "bottom",
		},
	);

	useEffect(() => {
		if (showPopper && update) {
			update();
		}
	}, [showPopper, update]);

	useEffect(() => {
		if (forceUpdate) {
			forceUpdate();
		}
	}, [forceUpdate]);

	useEffect(() => {
		const handleResize = () => {
			if (update) {
				update();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [update]);

	const renderAnchor = () => {
		return (
			<Anchor
				ref={anchorRef}
				onMouseEnter={() => setShowPopper(true)}
				onMouseLeave={() => setShowPopper(false)}
				onFocus={() => setShowPopper(true)}
				onBlur={() => setShowPopper(false)}
				{...props}
			>
				{children}
			</Anchor>
		);
	};

	return (
		<div>
			{renderAnchor()}
			{showPopper && (
				<div ref={popperRef} style={styles.popper} {...attributes.popper}>
					<div
						style={{
							backgroundColor: "white",
							border: "1px solid darkgrey",
							borderRadius: "4px",
							padding: "10px",
							boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
							zIndex: 1000,
						}}
					>
						<BiblePassageDisplay
							bibleName={props.bibleName}
							reference={props.reference}
							content={props.content}
							copyright={props.copyright}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default PassageView;
