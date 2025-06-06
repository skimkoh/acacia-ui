import {
  ConfigProvider as AntdConfigProvider,
  Button,
  ConfigProviderProps,
} from "antd";
import { ConfigContext, ThemeConfig } from "antd/es/config-provider/context";
import defaultTheme from "../../../theme/theme";
import { PaletteConfigProviderProps, PaletteCustomToken } from "../interfaces";
import "@fontsource-variable/outfit";
import "@fontsource-variable/inter";
import { ThemeProvider, useTheme } from "antd-style";
import defaultPaletteToken from "../../../theme/theme";
import defaultAcaciaTheme from "../../../theme/antdTheme";
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";
import "@fontsource-variable/inter/wght.css"
const ConfigProvider = ({ ...props }: ConfigProviderProps) => {

  const { colors } = usePaletteColors();
  const { borderRadius } = usePaletteConfig();


  const defaultTheme: ThemeConfig = {
    token: {
      colorPrimary: "#427e7b", // your custom default
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
      }
    }
  };

  return (
    <AntdConfigProvider theme={{ ...defaultTheme, ...props.theme }}>
      {props.children}
    </AntdConfigProvider>
  );
};

ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
