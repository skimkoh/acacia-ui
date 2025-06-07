import { TimePicker as AntdTimePicker } from "antd";
import type { AcaciaTimeRangePickerProps } from "../interfaces";

const TimeRangePicker = ({ ...props }: AcaciaTimeRangePickerProps) => {
	return <AntdTimePicker.RangePicker {...props} />;
};

export default TimeRangePicker;
