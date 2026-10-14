import { notification as AntdNotification } from "antd";
import type {
	GlobalConfigProps,
	NotificationInstance,
} from "antd/es/notification/interface";

type AcaciaNotificationType = NotificationInstance & {
	config: (config: GlobalConfigProps) => void;
	useNotification: typeof AntdNotification.useNotification;
};

const Notification: AcaciaNotificationType = AntdNotification;

export const notification: AcaciaNotificationType = AntdNotification;

export default Notification;
