/**
 * @description A versatile menu for navigation.
 */

import { Menu as AntdMenu, ConfigProvider, theme } from "antd";
import type { AcaciaMenuProps } from "../interfaces";
import { useContext } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";

const Menu = ({ showRightBorder = true, ...props }: AcaciaMenuProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens

	const defaultTheme = useGetDefaultTheme(); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				// components: {
				// 	Menu: {
				// 		...defaultTheme.components.Menu,
				// 		...(isNestedInLayout
				// 			? {
				// 					linkColor: context.mainTextColor,
				// 					itemColor: context.mainTextColor,
				// 					lastItemColor: context.mainTextColor,
				// 					separatorColor: context.mainTextColor,
				// 				}
				// 			: {}), // only override if its nested in the layout
				// 	},
				// },
			}}
		>
			<AntdMenu
				styles={{
					root: {
						borderRight: showRightBorder ? "" : "none",
						width: props.mode === "horizontal" && isNestedInLayout && 300,
					},
					item: {
						background:
							props.mode === "horizontal" && isNestedInLayout && "pink",
					},
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};
export default Menu;
