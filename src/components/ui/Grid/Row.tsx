import { Row as AntdRow, type RowProps } from "antd";

const Row = ({ ...props }: RowProps) => {
	return <AntdRow {...props} />;
};

export default Row;
