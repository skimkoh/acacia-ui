import HexagonHeader from "../../../assets/header1.jpg";
import StripedHeader from "../../../assets/header2.jpg";
import MysticalHeader from "../../../assets/header3.jpg";
import ClassicBody from "../../../assets/body.png";
import MysticalBody from "../../../assets/body3.png";
import SubmarineBody from "../../../assets/body2.png";

import type { AcaciaMenuProps, AcaciaThemes } from "../../ui/interfaces";
import { match } from "ts-pattern";
import {
	Children,
	createContext,
	useCallback,
	type PropsWithChildren,
} from "react";
import { Layout } from "antd";
import {
	adjustBrightness,
	generateSteppedGradient,
	getLuminance,
	isLight,
} from "@mirawision/colorize";
import { Helmet } from "react-helmet";
import { renderBlackOrWhiteText } from "../../../utils/colors.util";
import { parseBackgroundColors } from "../../../utils/parseBackgroundColors";
import Menu from "../../ui/Menu/Menu";
import DefaultLogo from "../../../theme/defaultLogo";
import VerticalHeader from "./VerticalHeader";
import VerticalContent from "./VerticalContent";
import {
	getThemeGradients,
	isVerticalContent,
	isVerticalHeader,
} from "../utils";
import { useTheme } from "antd-style";

interface LayoutProps {
	headerBackgroundProps?: HeaderBackgroundProps;
	menuProps?: Omit<AcaciaMenuProps, "mode">;
	documentHeadLabel?: string;
	mainTextColor?: string; // main color of the layout
	contentBackgroundProps?: ContentBackgroundProps;
}

// theme background image props for the header
type BackgroundImage =
	| {
			type: "theme";
			theme: AcaciaThemes;
	  }
	| { type: "custom-image"; src: string };

// background fill
type BackgroundFill =
	| {
			type: "theme";
			theme: AcaciaThemes;
	  }
	| { type: "gradient"; colors: string[] }
	| { type: "gradient-css"; css: string };

// interface to handle header background - props allowed for users to change picture, change theme or custom gradient entirely
interface HeaderBackgroundProps {
	headerBackgroundImage?: BackgroundImage;
	headerBackgroundFill?: BackgroundFill;
}

// theme background image props for the content bg
type ContentBackgroundImage =
	| {
			type: "theme";
			theme: AcaciaThemes;
	  }
	| { type: "custom-image"; src: string };

// background fill for
type ContentBackgroundFill =
	| {
			type: "theme";
			theme: AcaciaThemes;
	  }
	| { type: "solid"; color: string };

interface ContentBackgroundProps {
	contentBackgroundImage?: ContentBackgroundImage;
	contentBackgroundFill?: ContentBackgroundFill;
}

const getThemedBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => HexagonHeader)
		.with("submarine", () => StripedHeader)
		.with("mystical", () => MysticalHeader)
		.exhaustive();
};

const getThemedContentBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => ClassicBody)
		.with("submarine", () => SubmarineBody)
		.with("mystical", () => MysticalBody)
		.exhaustive();
};

export const VerticalLayoutContext = createContext<{
	mainTextColor: string;
	accentColor: string;
	gradients: string[] | null;
} | null>(null);

const VerticalLayout = ({
	headerBackgroundProps: {
		headerBackgroundImage = { type: "theme", theme: "classic" },
		headerBackgroundFill = { type: "theme", theme: "classic" },
	} = {},
	contentBackgroundProps: {
		contentBackgroundFill = { type: "theme", theme: "classic" },
		contentBackgroundImage = { type: "theme", theme: "classic" },
	} = {},
	...props
}: PropsWithChildren<LayoutProps>) => {
	const defaultTheme = useTheme().appTheme; // get the app theme

	// get the first bg color
	const getFirstBackgroundHexColor = () => {
		return match(headerBackgroundFill)
			.with({ type: "theme" }, ({ theme }) => {
				if (theme !== "classic") {
					return getThemeGradients[theme][0];
				}

				return getThemeGradients[defaultTheme][0];
			})
			.with({ type: "gradient" }, ({ colors }) => {
				return colors[0];
			})
			.with({ type: "gradient-css" }, ({ css }) => {
				// get the background color

				const colors = parseBackgroundColors(css);
				const firstColor = colors.colors[0];
				if (firstColor.format === "hex" || firstColor.format === "rgb") {
					return firstColor.value;
				}
				console.error("Named colors not allowed, return HEX or RGB");
				return "#1d4042";
			})
			.exhaustive();
	};

	const firstBackgroundColor = getFirstBackgroundHexColor();

	const accentColor =
		getLuminance(firstBackgroundColor) > 0.4
			? adjustBrightness(firstBackgroundColor, -45)
			: adjustBrightness(
					firstBackgroundColor,
					isLight(firstBackgroundColor) ? -45 : 45,
				); // for the accent color - subtitles and tabs. based on the color of the theme background

	const getLinearGradient = useCallback((strings: string[]) => {
		if (strings.length === 3) {
			return `linear-gradient(45deg, ${strings[0]}f2 14%, ${strings[1]}f5 51%, ${strings[2]}f2 81%)`;
		}
		console.error("Need to have 3 strings");
		return null;
	}, []);

	// get the correct css
	const getBackgroundCSS = () => {
		return match(headerBackgroundFill)
			.with({ type: "theme" }, ({ theme }) => {
				if (theme !== "classic") {
					return {
						css: getLinearGradient(getThemeGradients[theme]),
						stops: getThemeGradients[theme],
					};
				}
				return {
					css: getLinearGradient(getThemeGradients[defaultTheme]),
					stops: getThemeGradients.classic,
				};
			})
			.with({ type: "gradient" }, ({ colors }) => {
				// given a string [], generate the gradient. if given two. then generate the inbetween. Do not accept length with 1

				if (colors.length === 2) {
					const gradient = generateSteppedGradient(colors[0], colors[1], 3);

					return {
						css: getLinearGradient(gradient),
						stops: gradient,
					};
				}

				if (colors.length === 3) {
					return {
						css: getLinearGradient(colors),
						stops: colors,
					};
				}
				console.error(
					"Either give a string[] with 2 HEX colors or 3 HEX colors",
				);
				return {
					css: getLinearGradient(["1d4042", "37717c", "418384"]),
					stops: ["#1d4042", "#37717c", "#418384"],
				};
			})
			.with({ type: "gradient-css" }, ({ css }) => {
				// users write the css straight
				const colors = parseBackgroundColors(css);

				return {
					css: css,
					stops: colors.colors.map((item) => item.value),
				};
			})
			.exhaustive();
	};

	const { css, stops } = getBackgroundCSS();

	// for each type of header - the way to get background image changes
	const getBackgroundImage = () => {
		return match(headerBackgroundImage)
			.with({ type: "theme" }, ({ theme }) => {
				if (theme !== "classic") {
					return getThemedBackgroundPicture(theme);
				}
				return getThemedBackgroundPicture(defaultTheme);
			})
			.with({ type: "custom-image" }, ({ src }) => {
				return src;
			})
			.exhaustive();
	};

	// for each type of header - the way to get background image changes
	const getContentBackgroundImage = () => {
		return match(contentBackgroundImage)
			.with({ type: "theme" }, ({ theme }) => {
				if (theme !== "classic") {
					return getThemedContentBackgroundPicture(theme);
				}
				return getThemedContentBackgroundPicture(defaultTheme);
			})
			.with({ type: "custom-image" }, ({ src }) => {
				return src;
			})
			.exhaustive();
	};

	// get children under VerticalLayout
	const allChildren = Children.toArray(props.children);

	// get the header children, so can apply the correct CSS to it
	const headerChildren = allChildren.filter(isVerticalHeader);

	// get the content children as this needs to be overlapped with the bg
	const contentChildren = allChildren.filter(isVerticalContent);

	// get the layout padding
	// if there is content children, then increase the padding
	const getLayoutPadding = () => {
		if (contentChildren.length > 0) {
			return "1rem 2rem 3rem 2rem";
		}
		return "1rem 2rem 0rem 2rem";
	};

	return (
		<VerticalLayoutContext.Provider
			value={{
				mainTextColor:
					props.mainTextColor ?? renderBlackOrWhiteText(firstBackgroundColor), // by default it will try to render white/black text for content
				accentColor: accentColor,
				gradients: stops,
			}}
		>
			<Helmet>
				<title>{props.documentHeadLabel}</title>
			</Helmet>

			<Layout style={{ minHeight: "100vh" }}>
				<div
					style={{
						backgroundImage: `${css}, url(${getBackgroundImage()})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div style={{ padding: getLayoutPadding() }}>
						<Layout.Header style={{ display: "flex", alignItems: "center" }}>
							<DefaultLogo />
							{props.menuProps && (
								<Menu
									mode="horizontal"
									{...props.menuProps}
									style={{
										flex: 1,
										minWidth: 0,
										fontSize: 16,
										fontWeight: 700,
										...props.menuProps.style,
									}}
								/>
							)}
						</Layout.Header>
						{headerChildren}
					</div>
				</div>
				<Layout.Content
					style={{
						background: `#f3f3f3 url(${getContentBackgroundImage()}) top left`,
						padding: contentChildren && "2rem",
						flex: 1,
						zIndex: 1,
					}}
				>
					{contentChildren}
				</Layout.Content>
			</Layout>
		</VerticalLayoutContext.Provider>
	);
};

VerticalLayout.VerticalHeader = VerticalHeader;
VerticalLayout.VerticalContent = VerticalContent;
export default VerticalLayout;
