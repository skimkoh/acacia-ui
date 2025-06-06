import {
	ConfigProvider as AntdConfigProvider,
	type ConfigProviderProps,
} from "antd";
import {
	ConfigContext,
	type ThemeConfig,
} from "antd/es/config-provider/context";
import "@fontsource-variable/outfit";
import "@fontsource-variable/inter";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";
import "@fontsource-variable/inter/wght.css";
import { ThemeProvider } from "antd-style";
import { CustomTheme, type NewToken } from "../../../theme/customTheme";

const ConfigProvider = ({ ...props }: ConfigProviderProps) => {
	const { colors, generate } = usePaletteColors();
	const { borderRadius } = usePaletteConfig();

	const { neutral } = generate(
		CustomTheme.theme.accent,
		!CustomTheme.theme.lightOnDark,
	);

	const defaultTheme: ThemeConfig = {
		token: {
			colorPrimary: "#427e7b", // your custom default
			fontFamily:
				'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
			Breadcrumb: {
				itemColor: neutral[0],
				lastItemColor: neutral[0],
				separatorColor: neutral[0],
			},
			Checkbox: {
				colorPrimaryHover: "#427e7b",
				lineWidth: 2,
			},
		},
	};

	return (
		<ThemeProvider<NewToken> customToken={CustomTheme}>
			<AntdConfigProvider theme={{ ...defaultTheme, ...props.theme }}>
				{props.children}
			</AntdConfigProvider>
		</ThemeProvider>
	);
};

ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
