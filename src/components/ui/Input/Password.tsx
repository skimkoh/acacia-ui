import { Input as AntdInput } from "antd";
import type { AcaciaInputProps } from "../interfaces";

const Password = ({ ...props }: AcaciaInputProps) => {
	return <AntdInput.Password {...props} />;
};
export default Password;
