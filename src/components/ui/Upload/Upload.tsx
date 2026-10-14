/**
 * Used to select and upload files or drag and drop files.
 */

import { Upload as AntdUpload } from "antd";
import type { AcaciaUploadProps } from "../interfaces";

const Upload = Object.assign(
	({ ...props }: AcaciaUploadProps) => <AntdUpload {...props} />,
	{
		Dragger: AntdUpload.Dragger,
		LIST_IGNORE: AntdUpload.LIST_IGNORE,
	},
);

export default Upload;
