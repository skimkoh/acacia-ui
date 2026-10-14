/**
 * Used to select and upload files or drag and drop files.
 */

import type { AcaciaProgressProps } from "../interfaces";
import { Progress as AntdProgress } from "antd";

const Progress = ({ ...props }: AcaciaProgressProps) => {
	return <AntdProgress {...props} />;
};

export default Progress;
