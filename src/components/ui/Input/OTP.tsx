import { Input as AntdInput, type GetProps } from "antd";

type OTPProps = GetProps<typeof AntdInput.OTP>;

const OTP = ({ ...props }: OTPProps) => {
	return <AntdInput.OTP {...props} />;
};

export default OTP;
