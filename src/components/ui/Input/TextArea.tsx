import { Input as AntdInput, type GetProps } from "antd";
import { useTextAreaStyles } from "./useInputStyles";

type TextAreaProps = GetProps<typeof AntdInput.TextArea>;

const TextArea = ({ ...props }: TextAreaProps) => {
	const textareaStyles = useTextAreaStyles().styles;
	return (
		<AntdInput.TextArea className={`${textareaStyles.textarea}`} {...props} />
	);
};

export default TextArea;
