import { Input as AntdInput } from "antd";
import type { AcaciaInputProps } from "../interfaces";

/**
 * Styles
 */

/**
 * Components
 */
import TextArea from "./TextArea";
import Search from "./Search";
import Password from "./Password";
import { useInputStyles } from "./useInputStyles";
import OTP from "./OTP";

/**
 * @description A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 */

const Input = ({ children, ...props }: AcaciaInputProps) => {
	const inputStyles = useInputStyles().styles;
	return (
		<AntdInput className={`${inputStyles.input}`} {...props}>
			{children}
		</AntdInput>
	);
};

Input.TextArea = TextArea;
Input.Search = Search;
Input.Password = Password;
Input.OTP = OTP;

export default Input;
