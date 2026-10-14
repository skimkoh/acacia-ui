import { TimePicker as AntdTimePicker } from "antd";
import type { AcaciaTimePickerProps } from "../interfaces";
import TimeRangePicker from "./TimeRangePicker";

const TimePicker = ({ ...props }: AcaciaTimePickerProps) => {
	return <AntdTimePicker {...props} />;
};

TimePicker.RangePicker = TimeRangePicker;
export default TimePicker;
