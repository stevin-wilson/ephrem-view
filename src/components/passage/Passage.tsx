import styled from "@emotion/styled";
import React from "react";
import "./scripture-styles.css";
import parse from "html-react-parser";

// – – – – – – – – – –
interface FooterProps {
	copyright: string;
	rtl: boolean;
}

// – – – – – – – – – –
const FooterContainer = styled.footer<{ rtl: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0;
	background-color: transparent;
	direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
	width: 100%;
`;

// – – – – – – – – – –
const FooterText = styled.p`
	font-size: 12px;
	color: darkgray;
	font-weight: 300; /* equivalent to 'light' */
	vertical-align: middle;
	margin: 0;
	font-family: "Noto Sans", sans-serif;
`;

// – – – – – – – – – –
const Footer: React.FC<FooterProps> = ({ copyright, rtl }: FooterProps) => {
	return (
		<FooterContainer rtl={rtl} aria-label="Footer">
			<FooterText>{copyright}</FooterText>
		</FooterContainer>
	);
};

// – – – – – – – – – –
interface HeaderProps {
	bibleName: string;
	reference: string;
	rtl: boolean;
}

// – – – – – – – – – –
const HeaderContainer = styled.header<{ rtl: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0;
	background-color: transparent;
	direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
	width: 100%;
`;

// – – – – – – – – – –
const BibleName = styled.h1`
	font-size: 12px;
	color: darkgray;
	font-weight: 300; /* equivalent to 'light' */
	vertical-align: middle;
	margin: 0;
	font-family: "Noto Sans", sans-serif;
`;

// – – – – – – – – – –
const ReferenceText = styled.h2`
	font-size: 14px;
	color: darkgray;
	font-weight: 300; /* equivalent to 'light' */
	vertical-align: middle;
	margin: 0;
	font-family: "Noto Sans", sans-serif;
`;

// – – – – – – – – – –
const Header: React.FC<HeaderProps> = ({
	bibleName,
	reference,
	rtl,
}: HeaderProps) => {
	return (
		<HeaderContainer rtl={rtl} aria-label="Header">
			<ReferenceText>{reference}</ReferenceText>
			<BibleName>{bibleName.toUpperCase()}</BibleName>
		</HeaderContainer>
	);
};

// – – – – – – – – – –
interface PassageProps {
	content: string;
	rtl?: boolean;
}

// – – – – – – – – – –
const PassageContainer = styled.section`
	margin-bottom: 20px;
	margin-top: 10px;
`;

// – – – – – – – – – –
const Passage = (props: PassageProps) => {
	const { rtl = false } = props;

	return (
		<PassageContainer
			className="scripture-styles"
			dir={rtl ? "rtl" : "ltr"}
			aria-label="Passage"
		>
			{parse(props.content)}
		</PassageContainer>
	);
};

// – – – – – – – – – –
export interface BiblePassageDisplayProps {
	bibleName: string;
	reference: string;
	content: string;
	rtl?: boolean;
	copyright: string;
}

// – – – – – – – – – –
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 600px; /* Set a maximum width for larger screens */
	padding: 10px;
	box-sizing: border-box;
	margin: 0 auto; /* Center the container */

	@media (max-width: 600px) {
		padding: 5px;
		max-width: 100%; /* Full width for small screens */
	}
`;

// – – – – – – – – – –
const BiblePassageDisplay: React.FC<BiblePassageDisplayProps> = ({
	bibleName,
	reference,
	content,
	rtl = false,
	copyright,
}: BiblePassageDisplayProps) => {
	return (
		<Container data-testid="bible-passage-display">
			<Header bibleName={bibleName} reference={reference} rtl={rtl} />
			<Passage content={content} rtl={rtl} />
			<Footer copyright={copyright} rtl={rtl} />
		</Container>
	);
};

export default BiblePassageDisplay;
