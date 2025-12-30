import { Tooltip as AntdTooltip, type TooltipProps } from "antd";

const Tooltip = ({ ...props }: TooltipProps) => {
	return <AntdTooltip {...props} />;
};

export default Tooltip;
