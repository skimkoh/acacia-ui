import {
	Slider as AntdSlider,
	ConfigProvider,
	theme,
	type SliderSingleProps,
} from "antd";
import type { SliderRangeProps } from "antd/es/slider";
import { useTheme } from "antd-style";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
import chroma from "chroma-js";
const Slider = ({ ...props }: SliderSingleProps | SliderRangeProps) => {
	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens
	const token = useTheme();
	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: {
					...defaultTheme.token,
					...globalToken.token,
				},
				components: {
					Slider: {
						trackBgDisabled: chroma(useToken().token.colorPrimary) // use the primary color and make it lighter for the disabled state
							.tint(0.7)
							.hex(),
					},
				},
			}}
		>
			<AntdSlider {...props} />
		</ConfigProvider>
	);
};

export default Slider;
