import { Input as AntdInput, type GetProps } from "antd";

type PasswordProps = GetProps<typeof AntdInput.Password>;

const Password = ({ ...props }: PasswordProps) => {
	return <AntdInput.Password {...props} />;
};
export default Password;
