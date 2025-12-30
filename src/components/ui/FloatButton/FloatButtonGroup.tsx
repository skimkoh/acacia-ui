import {
	FloatButton as AntdFloatButton,
	type FloatButtonGroupProps,
} from "antd";

const FloatButtonGroup = ({ ...props }: FloatButtonGroupProps) => {
	return <AntdFloatButton.Group {...props} />;
};

export default FloatButtonGroup;
