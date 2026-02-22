/**
 * @description A versatile menu for navigation.
 */

import { Menu as AntdMenu, ConfigProvider, theme } from "antd";
import type { AcaciaMenuProps } from "../interfaces";
import { useContext, useMemo } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
import {
	adjustBrightness,
	blendMultipleColors,
	isValidHEXColor,
	shade,
} from "@mirawision/colorize";
import { editOpacity } from "../../../utils/colors.util";
import { createStyles, useTheme } from "antd-style";
import type {
	ItemType,
	MenuItemType,
	SubMenuType,
} from "antd/es/menu/interface";

const useStyle = createStyles(({ css, prefixCls }) => ({
	item: css`
		&.${prefixCls}-menu-submenu {
			padding: 10px,
			borderBottom:none,	
			marginInline: 3px,
		}
  `,
}));

// type guard to check if the menu item is a submenu
export function isSubMenu<T extends MenuItemType>(
	item: ItemType<T>,
): item is SubMenuType<T> {
	return !!item && "children" in item && Array.isArray(item.children);
}
const Menu = ({ showRightBorder = true, ...props }: AcaciaMenuProps) => {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const globalToken = theme.useToken(); // get the default, antd tokens
	const { styles: menuStyles } = useStyle();
	const token = useTheme();

	const itemsWithDropdownArrows = props.items.map((item) => {
		if (isSubMenu(item)) {
			return {
				...item,
				label: (
					<span>
						{item.label}
						<span style={{ marginLeft: 4 }}>▸</span>
					</span>
				),
			};
		}
		return item;
	});

	const selectedItemColor = useMemo(() => {
		if (isNestedInLayout) {
			const blended = blendMultipleColors(
				context.gradients.map((item) => {
					return {
						color: item,
						weight: 1,
					};
				}),
			);
			const color = shade(blended, 0.5);

			return {
				menuColor: context?.accentColor,
				menuBgColor: isValidHEXColor(color)
					? editOpacity("hex", color)
					: editOpacity("rgba", color),
			};
		}
	}, [context?.accentColor, isNestedInLayout]);

	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				components: {
					Menu: {
						...defaultTheme.components.Menu,
						...(isNestedInLayout
							? {
									activeBarHeight: 0,
									itemBg: "transparent",
									horizontalItemSelectedColor: selectedItemColor.menuColor,
									horizontalItemSelectedBg: selectedItemColor.menuBgColor,
									activeBarBorderWidth: 0,
									itemColor: context.mainTextColor,
									horizontalItemBorderRadius: 3,
									itemHoverColor: adjustBrightness(
										selectedItemColor.menuColor,
										10,
									),
									subMenuItemBg: selectedItemColor.menuBgColor,
									subMenuItemSelectedColor: selectedItemColor.menuColor,
								}
							: {}), // only override if its nested in the layout
					},
				},
			}}
		>
			<AntdMenu
				classNames={{
					item: menuStyles.item,
				}}
				styles={{
					root: {
						...(isNestedInLayout && {
							flex: 1,
							display: "flex",
							width: "100%",
							alignItems: "center",
							borderBottom: "none",
						}),
						borderRight: showRightBorder ? "" : "none",
					},
					item: {
						...(isNestedInLayout && {
							padding: "8px 10px",
							borderBottom: "none",
							marginInline: "3px",
						}),
					},
				}}
				{...props}
				items={itemsWithDropdownArrows}
			/>
		</ConfigProvider>
	);
};
export default Menu;
