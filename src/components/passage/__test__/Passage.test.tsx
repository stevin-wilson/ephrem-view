import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BiblePassageDisplay from "../Passage";

describe("BiblePassageDisplay component", () => {
	it("BiblePassageDisplay renders with LTR language", () => {
		render(
			<BiblePassageDisplay
				bibleName="Berean Standard Bible"
				reference="John 3:16-20"
				content={
					'<p class="b"></p><p class="m"><span data-number="16" data-sid="JHN 3:16" class="v">16</span>For God so loved the world that He gave His one and only  Son, that everyone who believes in Him shall not perish but have eternal life. <span data-number="17" data-sid="JHN 3:17" class="v">17</span>For God did not send His Son into the world to condemn the world, but to save the world through Him. <span data-number="18" data-sid="JHN 3:18" class="v">18</span>Whoever believes in Him is not condemned, but whoever does not believe has already been condemned, because he has not believed in the name of God’s one and only Son.</p><p class="b"></p><p class="m"><span data-number="19" data-sid="JHN 3:19" class="v">19</span>And this is the verdict: The Light has come into the world, but men loved the darkness rather than the Light because their deeds were evil. <span data-number="20" data-sid="JHN 3:20" class="v">20</span>Everyone who does evil hates the Light, and does not come into the Light for fear that his deeds will be exposed. </p>'
				}
				copyright="The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee. This text of God's Word has been dedicated to the public domain"
			/>,
		);
		const passageDisplay = screen.getByTestId("bible-passage-display");
		expect(passageDisplay).toBeInTheDocument();
	});

	it("BiblePassageDisplay renders with RTL language", () => {
		render(
			<BiblePassageDisplay
				bibleName="كتاب الحياة مجانى"
				reference="إنجيل يوحنا 3:16-20"
				content={
					'<p class="p"><span data-number="16" data-sid="JHN 3:16" class="v">16</span>لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ، لِكَيْ لَا يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ، بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ. <span data-number="17" data-sid="JHN 3:17" class="v">17</span>فَإِنَّ اللهَ لَمْ يُرْسِلِ ابْنَهُ إِلَى الْعَالَمِ لِيَدِينَ الْعَالَمَ، بَلْ لِيَخْلُصَ الْعَالَمُ بِهِ، <span data-number="18" data-sid="JHN 3:18" class="v">18</span>فَالَّذِي يُؤْمِنُ بِهِ لَا يُدَانُ، أَمَّا الَّذِي لَا يُؤْمِنُ بِهِ فَقَدْ صَدَرَ عَلَيْهِ حُكْمُ الدَّيْنُونَةِ، لأَنَّهُ لَمْ يُؤْمِنْ بِاسْمِ ابْنِ اللهِ الْوَحِيدِ. <span data-number="19" data-sid="JHN 3:19" class="v">19</span>وَهَذَا هُوَ الْحُكْمُ: إِنَّ النُّورَ قَدْ جَاءَ إِلَى الْعَالَمِ، وَلكِنَّ النَّاسَ أَحَبُّوا الظُّلْمَةَ أَكْثَرَ مِنَ النُّورِ، لأَنَّ أَعْمَالَهُمْ كَانَتْ شِرِّيرَةً. <span data-number="20" data-sid="JHN 3:20" class="v">20</span>فَكُلُّ مَنْ يَعْمَلُ الشَّرَّ يُبْغِضُ النُّورَ، وَلا يَأْتِي إِلَيْهِ مَخَافَةَ أَنْ تُفْضَحَ أَعْمَالُهُ. </p>'
				}
				copyright={
					"كتاب الحياة مجانى ح‫قوق الطبع © 1988، 1997، 2012 Biblica, Inc.®‎ ‪‪Biblica® Open New Arabic Version Biblica® Ketab El Hayat Majani ‪‪Copyright © 1988, 1997, 2012 by Biblica, Inc.®‎ ‫Biblica علامة تجارية مسجلة في مكتب براءات الاختراع والعلامات التجارية في الولايات المتحدة من خلال هيئة بيبليكا. ولا يحق استخدامها إلا بإذن مسبق. “Biblica” is a trademark registered in the United States Patent and Trademark Office by Biblica, Inc. Used with permission.‏"
				}
			/>,
		);
		const passageDisplay = screen.getByTestId("bible-passage-display");
		expect(passageDisplay).toBeInTheDocument();
	});
});
