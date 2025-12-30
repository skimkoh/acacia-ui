import { Cascader as AntdCascader, type CascaderAutoProps } from "antd";
import CascaderPanel from "./Panel";

const Cascader = ({ ...props }: CascaderAutoProps) => {
	return <AntdCascader {...props} />;
};

Cascader.Panel = CascaderPanel;
export default Cascader;
