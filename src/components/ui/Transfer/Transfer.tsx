import { Transfer as AntdTransfer } from "antd";
import type { AcaciaTransferProps } from "../interfaces";

const Transfer = ({ ...props }: AcaciaTransferProps) => {
	return <AntdTransfer {...props} />;
};

export default Transfer;
