import { useTheme } from "antd-style";
import HexagonHeader from "../../../assets/header1.jpg";
import StripedHeader from "../../../assets/header2.jpg";
import MysticalHeader from "../../../assets/header3.jpg";
import type { AcaciaThemes } from "../../ui/interfaces";
import { match } from "ts-pattern";
import type { PropsWithChildren } from "react";
import { Flex, Menu, Space, type MenuProps } from "antd";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { tint } from "@mirawision/colorize";
import { useMainNavStyles } from "../styles/useMainNavStyles";
import ConfigProvider from "../../ui/ConfigProvider/ConfigProvider";
import DefaultLogo from "../../../theme/defaultLogo";
import { Helmet } from "react-helmet";
import VerticalHeader from "./VerticalHeader";

interface LayoutProps {
	headerBackgroundTheme?: AcaciaThemes;
	headerBackgroundPicture?: string;
	menuProps?: Omit<MenuProps, "mode">;
	documentHeadLabel?: string;
}

const VerticalLayout = ({
	headerBackgroundTheme = "classic",
	...props
}: PropsWithChildren<LayoutProps>) => {
	const token = useTheme();
	const { generate } = usePaletteColors();
	const accentColor = tint(token.colorPrimary, 0.7); // for the accent color
	const headerStyles = useMainNavStyles();

	const getThemedBackground = () => {
		return match(headerBackgroundTheme)
			.with("classic", () => HexagonHeader)
			.with("submarine", () => StripedHeader)
			.with("mystical", () => MysticalHeader)
			.exhaustive();
	};

	return (
		<div>
			<Helmet>
				<title>{props.documentHeadLabel}</title>
			</Helmet>
			<div style={{ flexGrow: 1 }}>
				<div
					style={{
						backgroundImage: `linear-gradient(45deg, #1d4042f2 14%, rgb(55 113 124 / 96%) 51%, #418384f2 81%), url(${props.headerBackgroundPicture ?? getThemedBackground()})`,
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
													itemHoverColor: "white",
													horizontalItemHoverColor: "white",
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
		</div>
	);
};

VerticalLayout.VerticalHeader = VerticalHeader;
export default VerticalLayout;
