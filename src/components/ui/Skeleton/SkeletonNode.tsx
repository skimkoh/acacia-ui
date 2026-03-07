import { Skeleton as AntdSkeleton } from "antd";
import type { SkeletonNodeProps } from "antd/es/skeleton/Node";

const SkeletonNode = ({ ...props }: SkeletonNodeProps) => {
	return <AntdSkeleton.Node {...props} />;
};

SkeletonNode.displayName = "Skeleton.Node";
export default SkeletonNode;
