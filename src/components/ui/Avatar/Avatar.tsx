/**
 * @description A Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count
 */

import type { AcaciaAvatarProps } from "../interfaces";
import { Avatar as AntdAvatar } from "antd";

const Avatar = ({ ...props }: AcaciaAvatarProps) => {
	return <AntdAvatar {...props}>{props.children}</AntdAvatar>;
};

export default Avatar;
