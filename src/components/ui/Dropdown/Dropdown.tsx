/**
 * @description A dropdown list
 */

import { type DropDownProps, Dropdown as AntdDropdown } from "antd";
import DropdownButton from "./DropdownButton";

const Dropdown = ({ ...props }: DropDownProps) => {
	return <AntdDropdown {...props} />;
};

Dropdown.Button = DropdownButton;
export default Dropdown;
