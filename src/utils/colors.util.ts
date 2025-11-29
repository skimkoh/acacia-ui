import { generate as antdGenerate, grey } from "@ant-design/colors";
import { isLight } from "@mirawision/colorize";

export const generate = (color?: string, darken?: boolean) => {
	const colors = color
		? antdGenerate(color, {
				theme: darken ? "dark" : "default",
			})
		: [];

	const neutral = antdGenerate(grey[0], {
		theme: darken ? "dark" : "default",
	});

	return { colors, neutral };
};

/**
 *@description - used to handle color algorithm to return black / white depending on the color given
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
