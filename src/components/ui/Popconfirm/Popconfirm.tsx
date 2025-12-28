import { useTheme } from "antd-style";
import type { AcaciaPopconfirmProps } from "../interfaces";
import { Popconfirm as AntdPopconfirm, ConfigProvider } from "antd";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";

const Popconfirm = ({ ...props }: AcaciaPopconfirmProps) => {
	const token = useTheme();

	return (
		<ConfigProvider>
			<AntdPopconfirm
				cancelButtonProps={{
					type: "text",
					styles: {
						content: {
							color:
								token.darkPopover && useGetDefaultTheme("dark").token.colorText,
						},
					},
				}}
				{...props}
				styles={{
					container: {
						backgroundColor: token.darkPopover && "#161616c4",
						backdropFilter: token.darkPopover && "blur(3px)",
					},
					arrow: {
						backgroundColor: token.darkPopover && "#161616c4",
						backdropFilter: token.darkPopover && "blur(3px)",
					},
					title: {
						color:
							token.darkPopover && useGetDefaultTheme("dark").token.colorText,
					},
					content: {
						color:
							token.darkPopover && useGetDefaultTheme("dark").token.colorText,
					},
				}}
			/>
		</ConfigProvider>
	);
};

export default Popconfirm;
