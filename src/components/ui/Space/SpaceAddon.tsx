import { Space as AntdSpace } from "antd";

const SpaceAddon = ({ ...props }: { children: React.ReactNode }) => {
	return <AntdSpace.Addon>{props.children}</AntdSpace.Addon>;
};
SpaceAddon.displayName = "Space.Addon";

export default SpaceAddon;
