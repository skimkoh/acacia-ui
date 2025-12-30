/**
 * @description A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
 */

import { Modal as AntdModal, theme } from "antd";
import type { AcaciaModalProps } from "../interfaces";
import { useTheme } from "antd-style";
import { getThemedTitleHeaderBackgroundPicture } from "../../../utils/theming.util";
import chroma from "chroma-js";
import Typography from "../Typography/Typography";
import Space from "../Space/Space";
import { match } from "ts-pattern";

const Modal = ({
	title,
	subtitle,
	headerBgTheme = "classic",
	iconPosition = "start",
	...props
}: AcaciaModalProps) => {
	const { useToken } = theme;

	const defaultTheme = useTheme().appTheme; // get the app theme

	// get the header background theme - check global config and scoped config
	const getHeaderBackgroundTheme = () => {
		if (headerBgTheme !== "classic") {
			return getThemedTitleHeaderBackgroundPicture(headerBgTheme);
		}
		return getThemedTitleHeaderBackgroundPicture(defaultTheme);
	};

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
		<AntdModal
			styles={{
				container: {
					padding: 0,
				},
				header: {
					background: getHeaderBgGradient(),
					padding: "15px 24px",
				},
				body: {
					padding: "0px 24px",
				},
				footer: {
					padding: "0px 24px 15px 24px",
				},
			}}
			title={
				<Space orientation="vertical" size={0}>
					<Space orientation="horizontal">
						{iconPosition === "start" && props.icon}
						{title}
						{iconPosition === "end" && props.icon}
					</Space>
					<Typography.Overline>{subtitle}</Typography.Overline>
				</Space>
			}
			{...props}
		/>
	);
};
export default Modal;
