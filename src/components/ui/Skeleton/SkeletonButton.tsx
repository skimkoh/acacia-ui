import { Skeleton as AntdSkeleton } from "antd";
import type { SkeletonButtonProps } from "antd/es/skeleton/Button";

const SkeletonButton = ({ ...props }: SkeletonButtonProps) => {
	return <AntdSkeleton.Button {...props} />;
};

SkeletonButton.displayName = "Skeleton.Button";

export default SkeletonButton;
