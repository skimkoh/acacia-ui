import { ConfigProvider as AntdConfigProvider, theme } from "antd";

import { ThemeProvider } from "antd-style";
import { CustomTheme, type NewToken } from "../../../theme/customTheme";
import type { AcaciaConfigProviderProps } from "../interfaces";
import { useGetDefaultTheme } from "./defaultTheme";
import { useInsertionEffect, type FC } from "react";
import { ConfigContext } from "antd/es/config-provider";
import { injectFontStyles } from "../../../theme/fontStyles";

const ConfigProvider: FC<AcaciaConfigProviderProps> & {
	ConfigContext: typeof ConfigContext;
} = ({ ...props }) => {
	useInsertionEffect(() => {
		injectFontStyles(props.csp?.nonce);
	}, [props.csp?.nonce]);

	const mergedToken = {
		...CustomTheme,
		...props.customToken,
		overlayDarkMode: {
			...CustomTheme.overlayDarkMode,
			...props.customToken?.overlayDarkMode,
		},
	};

	const defaultTheme = useGetDefaultTheme(mergedToken.appThemeMode);

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
					algorithm:
						mergedToken.appThemeMode === "light"
							? theme.defaultAlgorithm
							: theme.darkAlgorithm,
				}}
			>
				{props.children}
			</AntdConfigProvider>
		</ThemeProvider>
	);
};

ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.displayName = "ConfigProvider";
export default ConfigProvider;
