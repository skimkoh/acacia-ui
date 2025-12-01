import HexagonHeader from "../../../assets/header1.jpg";
import StripedHeader from "../../../assets/header2.jpg";
import MysticalHeader from "../../../assets/header3.jpg";
import type { AcaciaThemes } from "../../ui/interfaces";
import { match } from "ts-pattern";
import { createContext, useCallback, type PropsWithChildren } from "react";
import { Flex, Menu, Space, type MenuProps } from "antd";
import {
	adjustBrightness,
	generateSteppedGradient,
	isLight,
} from "@mirawision/colorize";
import { useMainNavStyles } from "../styles/useMainNavStyles";
import ConfigProvider from "../../ui/ConfigProvider/ConfigProvider";
import DefaultLogo from "../../../theme/defaultLogo";
import { Helmet } from "react-helmet";
import VerticalHeader from "./VerticalHeader";
import { renderBlackOrWhiteText } from "../../../utils/colors.util";
import { parseBackgroundColors } from "../../../utils/parseBackgroundColors";

interface LayoutProps {
	headerBackgroundProps: HeaderBackgroundProps;
	menuProps?: Omit<MenuProps, "mode">;
	documentHeadLabel?: string;
	mainTextColor?: string; // main color of the layout
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

const getThemedBackgroundPicture = (theme: AcaciaThemes) => {
	return match(theme)
		.with("classic", () => HexagonHeader)
		.with("submarine", () => StripedHeader)
		.with("mystical", () => MysticalHeader)
		.exhaustive();
};

export const VerticalLayoutContext = createContext<{
	mainTextColor: string;
	accentColor: string;
} | null>(null);

const VerticalLayout = ({
	headerBackgroundProps: {
		headerBackgroundImage = { type: "theme", theme: "classic" },
		headerBackgroundFill = { type: "theme", theme: "classic" },
	},
	...props
}: PropsWithChildren<LayoutProps>) => {
	// get the first bg color
	const getFirstBackgroundHexColor = () => {
		return match(headerBackgroundFill)
			.with({ type: "theme" }, ({ theme }) => {
				return "#1d4042";
			})
			.with({ type: "gradient" }, ({ colors }) => {
				return colors[0];
			})
			.with({ type: "gradient-css" }, ({ css }) => {
				// get hte background color

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

	const accentColor = adjustBrightness(
		firstBackgroundColor,
		isLight(firstBackgroundColor) ? -45 : 45,
	); // for the accent color - subtitles and tabs. based on the color of the theme background
	const headerStyles = useMainNavStyles();

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
			.with({ type: "theme" }, () => {
				return getLinearGradient(["#1d4042", "#37717c", "#418384"]);
			})
			.with({ type: "gradient" }, ({ colors }) => {
				// given a string [], generate the gradient. if given two. then generate the inbetween. Do not accept length with 1

				if (colors.length === 2) {
					const gradient = generateSteppedGradient(colors[0], colors[1], 3);
					return getLinearGradient(gradient);
				}

				if (colors.length === 3) {
					return getLinearGradient(colors);
				}
				console.error(
					"Either give a string[] with 2 HEX colors or 3 HEX colors",
				);
				return getLinearGradient(["1d4042", "37717c", "418384"]);
			})
			.with({ type: "gradient-css" }, ({ css }) => {
				// users write the css straight
				return css;
			})
			.exhaustive();
	};

	// for each type of header - the way to get background image changes
	const getBackgroundImage = () => {
		return match(headerBackgroundImage)
			.with({ type: "theme" }, ({ theme }) => {
				return getThemedBackgroundPicture(theme);
			})
			.with({ type: "custom-image" }, ({ src }) => {
				return src;
			})
			.exhaustive();
	};

	return (
		<VerticalLayoutContext.Provider
			value={{
				mainTextColor:
					props.mainTextColor ?? renderBlackOrWhiteText(firstBackgroundColor), // by default it will try to render white/black text for content
				accentColor: accentColor,
			}}
		>
			<Helmet>
				<title>{props.documentHeadLabel}</title>
			</Helmet>
			<div style={{ flexGrow: 1 }}>
				<div
					style={{
						backgroundImage: `${getBackgroundCSS()}, url(${getBackgroundImage()})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div style={{ padding: "1rem 2rem 2rem 2rem" }}>
						<Flex justify="space-between">
							<Space>
								<DefaultLogo />
								{props.menuProps && (
									<ConfigProvider
										menu={{ className: headerStyles.styles }}
										theme={{
											components: {
												Menu: {
													itemHoverColor: props.mainTextColor ?? "white",

													horizontalItemHoverColor:
														props.mainTextColor ?? "white",
												},
											},
										}}
									>
										<Menu mode="horizontal" {...props.menuProps} />
									</ConfigProvider>
								)}
							</Space>
						</Flex>
						{props.children}
					</div>
				</div>
			</div>
		</VerticalLayoutContext.Provider>
	);
};

VerticalLayout.VerticalHeader = VerticalHeader;
export default VerticalLayout;
