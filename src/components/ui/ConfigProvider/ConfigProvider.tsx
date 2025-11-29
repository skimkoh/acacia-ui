import { ConfigProvider as AntdConfigProvider } from "antd";
import { ConfigContext } from "antd/es/config-provider/context";
import { useAcaciaColors } from "../../../hooks/useAcaciaColors";
import { useAcaciaConfig } from "../../../hooks/useAcaciaConfig";

import { ThemeProvider } from "antd-style";
import { CustomTheme, type NewToken } from "../../../theme/customTheme";
import type { AcaciaConfigProviderProps } from "../interfaces";
import { useGetDefaultTheme } from "./defaultTheme";

const ConfigProvider = ({ ...props }: AcaciaConfigProviderProps) => {
	const { colors, generate } = useAcaciaColors();
	const { borderRadius, padding } = useAcaciaConfig();

	const { neutral } = generate(
		CustomTheme.theme.accent,
		!CustomTheme.theme.lightOnDark,
	);

	const defaultTheme = useGetDefaultTheme();

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
