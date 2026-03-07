import { Skeleton as AntdSkeleton, type SkeletonProps } from "antd";
import SkeletonButton from "./SkeletonButton";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonInput from "./SkeletonInput";
import SkeletonNode from "./SkeletonNode";
import SkeletonImage from "./SkeletonImage";

const Skeleton = ({ ...props }: SkeletonProps) => {
	return <AntdSkeleton {...props} />;
};

Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
Skeleton.Node = SkeletonNode;
Skeleton.Image = SkeletonImage;
export default Skeleton;
