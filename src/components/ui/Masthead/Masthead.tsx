import type {} from "react";
import { Typography } from "../../..";
import type { AcaciaMastheadProps } from "../interfaces";

const Masthead = ({
	text,
	children,
	className,
	style,
	sticky = false,
	...props
}: AcaciaMastheadProps) => {
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
				...style,
			}}
		>
			<Typography.Text
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
