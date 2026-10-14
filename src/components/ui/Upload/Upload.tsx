/**
 * Used to select and upload files or drag and drop files.
 */

import type { AcaciaUploadProps } from "../interfaces";
import { Upload as AntdUpload } from "antd";

const Upload = ({ ...props }: AcaciaUploadProps) => {
	return <AntdUpload {...props} />;
};

export default Upload;
