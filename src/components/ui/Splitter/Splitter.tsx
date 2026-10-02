import { Splitter as AntdSplitter } from "antd";
import type { AcaciaSplitterProps } from "../interfaces";

const Splitter = Object.assign(
	({ ...props }: AcaciaSplitterProps) => <AntdSplitter {...props} />,
	{
		Panel: AntdSplitter.Panel,
	},
);

export default Splitter;
