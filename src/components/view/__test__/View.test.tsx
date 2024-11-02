import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import PassageView from "../View";
import { act } from "react";

const bibleName = "Berean Standard Bible";
const reference = "1 John 3:18";
const content =
	'<p class="b"></p><p class="m">Little children, let us love not in word and speech, but in action and truth. </p>';
const rtl = false;
const copyright =
	"The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee. This text of God's Word has been dedicated to the public domain";

describe("PassageView component", () => {
	it("renders the anchor element", () => {
		render(
			<PassageView
				bibleName={bibleName}
				reference={reference}
				content={content}
				rtl={rtl}
				copyright={copyright}
				variant="outlined"
				color="red"
				darkMode={false}
				highContrast={false}
			>
				1 യോഹന്നാൻ 3:18
			</PassageView>,
		);
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		expect(anchorElement).toBeInTheDocument();
	});

	it("shows the popper on mouse enter", () => {
		render(
			<PassageView
				bibleName={bibleName}
				reference={reference}
				content={content}
				rtl={rtl}
				copyright={copyright}
				variant="outlined"
				color="red"
				darkMode={false}
				highContrast={false}
			>
				1 യോഹന്നാൻ 3:18
			</PassageView>,
		);
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		fireEvent.mouseEnter(anchorElement);
		const popperElement = screen.getByTestId("passage-view-popper");
		expect(popperElement).toBeInTheDocument();
	});

	it("hides the popper on mouse leave", async () => {
		await act(async () => {
			render(
				<PassageView
					bibleName={bibleName}
					reference={reference}
					content={content}
					rtl={rtl}
					copyright={copyright}
					variant="outlined"
					color="red"
					darkMode={false}
					highContrast={false}
				>
					1 യോഹന്നാൻ 3:18
				</PassageView>,
			);
		});
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		await act(async () => {
			fireEvent.mouseEnter(anchorElement);
			fireEvent.mouseLeave(anchorElement);
		});
		const popperElement = screen.queryByTestId("passage-view-popper");
		expect(popperElement).not.toBeInTheDocument();
	});

	it("updates popper position on window resize", () => {
		render(
			<PassageView
				bibleName={bibleName}
				reference={reference}
				content={content}
				rtl={rtl}
				copyright={copyright}
				variant="outlined"
				color="red"
				darkMode={false}
				highContrast={false}
			>
				1 യോഹന്നാൻ 3:18
			</PassageView>,
		);
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		fireEvent.mouseEnter(anchorElement);
		fireEvent.resize(window);
		const popperElement = screen.getByTestId("passage-view-popper");
		expect(popperElement).toBeInTheDocument();
	});

	it("shows the popper on focus", () => {
		render(
			<PassageView
				bibleName={bibleName}
				reference={reference}
				content={content}
				rtl={rtl}
				copyright={copyright}
				variant="contained"
				color="red"
				darkMode={false}
				highContrast={false}
			>
				1 യോഹന്നാൻ 3:18
			</PassageView>,
		);
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		fireEvent.focus(anchorElement);
		const popperElement = screen.getByTestId("passage-view-popper");
		expect(popperElement).toBeInTheDocument();
	});

	it("hides the popper on blur", async () => {
		await act(async () => {
			render(
				<PassageView
					bibleName={bibleName}
					reference={reference}
					content={content}
					rtl={rtl}
					copyright={copyright}
					variant="outlined"
					color="red"
					darkMode={false}
					highContrast={false}
				>
					1 യോഹന്നാൻ 3:18
				</PassageView>,
			);
		});
		const anchorElement = screen.getByText("1 യോഹന്നാൻ 3:18");
		await act(async () => {
			fireEvent.focus(anchorElement);
			fireEvent.blur(anchorElement);
		});
		const popperElement = screen.queryByTestId("passage-view-popper");
		expect(popperElement).not.toBeInTheDocument();
	});
});
