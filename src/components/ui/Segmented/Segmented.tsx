import { Segmented as AntdSegmented } from "antd";
import type { AcaciaSegmentedProps } from "../interfaces";

/**
 * @description
 * Segmented is used when displaying multiple options and user can select a single option or
 * when switching the selected option, the content of the associated area changes.
 */

const Segmented = ({ ...props }: AcaciaSegmentedProps) => {
	return <AntdSegmented {...props} />;
};

export default Segmented;
