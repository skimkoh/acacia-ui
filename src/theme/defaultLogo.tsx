import { useTheme } from "antd-style";
import "@fontsource-variable/roboto-flex";
import Typography from "../components/ui/Typography/Typography";
import { useContext } from "react";
import { VerticalLayoutContext } from "../components/layout/VerticalLayout/VerticalLayout";
import { renderBlackOrWhiteText } from "../utils/colors.util";
import ConfigProvider from "../components/ui/ConfigProvider/ConfigProvider";
import { theme } from "antd";
import { useGetDefaultTheme } from "../components/ui/ConfigProvider/defaultTheme";

export default function DefaultLogo() {
	const context = useContext(VerticalLayoutContext);
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const token = useTheme();
	const { useToken } = theme;
	const globalToken = useToken(); // get the default, antd tokens

	const defaultTheme = useGetDefaultTheme(token.appThemeMode); // get the default, overwritten tokens

	const getLogo = () => {
		if (typeof token.logo === "string") {
			return (
				<Typography.Title
					style={{
						margin: 0,
						color:
							context?.mainTextColor ??
							renderBlackOrWhiteText(context?.gradients[0]),
					}}
					level={4}
				>
					{token.logo}
				</Typography.Title>
			);
		}
		return (
			<div
				style={{
					color:
						context?.mainTextColor ??
						renderBlackOrWhiteText(context?.gradients[0]),
				}}
			>
				<ConfigProvider
					theme={{
						token: { ...defaultTheme.token, ...globalToken.token },
						components: {
							Typography: {
								...(isNestedInLayout
									? {
											colorText:
												context?.mainTextColor ??
												renderBlackOrWhiteText(context?.gradients[0]),
										}
									: {}), // only override if its nested in the layout
							},
						},
					}}
				>
					{token.logo}
				</ConfigProvider>
			</div>
		);
	};

	return (
		<a
			href="/"
			style={{
				cursor: "pointer",
				textDecoration: "none",
				display: "inline-flex",
				alignItems: "center",
			}}
		>
			{getLogo()}
		</a>
	);
}
