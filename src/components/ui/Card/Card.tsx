import { useMemo } from "react";
import type { AcaciaCardProps } from "../interfaces";
import { Card as AntdCard, Typography } from "antd";
import { useCardStyles } from "./useCardStyles";
import background from "../../../assets/cardheader.png";

const Card = ({ ...props }: AcaciaCardProps) => {
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

	return (
		<AntdCard
			styles={{
				header: {
					padding: "20px",
					background: `linear-gradient(70deg, #EbF1F1CC 80%, #8EAFAC69 80%), url(${background})`,
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
