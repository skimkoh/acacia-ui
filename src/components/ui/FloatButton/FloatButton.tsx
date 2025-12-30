import { FloatButton as AntdFloatButton, type FloatButtonProps } from "antd";
import FloatButtonGroup from "./FloatButtonGroup";
import FloatButtonBacktop from "./FloatButtonBacktop";

const FloatButton = ({ ...props }: FloatButtonProps) => {
	return <AntdFloatButton {...props} />;
};

FloatButton.Group = FloatButtonGroup;
FloatButton.Backtop = FloatButtonBacktop;
export default FloatButton;
