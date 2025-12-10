import { generate } from "../utils/colors.util";
export const useAcaciaColors = () => {
	const colors = {
		primaryGreen: "#334F4E",
		mystiqueBlack: "#000",
		white: "#FFF",
		offWhite: "#F9F9F9",
		brightGreen: "#A4ED06",
		neutralGrey: "#BBBDBE",
		lesserInk: "#3D4040",
		border: {
			button: "#B3B3B3",
			cell: "#CCC",
			page: "#B3B3B3",
		},
		link: {
			hover: "#E5FAF6",
		},
		success: {
			primary: "#268C79",
			fill: "#E5FAF6",
			stroke: "#ADD8D0",
			emphasis: "#00B996",
		},
		warning: {
			primary: "#E46015",
			fill: "#FFF1E9",
			stroke: "#E9BA9F",
			emphasis: "#FF6D1B",
		},
		error: {
			primary: "#DB3056",
			fill: "#FFF0F3",
			stroke: "#FFBBCA",
			emphasis: "#FF5C81",
		},
		info: {
			primary: "#2C62D5",
			fill: "#EBF3FF",
			stroke: "#AFC9FF",
			emphasis: "#296EFF",
		},
	};

	return { colors, generate };
};
