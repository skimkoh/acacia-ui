import type { AcaciaTabsProps } from "../interfaces";
import { Tabs as AntdTabs, ConfigProvider, theme } from "antd";
import { adjustBrightness, isLight } from "@mirawision/colorize";
import { useContext } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
import { useTheme } from "antd-style";
export default function Tabs({ ...props }: AcaciaTabsProps) {
	const context = useContext(VerticalLayoutContext);
	const isNestedInLayout = Boolean(context); // for when tabs are nested in Layout

	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens
	const token = useTheme();

	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: {
					...defaultTheme.token,
					...globalToken.token,
					...(isNestedInLayout
						? {
								colorBorderSecondary: `${adjustBrightness(
									context.mainTextColor,
									isLight(context.mainTextColor) ? -15 : 15,
								)} !important`,
							}
						: {}),
				},
				components: {
					Tabs: {
						...defaultTheme.components.Tabs,
						...(isNestedInLayout
							? {
									itemHoverColor: context.accentColor,
									itemColor: context.accentColor,
									inkBarColor: context.accentColor,
									itemActiveColor: context.accentColor,
									itemSelectedColor: context.accentColor,
								}
							: {}), // only override if its nested in the layout
					},
				},
			}}
		>
			<AntdTabs {...props} tabBarGutter={0} />
		</ConfigProvider>
	);
}
