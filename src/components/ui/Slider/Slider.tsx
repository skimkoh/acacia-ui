import { Slider as AntdSlider, type SliderSingleProps } from "antd";

const Slider = ({ ...props }: SliderSingleProps) => {
	return <AntdSlider {...props} />;
};

export default Slider;
