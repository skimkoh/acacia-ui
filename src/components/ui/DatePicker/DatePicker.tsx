import { DatePicker as AntdDatePicker } from "antd";
import type { AcaciaDatePickerProps } from "../interfaces";
import RangePicker from "./RangePicker";

/**
 * @description To select or input a date.
 */

type DatePickerComponent = React.FC<AcaciaDatePickerProps> & {
	RangePicker: typeof RangePicker;
};

const DatePicker: DatePickerComponent = ({
	...props
}: AcaciaDatePickerProps) => {
	return <AntdDatePicker {...props} />;
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
