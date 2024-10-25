import { FC } from "react";
import BiblePassageDisplay, { BiblePassageDisplayProps } from "../Passage";

const Example: FC<BiblePassageDisplayProps> = ({
	bibleName,
	reference,
	content,
	rtl = false,
	copyright,
}: BiblePassageDisplayProps) => {
	return (
		<BiblePassageDisplay
			bibleName={bibleName}
			reference={reference}
			content={content}
			rtl={rtl}
			copyright={copyright}
		/>
	);
};

export default Example;
