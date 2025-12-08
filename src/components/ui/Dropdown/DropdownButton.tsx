import { Dropdown as AntdDropdown } from "antd";
import type { AcaciaDropdownButtonProps } from "../interfaces";

const DropdownButton = ({ children, ...props }: AcaciaDropdownButtonProps) => {
	return <AntdDropdown.Button {...props}>{children}</AntdDropdown.Button>;
};

export default DropdownButton;
