import { type AnchorProps, Anchor as AntdAnchor } from "antd";

const Anchor = ({ ...props }: AnchorProps) => {
	return <AntdAnchor {...props} />;
};

export default Anchor;
