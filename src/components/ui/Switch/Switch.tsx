import { Switch as AntdSwitch } from "antd";
import type { AcaciaSwitchProps } from "../interfaces";

/**
 * @description A switch is used if you need to represent the switching between two states or on-off state.
 */

const Switch = ({ ...props }: AcaciaSwitchProps) => {
	return <AntdSwitch {...props} />;
};

export default Switch;
