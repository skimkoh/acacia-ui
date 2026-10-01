import { useMemo } from "react";
import type { AcaciaCardProps } from "../interfaces";
import { Card as AntdCard, theme, Typography } from "antd";
import { useCardStyles } from "./useCardStyles";
import { match } from "ts-pattern";
import { useTheme } from "antd-style";
import chroma from "chroma-js";
import { getThemedTitleHeaderBackgroundPicture } from "../../../utils/theming.util";
const Card = ({ headerBgTheme = "classic", ...props }: AcaciaCardProps) => {
	const cardStyles = useCardStyles().styles;
	const token = useTheme();
	const { useToken } = theme;
	const defaultAppTheme = token.appTheme; // get the app theme

	// get the header background theme - check global config and scoped config
	const getHeaderBackgroundTheme = () => {
		if (headerBgTheme !== "classic") {
			return getThemedTitleHeaderBackgroundPicture(headerBgTheme);
		}
		return getThemedTitleHeaderBackgroundPicture(defaultAppTheme);
	};
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
			color: token.colorTextTertiary,
			fontWeight: 500,
		};

		if (props.size === "small") {
			styles.fontSize = 13;
		}

		return styles;
	}, [props.size]);

	const getLinearGradient = (firstColor: string, secondColor: string) => {
		return `linear-gradient(70deg, ${firstColor}CC 80%, ${secondColor}69 80%), url(${getHeaderBackgroundTheme()})`;
	};

	// account for dark mode
	const getHeaderBgGradient = () => {
		const darkerColor = chroma
			.scale([useToken().token.colorPrimary, "black"])(0.2)
			.hex();
		return match(useTheme().appThemeMode)
			.with("light", () => {
				const lighterColor = chroma
					.scale([useToken().token.colorPrimary, "white"])(0.7)
					.hex();

				return getLinearGradient(lighterColor, darkerColor);
			})
			.with("dark", () => {
				const darkestColor = chroma
					.scale([useToken().token.colorPrimary, "black"])(0.7)
					.hex();

				return getLinearGradient(darkerColor, darkestColor);
			})
			.exhaustive();
	};

	return (
		<AntdCard
			styles={{
				header: {
					padding: "20px",
					background: getHeaderBgGradient(),
					// background: `linear-gradient(70deg, ${lightShadeColor}CC 80%, ${levelOneColors[4]}69 80%), url(${props.headerBackgroundPicture ?? getThemedBackground()})`,
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
