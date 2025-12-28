/**
 * @description A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
 */

import { Pagination as AntdPagination, ConfigProvider, theme } from "antd";
import type { AcaciaPaginationProps } from "../interfaces";
import { useGetDefaultTheme } from "../ConfigProvider/defaultTheme";
import { renderBlackOrWhiteText } from "../../../utils/colors.util";
import { tint } from "@mirawision/colorize";
import { useTheme } from "antd-style";

const Pagination = ({
	selectedStyle = "solid",
	...props
}: AcaciaPaginationProps) => {
	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens
	const token = useTheme();

	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens

	return (
		<ConfigProvider
			theme={{
				token: { ...defaultTheme.token, ...globalToken.token },
				components: {
					Pagination: {
						...defaultTheme.components.Pagination,
						...(selectedStyle === "solid"
							? {
									itemActiveBg: globalToken.token.colorPrimary,
									itemActiveColor:
										token.appThemeMode === "light"
											? renderBlackOrWhiteText(globalToken.token.colorPrimary)
											: "white",
									itemActiveColorHover: tint(
										renderBlackOrWhiteText(globalToken.token.colorPrimary),
										0.3,
									),
								}
							: {}), // only override if its nested in the layout
					},
				},
			}}
		>
			<AntdPagination {...props} />
		</ConfigProvider>
	);
};
export default Pagination;
