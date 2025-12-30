import { Divider as AntdDivider, type DividerProps } from "antd";

const Divider = ({ ...props }: DividerProps) => {
	return <AntdDivider {...props} />;
};

export default Divider;
