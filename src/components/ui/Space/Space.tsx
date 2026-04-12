import { Space as AntdSpace } from "antd";
import type { AcaciaSpaceProps } from "../interfaces";
import SpaceCompact from "./SpaceCompact";
import SpaceAddon from "./SpaceAddon";

/**
 * @description Space component set the component spacing
 */

const Space = ({ ...props }: AcaciaSpaceProps) => {
	return <AntdSpace {...props} style={{ display: "flex", ...props.styles }} />;
};

Space.Compact = SpaceCompact;
Space.Addon = SpaceAddon;
export default Space;
