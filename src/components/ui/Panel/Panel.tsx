import Space from "../Space/Space";
import type React from "react";
import { usePanelStyles } from "./usePanelStyles";
import type { CSSProperties } from "react";

interface PanelProps {
	children: React.ReactNode;
	position?: "left" | "right" | "none";
	footer?: React.ReactNode;
	classNames?: {
		outerContainerClassName?: string;
		panelBaseClassName?: string;
		panelBodyClassName?: string;
		panelFooterClassName?: string;
	};
	styles?: {
		outerContainerStyles?: CSSProperties;
		panelBaseStyles?: CSSProperties;
		panelBodyStyles?: CSSProperties;
		panelFooterStyles?: CSSProperties;
	};
}

export default function Panel({
	position = "left",
	...props
}: Readonly<PanelProps>) {
	const { styles, cx } = usePanelStyles();

	return (
		<div
			className={cx(
				position !== "none" && styles.outerPanel,
				position === "left" && styles.outerPanelLeft,
				position === "right" && styles.outerPanelRight,
				props?.classNames?.outerContainerClassName,
			)}
			style={{ ...props?.styles?.outerContainerStyles }}
		>
			<div
				className={cx(styles.panelBase, props?.classNames?.panelBaseClassName)}
				style={{ ...props?.styles?.panelBaseStyles }}
			>
				<div
					className={cx(
						styles.panelBody,
						props?.classNames?.panelBodyClassName,
					)}
					style={{ ...props?.styles?.panelBodyStyles }}
				>
					<Space orientation="vertical">{props.children}</Space>
				</div>
				{props.footer && (
					<div
						className={cx(
							styles.panelFooter,
							props?.classNames?.panelFooterClassName,
						)}
						style={{ ...props?.styles?.panelFooterStyles }}
					>
						{props.footer}
					</div>
				)}
			</div>
		</div>
	);
}
