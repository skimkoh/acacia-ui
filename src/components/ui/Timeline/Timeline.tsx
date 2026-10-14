/**
 * Vertical display timeline.
 */

import type { AcaciaTimelineProps } from "../interfaces";
import { Timeline as AntdTimeline } from "antd";

const Timeline = ({ ...props }: AcaciaTimelineProps) => {
	return <AntdTimeline {...props} />;
};

export default Timeline;
