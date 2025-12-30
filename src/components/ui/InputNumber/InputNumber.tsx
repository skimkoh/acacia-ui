import { InputNumber as AntdInputNumber, type InputNumberProps } from "antd";

const InputNumber = ({ ...props }: InputNumberProps) => {
	return <AntdInputNumber {...props} />;
};

export default InputNumber;
