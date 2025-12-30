import { type AlertProps, Alert as AntdAlert } from "antd";

const Alert = ({ ...props }: AlertProps) => {
	return <AntdAlert {...props} />;
};

export default Alert;
