import { message as AntdMessage } from "antd";
import type {
	ArgsProps,
	ConfigOptions,
	MessageInstance,
} from "antd/es/message/interface";

export type MessageProps = ArgsProps;

type AcaciaMessageType = MessageInstance & {
	config: (config: ConfigOptions) => void;
	useMessage: typeof AntdMessage.useMessage;
};

const Message: AcaciaMessageType = AntdMessage;

export const message: AcaciaMessageType = AntdMessage;

export default Message;
