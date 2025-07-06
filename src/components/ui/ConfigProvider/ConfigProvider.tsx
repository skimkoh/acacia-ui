import { ConfigProvider as AntdConfigProvider } from "antd";
import {
	ConfigContext,
	type ThemeConfig,
} from "antd/es/config-provider/context";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "@fontsource-variable/roboto-flex";
import { ThemeProvider } from "antd-style";
import { CustomTheme, type NewToken } from "../../../theme/customTheme";
import { typographyUtil } from "../../../theme/typographyUtil";
import type { AcaciaConfigProviderProps } from "../interfaces";

const ConfigProvider = ({ ...props }: AcaciaConfigProviderProps) => {
	const { colors, generate } = usePaletteColors();
	const { borderRadius, padding } = usePaletteConfig();

	const { neutral } = generate(
		CustomTheme.theme.accent,
		!CustomTheme.theme.lightOnDark,
	);

	const defaultTheme: ThemeConfig = {
		token: {
			colorPrimary: "#427e7b", // your custom default
			colorText: "#080808",
			colorTextTertiary: "#757C7C",
			fontFamily:
				'"InterVariable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		},
		components: {
			Button: {
				defaultBg: `${colors.offWhite}`,
				defaultBorderColor: `${colors.border.button}`,
				borderRadius: borderRadius.primary,
				colorWarning: colors.warning.primary,
				colorError: colors.error.primary,
				colorErrorBg: colors.error.fill,
				colorLink: colors.link.primary,
				borderRadiusLG: borderRadius.primary,
				borderRadiusSM: borderRadius.primary,
				borderRadiusXS: borderRadius.primary,
			},
			Layout: {
				headerBg: "transparent",
				headerHeight: undefined,
			},
			Breadcrumb: {
				itemColor: neutral[0],
				lastItemColor: neutral[0],
				separatorColor: neutral[0],
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
				colorLink: colors.link.primary,
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
			},
		},
	};

	const mergedToken = {
		...CustomTheme,
		...props.customToken,
	};

	return (
		<ThemeProvider<NewToken> customToken={mergedToken}>
			<AntdConfigProvider
				{...props}
				theme={{
					token: { ...defaultTheme.token, ...props.theme?.token },
					components: {
						...defaultTheme.components,
						...props.theme?.components,
					},
				}}
			>
				{props.children}
			</AntdConfigProvider>
		</ThemeProvider>
	);
};

ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
