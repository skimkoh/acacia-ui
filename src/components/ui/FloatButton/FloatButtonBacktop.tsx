import { FloatButton as AntdFloatButton, type BackTopProps } from "antd";

const FloatButtonBacktop = ({ ...props }: BackTopProps) => {
	return <AntdFloatButton.BackTop {...props} />;
};

export default FloatButtonBacktop;
