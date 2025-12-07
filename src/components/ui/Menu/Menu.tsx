/**
 * @description A versatile menu for navigation.
 */

import { Menu as AntdMenu, ConfigProvider, theme } from "antd";
import type { AcaciaMenuProps } from "../interfaces";
import { useContext, useMemo } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
import { shade } from "@mirawision/colorize";
import { hexToRGBA } from "../../../utils/colors.util";

const Menu = ({ showRightBorder = true, ...props }: AcaciaMenuProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens

	const selectedItemColor = useMemo(() => {
		if (isNestedInLayout) {
			const color = shade(context.accentColor, 0.5);
			return {
				menuColor: context.accentColor,
				menuBgColor: hexToRGBA(color, 20),
			};
		}
	}, [context.accentColor, isNestedInLayout]);

	const defaultTheme = useGetDefaultTheme(); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				components: {
					Menu: {
						...defaultTheme.components.Menu,
						...(isNestedInLayout
							? {
									itemBg: "transparent",
									horizontalItemSelectedColor: selectedItemColor.menuColor,
									horizontalItemSelectedBg: selectedItemColor.menuBgColor,
									activeBarBorderWidth: 0,
									itemColor: context.mainTextColor,
									horizontalItemBorderRadius: 3,
								}
							: {}), // only override if its nested in the layout
					},
				},
			}}
		>
			<AntdMenu
				styles={{
					root: {
						borderRight: showRightBorder ? "" : "none",
						flex: 1,
						display: "flex",
						width: "100%",
						borderBottom:
							props.mode === "horizontal" && isNestedInLayout && "none",
					},
					item: {
						padding: isNestedInLayout && "10px 15px",
						borderBottom: isNestedInLayout && "none",
					},
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};
export default Menu;
