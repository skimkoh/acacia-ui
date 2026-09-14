import { Empty as AntdEmpty } from "antd";
import type { AcaciaEmptyProps } from "../interfaces";

const Empty = ({ ...props }: AcaciaEmptyProps) => {
	return <AntdEmpty {...props} />;
};

Empty.PRESENTED_IMAGE_SIMPLE = AntdEmpty.PRESENTED_IMAGE_SIMPLE;
Empty.PRESENTED_IMAGE_DEFAULT = AntdEmpty.PRESENTED_IMAGE_DEFAULT;

export default Empty;
