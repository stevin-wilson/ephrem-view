import { FC } from "react";
import PassageView, { PassageViewProps } from "../View";

const Example: FC<PassageViewProps> = ({
	bibleName,
	reference,
	content,
	copyright,
	rtl = false,
	variant = "outlined",
	color = "blue",
	darkMode = false,
	highContrast = false,
}: PassageViewProps) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<p style={{ lineHeight: 1.5 }}>
				St. Gregory the Great says, “The proof of love is in the works. Where
				love exists, it works great things. But when it ceases to act, it ceases
				to exist,” echoing the Apostle John’s words in{" "}
				<PassageView
					variant={variant}
					color={color}
					darkMode={darkMode}
					highContrast={highContrast}
					bibleName={bibleName}
					content={content}
					copyright={copyright}
					reference={reference}
					rtl={rtl}
				>
					1 John 3:18
				</PassageView>
				.
			</p>
		</div>
	);
};

export default Example;
