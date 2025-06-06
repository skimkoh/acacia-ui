import { Input as AntdInput } from "antd";
import type { AcaciaInputTextAreaProps } from "../interfaces";
import { useTextAreaStyles } from "./useInputStyles";

const TextArea = ({ ...props }: AcaciaInputTextAreaProps) => {
	const textareaStyles = useTextAreaStyles().styles;
	return (
		<AntdInput.TextArea className={`${textareaStyles.textarea}`} {...props} />
	);
};

export default TextArea;
