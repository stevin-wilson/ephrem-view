import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Anchor",
	component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Outlined: Story = {
	args: {
		variant: "outlined",
		color: "blue",
		darkMode: false,
		highContrast: false,
	},
};
export const Contained: Story = {
	args: {
		variant: "contained",
		color: "blue",
		darkMode: false,
		highContrast: false,
	},
};
export const Text: Story = {
	args: {
		variant: "text",
		color: "blue",
		darkMode: false,
		highContrast: false,
	},
};
