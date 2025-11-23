import { Space as AntdSpace } from "antd";
import type { AcaciaSpaceProps } from "../interfaces";

/**
 * @description Space component set the component spacing
 */

const Space = ({ ...props }: AcaciaSpaceProps) => {
	return <AntdSpace {...props} />;
};
export default Space;
