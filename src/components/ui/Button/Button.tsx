import { Button as AntdButton, ButtonProps, Flex, Typography } from "antd";
import { PaletteButtonProps } from "../interfaces";

/**
 * Tokens
 */
import { usePaletteColors } from "../../../hooks/usePaletteColors";
import { usePaletteConfig } from "../../../hooks/usePaletteConfig";
import { usePaletteToken } from "../../../tokens/usePaletteToken";
import ConfigProvider from "../ConfigProvider/ConfigProvider";
import { ThemeProvider, useTheme } from "antd-style";

/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 *
 */

const Button = ({ children, ...props }: PaletteButtonProps) => {
  // const { token: paletteToken } = usePaletteToken();
  const { colors } = usePaletteColors();
  const token = useTheme();

  const { borderRadius } = usePaletteConfig();

  return (
    <AntdButton {...props}>{children}</AntdButton>
  );
};
export default Button;
