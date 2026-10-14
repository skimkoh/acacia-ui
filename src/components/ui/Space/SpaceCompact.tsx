import { Space as AntdSpace } from "antd";
import type { SpaceCompactProps } from "antd/es/space/Compact";

const SpaceCompact = ({ ...props }: SpaceCompactProps) => {
	return <AntdSpace.Compact {...props} />;
};

SpaceCompact.displayName = "Space.Compact";

export default SpaceCompact;
