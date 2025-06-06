import { theme } from "antd";
import type { PaletteToken } from "./interfaces";

const { useToken } = theme;

export const usePaletteToken = () => {
	const { token: antdToken } = useToken();
	const token = antdToken as PaletteToken;

	return { token };
};
