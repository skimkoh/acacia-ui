/**
 * @description A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 */
import { Button as AntdButton } from "antd";
import type { AcaciaButtonProps } from "../interfaces";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, AcaciaButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<AntdButton ref={ref} {...props}>
				{children}
			</AntdButton>
		);
	},
);

export default Button;
