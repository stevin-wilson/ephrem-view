import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Anchor from "../Anchor";

describe("Anchor component", () => {
	it("Outlined Anchor should render correctly", () => {
		render(
			<Anchor
				variant={"outlined"}
				color={"blue"}
				darkMode={true}
				highContrast={false}
			>
				{"Outlined Anchor"}
			</Anchor>,
		);
		const anchor = screen.getByTestId("outlined-anchor");
		expect(anchor).toBeInTheDocument();
	});

	it("Contained Anchor should render correctly", () => {
		render(
			<Anchor
				variant={"contained"}
				color={"blue"}
				darkMode={true}
				highContrast={false}
			>
				{"Contained Anchor"}
			</Anchor>,
		);
		const button = screen.getByTestId("contained-anchor");
		expect(button).toBeInTheDocument();
	});

	it("Text Anchor should render correctly", () => {
		render(
			<Anchor
				variant={"text"}
				color={"blue"}
				darkMode={true}
				highContrast={false}
			>
				{"Text Anchor"}
			</Anchor>,
		);
		const button = screen.getByTestId("text-anchor");
		expect(button).toBeInTheDocument();
	});
});
