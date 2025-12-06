import { Tag as AntdTag } from "antd";
import {
	AcaciaCustomColors,
	isValidCustomColor,
	type AcaciaColors,
	type AcaciaTagProps,
} from "../interfaces";

/**
 * A Tag is used for categorizing or markup.
 */

const Tag = ({ ...props }: AcaciaTagProps) => {
	// return custom colors if found the correct type
	function renderColor(color: AcaciaColors) {
		if (isValidCustomColor(color)) {
			return AcaciaCustomColors[color].background;
		}
		return color;
	}
	return <AntdTag {...props} color={renderColor(props.color)} />;
};

export default Tag;
