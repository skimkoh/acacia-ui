import {
	Watermark as AntdWatermark,
	type WatermarkProps,
	type WatermarkRef,
} from "antd";
import { forwardRef } from "react";

const Watermark = forwardRef<WatermarkRef, WatermarkProps>(
	({ ...props }, ref) => {
		return <AntdWatermark {...props} ref={ref} />;
	},
);

export default Watermark;
