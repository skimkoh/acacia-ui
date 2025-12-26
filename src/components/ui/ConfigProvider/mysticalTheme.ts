import type { ThemeConfig } from "antd";
import { useAcaciaColors } from "../../../hooks/useAcaciaColors";
import { useAcaciaConfig } from "../../../hooks/useAcaciaConfig";
import { useMemo } from "react";
import { grey } from "@ant-design/colors";
import { typographyUtil } from "../../../theme/typographyUtil";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "@fontsource-variable/roboto-flex";

// classic theme

export function useGetDefaultTheme(): ThemeConfig {
	const { colors } = useAcaciaColors();
	const { borderRadius, padding } = useAcaciaConfig();

	return useMemo<ThemeConfig>(() => {
		return {
			token: {
				colorPrimary: "#685389", // your custom default
				colorText: "#080808",
				colorTextTertiary: "#757C7C",
				fontFamily:
					"'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
				borderRadius: borderRadius.primary,
				borderRadiusLG: borderRadius.primary,
				borderRadiusSM: borderRadius.primary,
				borderRadiusXS: borderRadius.primary,
			},
			components: {
				Button: {
					defaultBg: `${colors.offWhite}`,
					defaultBorderColor: `${colors.border.button}`,
					borderRadius: borderRadius.primary,
					colorWarning: colors.warning.primary,
					colorError: colors.error.primary,
					colorErrorBg: colors.error.fill,
					borderRadiusLG: borderRadius.primary,
					borderRadiusSM: borderRadius.primary,
					borderRadiusXS: borderRadius.primary,
				},
				Layout: {
					headerBg: "transparent",
					headerHeight: undefined,
					headerPadding: "10px 0px 0px 0px",
				},
				Checkbox: {
					lineWidth: 2,
				},
				Select: {
					borderRadius: borderRadius.primary,
					borderRadiusLG: borderRadius.primary,
					borderRadiusSM: borderRadius.primary,
					borderRadiusXS: borderRadius.primary,
				},
				Input: {
					borderRadius: borderRadius.primary,
					borderRadiusLG: borderRadius.primary,
					borderRadiusSM: borderRadius.primary,
					borderRadiusXS: borderRadius.primary,
					colorWarning: colors.warning.primary,
					colorError: colors.error.primary,
					colorBgTextHover: colors.link.hover,
				},
				Pagination: {
					borderRadius: borderRadius.primary,
					borderRadiusLG: borderRadius.primary,
					borderRadiusSM: borderRadius.primary,
					borderRadiusXS: borderRadius.primary,
				},
				Typography: {
					fontSizeHeading1: typographyUtil.fontSize.h1,
					fontSizeHeading2: typographyUtil.fontSize.h2,
					fontSizeHeading3: typographyUtil.fontSize.h3,
					fontSizeHeading4: typographyUtil.fontSize.h4,
					fontSizeHeading5: typographyUtil.fontSize.h5,
					fontWeightStrong: 600,
				},
				Card: {
					borderRadius: borderRadius.card,
					borderRadiusLG: borderRadius.card,
					borderRadiusSM: borderRadius.card,
					borderRadiusXS: borderRadius.card,
				},
				Tag: {
					borderRadius: borderRadius.tag,
					borderRadiusLG: borderRadius.tag,
					borderRadiusSM: borderRadius.tag,
					borderRadiusXS: borderRadius.tag,
				},
				Tabs: {
					horizontalItemPadding: padding.tabs,
					horizontalItemPaddingLG: padding.tabs,
					horizontalItemPaddingSM: padding.tabs,
					colorBorderSecondary: grey[1],
				},
				Dropdown: {
					borderRadius: borderRadius.primary,
					borderRadiusLG: borderRadius.primary,
					borderRadiusSM: borderRadius.primary,
					borderRadiusXS: borderRadius.primary,
				},
				Menu: {
					popupBg: "grey",
				},
			},
		};
	}, [colors, borderRadius, padding]);
}
