/**
 * @description Collect user's choices.
 *
 * When To Use
 * Used for selecting multiple values from several options.
 * If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.
 */

import { Checkbox as AntdCheckbox } from "antd";
import type { AcaciaCheckboxProps } from "../interfaces";
import CheckboxGroup from "./CheckboxGroup";

const Checkbox = ({ ...props }: AcaciaCheckboxProps) => {
	return <AntdCheckbox {...props} />;
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
