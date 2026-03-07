import { isValidElement } from "react";
import VerticalHeader from "./VerticalLayout/VerticalPageHeader";
import VerticalContent from "./VerticalLayout/VerticalContent";
import type { AcaciaThemes } from "../ui/interfaces";
import chroma from "chroma-js";
export const isVerticalHeader = (child: React.ReactNode) =>
	isValidElement(child) && child.type === VerticalHeader;

export const isVerticalContent = (child: React.ReactNode) =>
	isValidElement(child) && child.type === VerticalContent;

// gradients for the default themes - classic, mystical
export const getThemeGradients: Record<AcaciaThemes, string[]> = {
	classic: ["#1d4042", "#37717c", "#418384"],
	mystical: ["#bb8c97", "#9287a9", "#262144"],
	submarine: ["#1d4042", "#37717c", "#418384"],
};

// get the accent color for the layout based on the background color - if background is light, darken the accent, if background is dark, lighten the accent
export const getAccentColor = (hex: string, strength = 0.8) => {
	const color = chroma(hex);
	const luminance = color.luminance();

	const [l, c, h] = color.oklch();

	const ceiling = 0.85;
	const floor = 0.35;

	let newL: number;

	if (luminance > 0.5) {
		// light background → darker accent
		newL = l - (l - floor) * strength;
	} else {
		// dark background → lighter accent
		newL = l + (ceiling - l) * strength;
	}

	return chroma.oklch(newL, c, h).hex();
};
