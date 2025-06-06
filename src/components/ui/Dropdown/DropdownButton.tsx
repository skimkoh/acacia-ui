import { Dropdown as AntdDropdown, type GetProps } from "antd";

type DropdownButtonProps = GetProps<typeof AntdDropdown.Button>;

const DropdownButton = ({ children, ...props }: DropdownButtonProps) => {
	return <AntdDropdown.Button {...props}>{children}</AntdDropdown.Button>;
};

export default DropdownButton;
