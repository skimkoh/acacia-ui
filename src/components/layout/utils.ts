import { isValidElement } from "react";
import VerticalHeader from "./VerticalLayout/VerticalHeader";
import VerticalContent from "./VerticalLayout/VerticalContent";
import type { AcaciaThemes } from "../ui/interfaces";

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
