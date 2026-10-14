import { Drawer as AntdDrawer } from "antd";
import type { AcaciaDrawerProps } from "../interfaces";

const Drawer = ({ ...props }: AcaciaDrawerProps) => {
	return <AntdDrawer {...props} />;
};

export default Drawer;
