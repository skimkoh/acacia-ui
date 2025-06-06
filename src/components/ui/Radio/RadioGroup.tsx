import type { RadioGroupProps } from "antd";
import { Radio as AntdRadio } from "antd";

const RadioGroup = ({ ...props }: RadioGroupProps) => {
	return <AntdRadio.Group {...props} />;
};

export default RadioGroup;
