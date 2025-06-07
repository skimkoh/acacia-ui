import { DatePicker as AntdDatePicker } from "antd";
import type { AcaciaTimePickerProps } from "../interfaces";
import TimeRangePicker from "./TimeRangePicker";

const TimePicker = ({ ...props }: AcaciaTimePickerProps) => {
	return <AntdDatePicker {...props} />;
};

TimePicker.RangePicker = TimeRangePicker;
export default TimePicker;
