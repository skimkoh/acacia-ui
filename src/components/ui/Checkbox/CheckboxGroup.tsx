/**
 * @description Collect user's choices.
 * We can use Checkbox and Grid in Checkbox.Group, to implement complex layout.
 */

import { Checkbox as AntdCheckbox } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";

const CheckboxGroup = ({ ...props }: CheckboxGroupProps) => {
	return <AntdCheckbox.Group {...props} />;
};

export default CheckboxGroup;
