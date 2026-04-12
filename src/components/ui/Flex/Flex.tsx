import { Flex as AntdFlex } from "antd";
import type { AcaciaFlexProps } from "../interfaces";

const Flex = ({ ...props }: AcaciaFlexProps) => {
	return <AntdFlex {...props} />;
};

export default Flex;
