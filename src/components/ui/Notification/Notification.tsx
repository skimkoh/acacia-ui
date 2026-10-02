import { notification as AntdNotification } from "antd";
import type {
	ArgsProps,
	GlobalConfigProps,
	NotificationInstance,
} from "antd/es/notification/interface";

export type NotificationProps = ArgsProps;

type AcaciaNotificationType = NotificationInstance & {
	config: (config: GlobalConfigProps) => void;
	useNotification: typeof AntdNotification.useNotification;
};

const Notification: AcaciaNotificationType = AntdNotification;

export const notification: AcaciaNotificationType = AntdNotification;

export default Notification;
