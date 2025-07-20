import { useTheme } from "antd-style";
import "@fontsource-variable/roboto-flex";
import Typography from "../components/ui/Typography/Typography";
import { useContext } from "react";
import { VerticalLayoutContext } from "../components/layout/VerticalLayout/VerticalLayout";

export default function DefaultLogo() {
	const context = useContext(VerticalLayoutContext);
	const token = useTheme();

	const getLogo = () => {
		if (typeof token.logo === "string") {
			return (
				<Typography.Title
					style={{
						color: context?.mainColor ?? "white",
						margin: 0,
					}}
					level={4}
				>
					{token.logo}
				</Typography.Title>
			);
		}
		return token.logo;
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
