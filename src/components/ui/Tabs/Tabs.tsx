import { useTheme } from "antd-style";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import type { AcaciaTabsProps } from "../interfaces";
import { Tabs as AntdTabs } from "antd";
import { useTabsStyles } from "./useTabsStyle";
import ConfigProvider from "../ConfigProvider/ConfigProvider";
import type { TabsType } from "antd/es/tabs";
import { grey } from "@ant-design/colors";
import { tint } from "@mirawision/colorize";
import { useContext } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
export default function Tabs({ type, ...restProps }: AcaciaTabsProps) {
	const { generate } = usePaletteColors();
	const token = useTheme();
	const headerColor = tint(token.colorPrimary, 0.7); // for the accent color

	const context = useContext(VerticalLayoutContext);
	const isNestedInLayout = Boolean(context);

	console.log(`isnested:${isNestedInLayout}`);
	console.log(`type:${type}`);
	console.log(`color:${context.firstBackgroundColor}`);

	const { colors: pageColors, neutral: pageNeutral } = generate(
		token.colorPrimary,
	);

	const inkBarColor = type === "page" ? pageColors[5] : headerColor;
	const tabsStyles = useTabsStyles(inkBarColor)?.styles;

	const compTypeToken =
		type === "page"
			? {
					itemSelectedColor: pageColors[4],
					itemColor: pageNeutral[6],
					inkBarColor: inkBarColor,
					itemHoverColor: pageColors[6],
					cardBg: pageNeutral[0],
				}
			: {
					itemSelectedColor: isNestedInLayout
						? context.firstBackgroundColor
						: headerColor,
					itemColor: grey[6],
					inkBarColor: isNestedInLayout
						? context.firstBackgroundColor
						: inkBarColor,
					itemHoverColor: isNestedInLayout
						? context.firstBackgroundColor
						: headerColor,
				};

	return (
		<ConfigProvider
			theme={{
				token: {
					colorBorderSecondary: type === "page" ? grey[6] : grey[6],
				},
				components: {
					Tabs: {
						...compTypeToken,
					},
				},
			}}
		>
			<AntdTabs {...restProps} type={type as TabsType} tabBarGutter={0} />
		</ConfigProvider>
	);
}
