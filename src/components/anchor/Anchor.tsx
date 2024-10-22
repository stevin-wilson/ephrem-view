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
const OutlinedAnchor = styled.span<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }) => {
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
const ContainedAnchor = styled.span<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }) => {
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
const TextAnchor = styled.span<RootAnchorProps>(
	({ color, darkMode = false, highContrast = false }) => {
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

const Anchor = ({ variant, ...props }: AnchorProps) => {
	switch (variant) {
		case "outlined":
			return <OutlinedAnchor data-testid="outlined-anchor" {...props} />;
		case "contained":
			return <ContainedAnchor data-testid="contained-anchor" {...props} />;
		case "text":
			return <TextAnchor data-testid="text-anchor" {...props} />;
		default:
			return <OutlinedAnchor data-testid="outlined-anchor" {...props} />;
	}
};

export default Anchor;
