import { Drawer as AntdDrawer, type DrawerProps } from "antd";

const Drawer = ({ ...props }: DrawerProps) => {
	return <AntdDrawer {...props} />;
};

export default Drawer;
