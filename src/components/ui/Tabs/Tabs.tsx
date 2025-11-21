import { useTheme } from "antd-style";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import type { AcaciaTabsProps } from "../interfaces";
import { Tabs as AntdTabs, theme } from "antd";
import type { TabsType } from "antd/es/tabs";
import { grey } from "@ant-design/colors";
import { tint } from "@mirawision/colorize";
import { useContext } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { usePaletteToken } from "../../../tokens/usePaletteToken";
import { ConfigContext } from "antd/es/config-provider";
export default function Tabs({ type, ...restProps }: AcaciaTabsProps) {
	const { generate } = usePaletteColors();
	const token = useTheme();
	const headerColor = tint(token.colorPrimary, 0.7); // for the accent color

	const tokens = usePaletteToken();
	const token3 = theme.useToken();
	const context = useContext(VerticalLayoutContext);
	const isNestedInLayout = Boolean(context);

	console.log(`token:${token.colorPrimary}`);
	console.log(`token2:${tokens.token.colorPrimary}`);
	console.log(`token3:${token3.token.colorPrimary}`);
	const { tabs } = useContext(ConfigContext);
	console.log(tabs);

	console.log(`token4:${token.tabs.headerItemSelectedColor}`);
	console.log(`token5:${token3.token.Tabs.inkBarColor}`);

	console.log(`isnested:${isNestedInLayout}`);
	console.log(`type:${type}`);
	console.log(`color:${context?.firstBackgroundColor}`);

	const { colors: pageColors, neutral: pageNeutral } = generate(
		token.colorPrimary,
	);

	const inkBarColor = type === "page" ? pageColors[5] : headerColor;

	const compTypeToken =
		type === "page"
			? {
					itemColor: pageNeutral[6],
					inkBarColor: inkBarColor,
					itemHoverColor: pageColors[6],
					cardBg: pageNeutral[0],
				}
			: {
					itemSelectedColor: isNestedInLayout
						? context?.firstBackgroundColor
						: token.colorPrimary,
					itemColor: grey[6],
					inkBarColor: isNestedInLayout
						? context?.firstBackgroundColor
						: token.colorPrimary,
					itemHoverColor: isNestedInLayout
						? context?.firstBackgroundColor
						: headerColor,
				};

	return <AntdTabs {...restProps} type={type as TabsType} tabBarGutter={0} />;
}
