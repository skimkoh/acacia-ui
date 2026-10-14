import { Space as AntdSpace } from "antd";
import type { ComponentProps } from "react";

type AcaciaSpaceAddonProps = ComponentProps<typeof AntdSpace.Addon>;

const SpaceAddon = (props: AcaciaSpaceAddonProps) => {
	return <AntdSpace.Addon {...props} />;
};
SpaceAddon.displayName = "Space.Addon";

export default SpaceAddon;
