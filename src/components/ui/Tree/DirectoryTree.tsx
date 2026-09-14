import { Tree as AntdTree } from "antd";
import type { AcaciaDirectoryTreeProps } from "../interfaces";

const DirectoryTree = ({ ...props }: AcaciaDirectoryTreeProps) => {
	return <AntdTree.DirectoryTree {...props} />;
};

export default DirectoryTree;
