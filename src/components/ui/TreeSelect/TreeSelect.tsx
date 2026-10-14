import { TreeSelect as AntdTreeSelect } from "antd";
import type { AcaciaTreeSelectProps } from "../interfaces";

const TreeSelect = ({ ...props }: AcaciaTreeSelectProps) => {
	return <AntdTreeSelect {...props} />;
};

export default TreeSelect;
