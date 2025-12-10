import { theme } from "antd";

const { useToken } = theme;

export const useAcaciaToken = () => {
	const { token: antdToken } = useToken();
	const token = antdToken;

	return { token };
};
