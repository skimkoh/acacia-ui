import { theme } from "antd";
import type { AcaciaToken } from "./interfaces";

const { useToken } = theme;

export const useAcaciaToken = () => {
	const { token: antdToken } = useToken();
	const token = antdToken as AcaciaToken;

	return { token };
};
