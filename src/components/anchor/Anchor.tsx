import styled from "@emotion/styled";
import { getColorHex, SupportedColors } from "../utils.ts";

// – – – – – – – – – –
interface RootAnchorProps {
	children: React.ReactNode;
	color: SupportedColors;
	darkMode: boolean;
	highContrast: boolean;
}

// – – – – – – – – – –
export interface AnchorProps extends RootAnchorProps {
	variant: "outlined" | "contained" | "text";
}

// – – – – – – – – – –
const OutlinedAnchor = styled.a<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }: RootAnchorProps) => {
		return {
			backgroundColor: "transparent",
			border: `1px solid`,
			borderColor: getColorHex(6, color, darkMode), // Using color9 for border
			color: highContrast
				? getColorHex(12, color, darkMode)
				: getColorHex(11, color, darkMode), // Using color11 for text
			padding: "3px 5px",
			cursor: "pointer",
			borderRadius: "30px",
			margin: 0,
			fontFamily: "inherit", // Inherit font family from parent
			fontSize: "inherit", // Inherit font size from parent
			fontWeight: "inherit", // Inherit font weight from parent
			lineHeight: "inherit", // Inherit line height from parent
			textDecoration: "none",
			"&:hover": {
				outline: "none",
				backgroundColor: getColorHex(3, color, darkMode), // Light background on hover
				borderColor: "transparent",
			},
			"&:focus, &:active": {
				outline: "none",
				backgroundColor: getColorHex(3, color, darkMode),
				borderColor: getColorHex(7, color, darkMode),
			},
		};
	},
);

// – – – – – – – – – –
const ContainedAnchor = styled.a<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }: RootAnchorProps) => {
		return {
			backgroundColor: getColorHex(2, color, darkMode),
			border: `1px solid`,
			borderColor: "transparent",
			color: highContrast
				? getColorHex(12, color, darkMode)
				: getColorHex(11, color, darkMode), // Using color11 for text
			padding: "3px 5px",
			cursor: "pointer",
			borderRadius: "30px",
			margin: 0,
			fontFamily: "inherit", // Inherit font family from parent
			fontSize: "inherit", // Inherit font size from parent
			fontWeight: "inherit", // Inherit font weight from parent
			lineHeight: "inherit", // Inherit line height from parent
			textDecoration: "none",
			"&:hover": {
				outline: "none",
				backgroundColor: getColorHex(2, color, darkMode), // Light background on hover
				borderColor: getColorHex(6, color, darkMode),
			},
			"&:focus, &:active": {
				outline: "none",
				backgroundColor: getColorHex(3, color, darkMode),
				borderColor: getColorHex(7, color, darkMode),
			},
		};
	},
);

// – – – – – – – – – –
const TextAnchor = styled.a<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }: RootAnchorProps) => {
		return {
			backgroundColor: "transparent",
			border: `1px solid`,
			borderColor: "transparent",
			color: highContrast
				? getColorHex(12, color, darkMode)
				: getColorHex(11, color, darkMode), // Using color11 for text
			padding: "2px 2px",
			cursor: "pointer",
			borderRadius: "30px",
			margin: 0,
			fontFamily: "inherit", // Inherit font family from parent
			fontSize: "inherit", // Inherit font size from parent
			fontWeight: "inherit", // Inherit font weight from parent
			lineHeight: "inherit", // Inherit line height from parent
			textDecoration: "none",
			"&:hover": {
				outline: "none",
				backgroundColor: getColorHex(3, color, darkMode), // Light background on hover
				borderColor: "transparent",
			},
			"&:focus, &:active": {
				outline: "none",
				backgroundColor: getColorHex(3, color, darkMode),
				borderColor: getColorHex(7, color, darkMode),
			},
		};
	},
);

// – – – – – – – – – –

const Anchor = ({ variant, children, ...props }: AnchorProps) => {
	switch (variant) {
		case "outlined":
			return (
				<OutlinedAnchor
					role="button"
					tabIndex={0}
					data-testid="outlined-anchor"
					{...props}
				>
					{children}
				</OutlinedAnchor>
			);
		case "contained":
			return (
				<ContainedAnchor
					role="button"
					tabIndex={0}
					data-testid="contained-anchor"
					{...props}
				>
					{children}
				</ContainedAnchor>
			);
		case "text":
			return (
				<TextAnchor
					role="button"
					tabIndex={0}
					data-testid="text-anchor"
					{...props}
				>
					{children}
				</TextAnchor>
			);
		default:
			return (
				<OutlinedAnchor role="button" tabIndex={0} {...props}>
					{children}
				</OutlinedAnchor>
			);
	}
};

export default Anchor;
