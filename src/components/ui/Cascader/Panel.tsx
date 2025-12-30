import { Cascader as AntdCascader, type CascaderAutoProps } from "antd";

const CascaderPanel = ({ ...props }: CascaderAutoProps) => {
	return <AntdCascader.Panel {...props} />;
};

export default CascaderPanel;
