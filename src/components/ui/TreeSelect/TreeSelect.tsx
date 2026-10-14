import { TreeSelect as AntdTreeSelect } from "antd";
import type { AcaciaTreeSelectProps } from "../interfaces";

const TreeSelect = Object.assign(
	({ ...props }: AcaciaTreeSelectProps) => <AntdTreeSelect {...props} />,
	{
		SHOW_ALL: AntdTreeSelect.SHOW_ALL,
		SHOW_PARENT: AntdTreeSelect.SHOW_PARENT,
		SHOW_CHILD: AntdTreeSelect.SHOW_CHILD,
	}, // expose the APIs
);

export default TreeSelect;
