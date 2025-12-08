/**
 * @description A dropdown list
 */

import { Dropdown as AntdDropdown } from "antd";
import DropdownButton from "./DropdownButton";
import type { AcaciaDropdownProps } from "../interfaces";

const Dropdown = ({ ...props }: AcaciaDropdownProps) => {
	return <AntdDropdown {...props} />;
};

Dropdown.Button = DropdownButton;
export default Dropdown;
