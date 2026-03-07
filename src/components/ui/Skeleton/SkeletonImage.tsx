import { Skeleton as AntdSkeleton } from "antd";
import type { SkeletonImageProps } from "antd/es/skeleton/Image";

const SkeletonImage = ({ ...props }: SkeletonImageProps) => {
	return <AntdSkeleton.Image {...props} />;
};

SkeletonImage.displayName = "Skeleton.Image";
export default SkeletonImage;
