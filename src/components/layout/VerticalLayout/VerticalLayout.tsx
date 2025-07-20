import HexagonHeader from "../../../assets/header1.jpg";
import StripedHeader from "../../../assets/header2.jpg";
import MysticalHeader from "../../../assets/header3.jpg";
import type { AcaciaThemes } from "../../ui/interfaces";
import { match } from "ts-pattern";
import { createContext, useCallback, type PropsWithChildren } from "react";
import { Flex, Menu, Space, type MenuProps } from "antd";
import { adjustBrightness } from "@mirawision/colorize";
import { useMainNavStyles } from "../styles/useMainNavStyles";
import ConfigProvider from "../../ui/ConfigProvider/ConfigProvider";
import DefaultLogo from "../../../theme/defaultLogo";
import { Helmet } from "react-helmet";
import VerticalHeader from "./VerticalHeader";

interface LayoutProps {
	headerBackgroundProps: HeaderBackgroundProps;
	menuProps?: Omit<MenuProps, "mode">;
	documentHeadLabel?: string;
	mainColor?: string; // main color of the layout
}

// interface to handle header background - props allowed for users to change picture, change theme or custom gradient entirely
interface HeaderBackgroundProps {
	headerBackgroundTheme?: AcaciaThemes;
	headerBackgroundPicture?: string;
	headerBackgroundCustomGradientColors?: string[]; // give a array of hex. if given 1, it will create a gradient of color, if given two, it will create the intermediate, if given three, then it will place the three in
	headerBackgroundCustomGradientCSS?: string; // for customize gradient
}

export const VerticalLayoutContext = createContext<{
	mainColor: string;
	firstBackgroundColor: string;
} | null>(null);

const VerticalLayout = ({
	headerBackgroundProps: {
		headerBackgroundTheme = "classic",
		headerBackgroundPicture,
		headerBackgroundCustomGradientColors,
		headerBackgroundCustomGradientCSS,
	},
	...props
}: PropsWithChildren<LayoutProps>) => {
	const accentColor = adjustBrightness(
		headerBackgroundCustomGradientColors
			? `#${headerBackgroundCustomGradientColors[0]}`
			: "#1d4042",
		45,
	); // for the accent color - subtitles and tabs. based on the color of the theme background
	const headerStyles = useMainNavStyles();

	const getThemedBackground = useCallback(
		() =>
			match(headerBackgroundTheme)
				.with("classic", () => HexagonHeader)
				.with("submarine", () => StripedHeader)
				.with("mystical", () => MysticalHeader)
				.exhaustive(),
		[headerBackgroundTheme],
	);

	const getBackground = useCallback(() => {
		if (headerBackgroundCustomGradientCSS) {
			return headerBackgroundCustomGradientCSS;
		}
		if (headerBackgroundCustomGradientColors) {
			// if its a string array then proceed
			if (Array.isArray(headerBackgroundCustomGradientColors)) {
				// if all three
				return getLinearGradient(headerBackgroundCustomGradientColors);
			}
			console.error(
				"headerBackgroundCustomGradientColors is not a string array",
			);
			return null;
		}
		return getLinearGradient(["1d4042", "37717c", "418384"]);
	}, [headerBackgroundCustomGradientCSS, headerBackgroundCustomGradientColors]);

	const getLinearGradient = useCallback((strings: string[]) => {
		if (strings.length === 3) {
			return `linear-gradient(45deg, #${strings[0]}f2 14%, #${strings[1]}f5 51%, #${strings[2]}f2 81%)`;
		}
		console.error("Need to have 3 strings");
		return null;
	}, []);

	return (
		<VerticalLayoutContext.Provider
			value={{ mainColor: props.mainColor, firstBackgroundColor: accentColor }}
		>
			<Helmet>
				<title>{props.documentHeadLabel}</title>
			</Helmet>
			<div style={{ flexGrow: 1 }}>
				<div
					style={{
						backgroundImage: `${getBackground()}, url(${headerBackgroundPicture ?? getThemedBackground()})`,
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
													itemHoverColor: props.mainColor ?? "white",

													horizontalItemHoverColor: props.mainColor ?? "white",
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
