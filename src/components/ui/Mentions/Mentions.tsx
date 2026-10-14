import { Mentions as AntdMentions, type MentionsProps } from "antd";

const Mentions = ({ ...props }: MentionsProps) => {
	return <AntdMentions {...props} />;
};

export default Mentions;
