// utils library to handle color algorithm

import { isLight } from "@mirawision/colorize";

/**
 *
 * @param color - HEX color code or a string color (ex: black)
 * @returns return black or white color as string
 */
export const renderBlackOrWhiteText = (color: string): string => {
	// check if the background banner colors is considered light or dark colors
	const colorIsLight = isLight(color);
	if (colorIsLight) {
		return "black";
	}
	return "white";
};
