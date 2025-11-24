/**
 * @description A dropdown list
 */

import { Dropdown as AntdDropdown, type DropDownProps } from "antd";
import DropdownButton from "./DropdownButton";

const Dropdown = ({ ...props }: DropDownProps) => {
	return <AntdDropdown {...props} />;
};

Dropdown.Button = DropdownButton;
export default Dropdown;
