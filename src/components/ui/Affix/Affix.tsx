import { type AffixRef, Affix as AntdAffix } from "antd";
import { forwardRef } from "react";
import type { AcaciaAffixProps } from "../interfaces";

const Affix = forwardRef<AffixRef, AcaciaAffixProps>(({ ...props }, ref) => {
	return <AntdAffix {...props} ref={ref} />;
});

export default Affix;
