import { Col as AntdCol, type ColProps } from "antd";

const Col = ({ ...props }: ColProps) => {
	return <AntdCol {...props} />;
};

export default Col;
