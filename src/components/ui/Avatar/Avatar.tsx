/**
 * @description A Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count
 */

import type { AcaciaAvatarProps } from "../interfaces";
import { Avatar as AntdAvatar } from "antd";
import Typography from "../Typography/Typography";
import Space from "../Space/Space";

const Avatar = ({ ...props }: AcaciaAvatarProps) => {
	return (
		<Space size={0}>
			<div
				style={{
					...(props.userId && { background: "#ebe8e8", borderRadius: 20 }),
				}}
			>
				<AntdAvatar
					style={{ marginRight: props.userId && -3, ...props.style }}
					{...props}
				>
					{props.children}
				</AntdAvatar>

				{props.userId && (
					<Typography.Text strong style={{ paddingInline: 8 }}>
						{props.userId.toUpperCase()}
					</Typography.Text>
				)}
			</div>
		</Space>
	);
};

export default Avatar;
