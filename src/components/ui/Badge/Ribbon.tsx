import { Badge as AntdBadge } from "antd";
import type { AcaciaRibbonProps } from "../interfaces";

/**
 * An extension of the Badge
 */

const Ribbon = ({ ...props }: AcaciaRibbonProps) => {
	return <AntdBadge.Ribbon {...props} />;
};

export default Ribbon;
