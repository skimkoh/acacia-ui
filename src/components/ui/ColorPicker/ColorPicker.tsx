import { ColorPicker as AntdColorPicker } from "antd";
import type { AcaciaColorPickerProps } from "../interfaces";

const ColorPicker = ({ ...props }: AcaciaColorPickerProps) => {
	return <AntdColorPicker {...props} />;
};

export default ColorPicker;
