import * as RadixColors from "@radix-ui/colors";

// – – – – – – – – – –
export type SupportedColors =
	| "gray"
	| "gold"
	| "bronze"
	| "brown"
	| "yellow"
	| "amber"
	| "orange"
	| "tomato"
	| "red"
	| "ruby"
	| "crimson"
	| "pink"
	| "plum"
	| "purple"
	| "violet"
	| "iris"
	| "indigo"
	| "blue"
	| "cyan"
	| "teal"
	| "jade"
	| "green"
	| "grass"
	| "lime"
	| "mint"
	| "sky";

// – – – – – – – – – –
const colorsMap = {
	gray: { light: RadixColors.gray, dark: RadixColors.grayDark },
	sand: { light: RadixColors.sand, dark: RadixColors.sandDark },
	tomato: { light: RadixColors.tomato, dark: RadixColors.tomatoDark },
	red: { light: RadixColors.red, dark: RadixColors.redDark },
	ruby: { light: RadixColors.ruby, dark: RadixColors.rubyDark },
	crimson: { light: RadixColors.crimson, dark: RadixColors.crimsonDark },
	pink: { light: RadixColors.pink, dark: RadixColors.pinkDark },
	plum: { light: RadixColors.plum, dark: RadixColors.plumDark },
	purple: { light: RadixColors.purple, dark: RadixColors.purpleDark },
	violet: { light: RadixColors.violet, dark: RadixColors.violetDark },
	iris: { light: RadixColors.iris, dark: RadixColors.irisDark },
	indigo: { light: RadixColors.indigo, dark: RadixColors.indigoDark },
	blue: { light: RadixColors.blue, dark: RadixColors.blueDark },
	cyan: { light: RadixColors.cyan, dark: RadixColors.cyanDark },
	teal: { light: RadixColors.teal, dark: RadixColors.tealDark },
	jade: { light: RadixColors.jade, dark: RadixColors.jadeDark },
	green: { light: RadixColors.green, dark: RadixColors.greenDark },
	grass: { light: RadixColors.grass, dark: RadixColors.grassDark },
	brown: { light: RadixColors.brown, dark: RadixColors.brownDark },
	bronze: { light: RadixColors.bronze, dark: RadixColors.bronzeDark },
	gold: { light: RadixColors.gold, dark: RadixColors.goldDark },
	sky: { light: RadixColors.sky, dark: RadixColors.skyDark },
	mint: { light: RadixColors.mint, dark: RadixColors.mintDark },
	lime: { light: RadixColors.lime, dark: RadixColors.limeDark },
	yellow: { light: RadixColors.yellow, dark: RadixColors.yellowDark },
	amber: { light: RadixColors.amber, dark: RadixColors.amberDark },
	orange: { light: RadixColors.orange, dark: RadixColors.orangeDark },
} as const;

// – – – – – – – – – –
const getColorScale = (
	color: SupportedColors = "blue",
	darkMode: boolean = false,
): { [stepLabel: string]: string } => {
	if (!colorsMap[color]) {
		color = "blue";
	}

	return darkMode ? colorsMap[color].dark : colorsMap[color].light;
};

// – – – – – – – – – –
export const getColorHex = (
	step: number,
	color: SupportedColors = "blue",
	darkMode: boolean = false,
): string => {
	if (!colorsMap[color]) {
		color = "blue";
	}

	step = Math.trunc(step);

	if (step > 12) {
		step = 12;
	} else if (step < 1) {
		step = 1;
	}

	const colorScale = getColorScale(color, darkMode);
	const stepLabel = `${color}${step}`;

	return colorScale[stepLabel];
};
