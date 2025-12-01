import { Radio as AntdRadio } from "antd";
import type { RadioButtonProps } from "antd/es/radio/radioButton";

const RadioButton = ({ ...props }: RadioButtonProps) => {
	return <AntdRadio.Button {...props} />;
};

export default RadioButton;
