import Space from "../Space/Space";
import { usePanelStyles } from "./usePanelStyles";
import { useContext, type CSSProperties } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import chroma from "chroma-js";
import type { AcaciaPanelProps } from "../interfaces";
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
	panelTitle?: string;
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
}: Readonly<AcaciaPanelProps>) {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context);

	const getPanelColor = () => {
		if (isNestedInLayout && context) {
			return chroma(context.accentColor).alpha(0.6).hex();
		}
		return "rgba(0, 0, 0, 0.1)"; // default panel color when not nested in layout
	};

	const { styles, cx } = usePanelStyles({
		color: getPanelColor(),
	});

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
