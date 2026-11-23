import chroma from "chroma-js";
import { renderBlackOrWhiteText } from "../../../utils/colors.util";
import Typography from "../Typography/Typography";
import type { AcaciaMastheadProps } from "../interfaces";

const Masthead = ({
	text,
	children,
	className,
	style,
	sticky = false,
	...props
}: AcaciaMastheadProps) => {
	const background = style?.background ?? style?.backgroundColor ?? "#ebecec";
	const backgroundColor =
		typeof background === "string" && chroma.valid(background)
			? renderBlackOrWhiteText(background)
			: "#1f1f1f";

	return (
		<div
			{...props}
			className={className}
			role="banner"
			style={{
				alignItems: "center",
				background: "#ebecec",
				display: "flex",
				padding: "2px 24px",
				position: sticky ? "sticky" : "relative",
				top: sticky ? 0 : undefined,
				zIndex: sticky ? 1000 : undefined,
				color: backgroundColor,
				...style,
			}}
		>
			<Typography.Text
				color={backgroundColor}
				style={{
					fontSize: "0.8rem",
				}}
			>
				{text ?? children}
			</Typography.Text>
		</div>
	);
};

export default Masthead;
