/**
 * @description A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 */
import { Button as AntdButton } from "antd";
import type { AcaciaButtonProps } from "../interfaces";

const Button = ({ children, ...props }: AcaciaButtonProps) => {
	return <AntdButton {...props}>{children}</AntdButton>;
};
export default Button;
