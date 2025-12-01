import { Radio as AntdRadio, type RadioProps } from "antd";
import RadioGroup from "./RadioGroup";
import RadioButton from "./Button";

/**
 * @description A radio is used to select a single state from multiple options.
 */

const Radio = ({ ...props }: RadioProps) => {
	return <AntdRadio {...props} />;
};

Radio.Group = RadioGroup;
Radio.Button = RadioButton;
export default Radio;
