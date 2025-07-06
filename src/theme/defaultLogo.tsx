import { Typography } from "antd";
import { useTheme } from "antd-style";
import "@fontsource-variable/roboto-flex";

export default function DefaultLogo() {
	const token = useTheme();

	const getLogo = () => {
		if (typeof token.logo === "string") {
			return (
				<Typography.Title
					style={{
						color: "white",
						margin: 0,
						fontFamily: "RobotoFlexVariable",
					}}
					level={3}
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
