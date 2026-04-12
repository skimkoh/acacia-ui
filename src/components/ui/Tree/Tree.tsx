import { Tree as AntdTree } from "antd";
import type { AcaciaTreeProps } from "../interfaces";
import DirectoryTree from "./DirectoryTree";
import type { FC } from "react";

type AcaciaTreeComponent = FC<AcaciaTreeProps> & {
	DirectoryTree: typeof DirectoryTree;
};

const Tree: AcaciaTreeComponent = ({ ...props }: AcaciaTreeProps) => {
	return <AntdTree {...props} />;
};

Tree.DirectoryTree = DirectoryTree;
export default Tree;
