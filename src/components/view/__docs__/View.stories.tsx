import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "PassageView",
	component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ViewPassageLeftToRight: Story = {
	args: {
		bibleName: "Berean Standard Bible",
		reference: "1 John 3:18",
		content:
			'<p class="b"></p><p class="m">Little children, let us love not in word and speech, but in action and truth. </p>',
		rtl: false,
		copyright:
			"The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee. This text of God's Word has been dedicated to the public domain",
	},
};

export const ViewPassageRightToLeft: Story = {
	args: {
		bibleName: "كتاب الحياة مجانى",
		reference: "يوحنا الأولى 3:18",
		content:
			'<p class="p">أَيُّهَا الأَوْلادُ الصِّغَارُ، لَا يَجِبُ أَنْ تَكُونَ مَحَبَّتُنَا مُجَرَّدَ ادِّعَاءَ بِالْكَلامِ وَاللِّسَانِ، بَلْ تَكُونَ مَحَبَّةً عَمَلِيَّةً حَقَّةً. </p>',
		rtl: true,
		copyright:
			"كتاب الحياة مجانى ح‫قوق الطبع © 1988، 1997، 2012 Biblica, Inc.®‎ ‪‪Biblica® Open New Arabic Version Biblica® Ketab El Hayat Majani ‪‪Copyright © 1988, 1997, 2012 by Biblica, Inc.®‎ ‫Biblica علامة تجارية مسجلة في مكتب براءات الاختراع والعلامات التجارية في الولايات المتحدة من خلال هيئة بيبليكا. ولا يحق استخدامها إلا بإذن مسبق. “Biblica” is a trademark registered in the United States Patent and Trademark Office by Biblica, Inc. Used with permission.‏",
	},
};
