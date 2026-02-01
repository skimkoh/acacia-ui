import { useTheme } from "antd-style";
import type { AcaciaPopconfirmProps } from "../interfaces";
import { Popconfirm as AntdPopconfirm, ConfigProvider, theme } from "antd";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";

const Popconfirm = ({ ...props }: AcaciaPopconfirmProps) => {
	const token = useTheme();
	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens
	const globalToken = theme.useToken(); // get the default, antd tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				components: {
					Popconfirm: {
						colorBgElevated:
							token.overlayDarkMode.popconfirm &&
							token.overlayDarkMode.overlayColor,
					},
				},
			}}
		>
			<AntdPopconfirm
				cancelButtonProps={{
					type: "text",
					styles: {
						content: {
							color:
								token.overlayDarkMode.popconfirm &&
								useGetDefaultTheme("dark").token.colorText,
						},
					},
				}}
				{...props}
				styles={{
					container: {
						backgroundColor:
							token.overlayDarkMode.popconfirm &&
							token.overlayDarkMode.overlayColor,
						backdropFilter: token.overlayDarkMode.popconfirm && "blur(3px)",
					},

					title: {
						color:
							token.overlayDarkMode.popconfirm &&
							useGetDefaultTheme("dark").token.colorText,
					},
					content: {
						color:
							token.overlayDarkMode.popconfirm &&
							useGetDefaultTheme("dark").token.colorText,
					},
				}}
			/>
		</ConfigProvider>
	);
};

export default Popconfirm;
