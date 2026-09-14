/**
 * A container that displays data in calendar form.
 */

import type { AcaciaCalendarProps } from "../interfaces";
import { Calendar as AntdCalendar } from "antd";

const Calendar = ({ ...props }: AcaciaCalendarProps) => {
	return <AntdCalendar {...props} />;
};

export default Calendar;
