import HexagonHeader from "../assets/header1.jpg";
import StripedHeader from "../assets/header2.jpg";
import MysticalHeader from "../assets/header3.jpg";
import ClassicBody from "../assets/body.png";
import MysticalBody from "../assets/body3.png";
import SubmarineBody from "../assets/body2.png";
import ClassicTitleHeader from "../assets/cardheader.png";
import SubmarineTitleHeader from "../assets/cardheader2.png";
import MysticalTitleHeader from "../assets/cardheader3.png";

import type { AcaciaThemes } from "../components/ui/interfaces";
import { match } from "ts-pattern";

// for vertical layout
export const getThemedBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => HexagonHeader)
		.with("submarine", () => StripedHeader)
		.with("mystical", () => MysticalHeader)
		.exhaustive();
};

export const getThemedContentBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => ClassicBody)
		.with("submarine", () => SubmarineBody)
		.with("mystical", () => MysticalBody)
		.exhaustive();
};

// for title headers bg
export const getThemedTitleHeaderBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => ClassicTitleHeader)
		.with("submarine", () => SubmarineTitleHeader)
		.with("mystical", () => MysticalTitleHeader)
		.exhaustive();
};
