import { Table as AntdTable, type TableProps } from "antd";

const Table = ({ ...props }: TableProps) => {
	return <AntdTable {...props} />;
};

export default Table;
