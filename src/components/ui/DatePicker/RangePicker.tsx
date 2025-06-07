import { DatePicker as AntdDatePicker, type GetProps } from "antd";

type AntdDateRangePicker = GetProps<typeof AntdDatePicker.RangePicker>;

const RangePicker = ({ ...props }: AntdDateRangePicker) => {
	return <AntdDatePicker.RangePicker {...props} />;
};
export default RangePicker;
