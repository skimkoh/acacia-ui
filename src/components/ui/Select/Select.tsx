import { Select as AntdSelect } from "antd";
import type { AcaciaSelectProps } from "../interfaces";

/**
 * @description Select component to select value from options.
 */

const Select = ({ ...props }: AcaciaSelectProps) => {
	return <AntdSelect {...props} />;
};
export default Select;
