import { Popover as AntdPopover, type PopoverProps } from "antd";

const Popover = ({ ...props }: PopoverProps) => {
	return <AntdPopover {...props} />;
};

export default Popover;
