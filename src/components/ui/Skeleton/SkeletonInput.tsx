import { Skeleton as AntdSkeleton } from "antd";
import type { SkeletonInputProps } from "antd/es/skeleton/Input";

const SkeletonInput = ({ ...props }: SkeletonInputProps) => {
	return <AntdSkeleton.Input {...props} />;
};

SkeletonInput.displayName = "Skeleton.Input";
export default SkeletonInput;
