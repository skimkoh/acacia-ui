import { Collapse as AntdCollapse, type CollapseProps } from "antd";

const Collapse = ({ ...props }: CollapseProps) => {
	return <AntdCollapse {...props} />;
};

export default Collapse;
