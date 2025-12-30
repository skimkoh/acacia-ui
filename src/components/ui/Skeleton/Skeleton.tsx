import { Skeleton as AntdSkeleton, type SkeletonProps } from "antd";

const Skeleton = ({ ...props }: SkeletonProps) => {
	return <AntdSkeleton {...props} />;
};

export default Skeleton;
