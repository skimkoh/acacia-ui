import { Tree as AntdTree } from "antd";
import type { AcaciaTreeProps } from "../interfaces";
import DirectoryTree from "./DirectoryTree";

const Tree = ({ ...props }: AcaciaTreeProps) => {
	return <AntdTree {...props} />;
};

Tree.DirectoryTree = DirectoryTree;
export default Tree;
