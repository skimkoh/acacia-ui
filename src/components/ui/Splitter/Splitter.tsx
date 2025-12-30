import { Splitter as AntdSplitter, type SplitterProps } from "antd";

const Splitter = ({ ...props }: SplitterProps) => {
	return <AntdSplitter {...props} />;
};

export default Splitter;
