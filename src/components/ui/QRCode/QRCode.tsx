import { QRCode as AntdQRCode, type QRCodeProps, type QRCodeRef } from "antd";
import { forwardRef } from "react";

const QRCode = forwardRef<QRCodeRef, QRCodeProps>(({ ...props }, ref) => {
	return <AntdQRCode {...props} ref={ref} />;
});

export default QRCode;
