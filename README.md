<h1 align="center">Ephrem View</h1>

<p align="center">Ephrem-view is a React component library for rendering scripture passages retrieved from API.Bible and Ephrem, providing flexible and responsive designs for seamless scriptural presentation.</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/stevin-wilson/ephrem-view/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/stevin-wilson/ephrem-view" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/stevin-wilson/ephrem-view?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/stevin-wilson/ephrem-view/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/ephrem-view"><img alt="📦 npm version" src="https://img.shields.io/npm/v/ephrem-view?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

### Installation

To use the PassageView component in your project, follow these steps:

```shell
npm i ephrem-view
```

### Importing and Using PassageView

Import the `PassageView` component into your React application:

```tsx
import React from "react";
import PassageView from "ephrem-view";

const App = () => {
	const bibleName = "Berean Standard Bible";
	const reference = "1 John 3:18";
	const content =
		'<p class="b"></p><p class="m">Little children, let us love not in word and speech, but in action and truth. </p>';
	const rtl = false;
	const copyright =
		"The Holy Bible, Berean Standard Bible, BSB is produced in cooperation with Bible Hub, Discovery Bible, OpenBible.com, and the Berean Bible Translation Committee. This text of God's Word has been dedicated to the public domain";

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<p style={{ lineHeight: 1.5 }}>
				St. Gregory the Great says, “The proof of love is in the works. Where
				love exists, it works great things. But when it ceases to act, it ceases
				to exist,” echoing the Apostle John’s words in{" "}
				<PassageView
					variant={variant}
					color={color}
					darkMode={darkMode}
					highContrast={highContrast}
					bibleName={bibleName}
					content={content}
					copyright={copyright}
					reference={reference}
					rtl={rtl}
				>
					1 John 3:18
				</PassageView>
			</p>
		</div>
	);
};

export default App;
```

### Props

The `PassageView` component accepts the following props:

`bibleName`: The name of the Bible version.
`reference`: The scripture reference.
`content`: The content of the passage in HTML format.
`rtl`: Boolean indicating if the text direction is right-to-left.
`copyright`: Copyright information for the passage.
`variant`: The variant of the view ("outlined", "contained", or "text").
`color`: The color theme for the view.
`darkMode`: Boolean indicating if dark mode is enabled.
`highContrast`: Boolean indicating if high contrast mode is enabled.
`children`: The text to be displayed as the anchor.

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/stevin-wilson"><img src="https://avatars.githubusercontent.com/u/55603058?v=4?s=100" width="100px;" alt="Stevin Wilson"/><br /><sub><b>Stevin Wilson</b></sub></a><br /><a href="https://github.com/stevin-wilson/ephrem-view/commits?author=stevin-wilson" title="Code">💻</a> <a href="#content-stevin-wilson" title="Content">🖋</a> <a href="https://github.com/stevin-wilson/ephrem-view/commits?author=stevin-wilson" title="Documentation">📖</a> <a href="#ideas-stevin-wilson" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-stevin-wilson" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-stevin-wilson" title="Maintenance">🚧</a> <a href="#projectManagement-stevin-wilson" title="Project Management">📆</a> <a href="#tool-stevin-wilson" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
