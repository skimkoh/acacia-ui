import { Spin as AntdSpin } from "antd";
import { type ComponentRef, forwardRef } from "react";
import type { AcaciaSpinProps } from "../interfaces";

const Spin = Object.assign(
	forwardRef<ComponentRef<typeof AntdSpin>, AcaciaSpinProps>((props, ref) => (
		<AntdSpin ref={ref} {...props} />
	)),
	{ setDefaultIndicator: AntdSpin.setDefaultIndicator },
);

export default Spin;
