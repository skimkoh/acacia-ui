import { Skeleton as AntdSkeleton } from "antd";
import type { AvatarProps } from "antd/es/skeleton/Avatar";

const SkeletonAvatar = ({ ...props }: AvatarProps) => {
	return <AntdSkeleton.Avatar {...props} />;
};

SkeletonAvatar.displayName = "Skeleton.Avatar";

export default SkeletonAvatar;
