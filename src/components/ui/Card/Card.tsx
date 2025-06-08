import { useMemo } from "react";
import type { AcaciaCardProps } from "../interfaces";
import { Card as AntdCard, Typography } from "antd";
import { useCardStyles } from "./useCardStyles";
import HexagonBackground from "../../../assets/cardheader.png";
import StripedBackground from "../../../assets/cardheader2.png";
import MysticalBackground from "../../../assets/cardheader3.png";
import { match } from "ts-pattern";

const Card = ({
	headerBackgroundTheme = "hexagon",
	...props
}: AcaciaCardProps) => {
	const cardStyles = useCardStyles().styles;

	const titleStyles = useMemo(() => {
		const styles: {
			marginBlock: number;
			fontSize?: string | number;
		} = {
			marginBlock: 0,
		};

		if (props.size === "small") {
			styles.fontSize = 18;
		}

		return styles;
	}, [props.size]);

	const subtitleStyles = useMemo(() => {
		const styles: {
			color: string;
			fontWeight: number;
			fontSize?: string | number;
		} = {
			color: "#FF0000",
			fontWeight: 500,
		};

		if (props.size === "small") {
			styles.fontSize = 13;
		}

		return styles;
	}, [props.size]);

	const getThemedBackground = () => {
		return match(headerBackgroundTheme)
			.with("hexagon", () => HexagonBackground)
			.with("striped", () => StripedBackground)
			.with("mystical", () => MysticalBackground)
			.exhaustive();
	};

	return (
		<AntdCard
			styles={{
				header: {
					padding: "20px",
					background: `linear-gradient(70deg, #EbF1F1CC 80%, #8EAFAC69 80%), url(${getThemedBackground()})`,
				},
				title: {
					whiteSpace: "normal",
				},
			}}
			className={`${cardStyles.card}`}
			{...props}
			title={
				props.title && (
					<>
						<Typography.Title level={4} style={titleStyles}>
							{props.title}
						</Typography.Title>
						{props.subtitle && (
							<Typography.Text style={subtitleStyles}>
								{props.subtitle}
							</Typography.Text>
						)}
					</>
				)
			}
		/>
	);
};

export default Card;
