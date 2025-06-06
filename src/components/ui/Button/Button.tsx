import { Button as AntdButton } from "antd";
import type { PaletteButtonProps } from "../interfaces";
/**
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 *
 */

const Button = ({ children, ...props }: PaletteButtonProps) => {
	return <AntdButton {...props}>{children}</AntdButton>;
};
export default Button;
