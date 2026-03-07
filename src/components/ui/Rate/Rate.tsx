import { Rate as AntdRate, type RateProps } from "antd";

const Rate = ({ ...props }: RateProps) => {
	return <AntdRate {...props} />;
};

export default Rate;
