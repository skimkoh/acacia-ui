import { useTheme } from "antd-style";
import type { AcaciaTabsProps } from "../interfaces";
import { Tabs as AntdTabs, ConfigProvider, theme } from "antd";
import { tint } from "@mirawision/colorize";
import { useContext } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
export default function Tabs({ ...props }: AcaciaTabsProps) {
	const token = useTheme();
	const headerColor = tint(token.colorPrimary, 0.7); // for the accent color

	const context = useContext(VerticalLayoutContext);
	const isNestedInLayout = Boolean(context);

	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens

	const defaultTheme = useGetDefaultTheme(); // get the default, overwritten tokens

	// const compTypeToken =
	// 	type === "page"
	// 		? {
	// 				itemColor: pageNeutral[6],
	// 				inkBarColor: inkBarColor,
	// 				itemHoverColor: pageColors[6],
	// 				cardBg: pageNeutral[0],
	// 			}
	// 		: {
	// 				itemSelectedColor: isNestedInLayout
	// 					? context?.accentColor
	// 					: token.colorPrimary,
	// 				itemColor: grey[6],
	// 				inkBarColor: isNestedInLayout
	// 					? context?.accentColor
	// 					: token.colorPrimary,
	// 				itemHoverColor: isNestedInLayout ? context?.accentColor : headerColor,
	// 			};

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
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
			<AntdTabs
				styles={{
					header: {
						borderBottom: "red !important",
					},
				}}
				{...props}
				tabBarGutter={0}
			/>
		</ConfigProvider>
	);
}
