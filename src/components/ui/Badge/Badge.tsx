/**
 * @description A Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count
 */

import type { AcaciaBadgeProps } from "../interfaces";
import { Badge as AntdBadge } from "antd";
import Ribbon from "./Ribbon";

const Badge = ({ ...props }: AcaciaBadgeProps) => {
	return <AntdBadge {...props}>{props.children}</AntdBadge>;
};

Badge.Ribbon = Ribbon;
export default Badge;
