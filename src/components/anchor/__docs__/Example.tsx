import { FC } from "react";
import Anchor, { AnchorProps } from "../Anchor";

const Example: FC<AnchorProps> = ({
	variant = "outlined",
	color = "blue",
	darkMode = false,
	highContrast = false,
}) => {
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
				St. John Chrysostom described the Church as a place of healing, not a
				place of judgment. This echoes the words of Jesus in{" "}
				<Anchor
					variant={variant}
					color={color}
					darkMode={darkMode}
					highContrast={highContrast}
				>
					Matthew 9:12
				</Anchor>{" "}
				and{" "}
				<Anchor
					variant={variant}
					color={color}
					darkMode={darkMode}
					highContrast={highContrast}
				>
					Luke 5:32
				</Anchor>
				, where He speaks of offering forgiveness, healing, and compassion to
				sinners rather than condemnation.
			</p>
		</div>
	);
};

export default Example;
