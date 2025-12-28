import Space from "../Space/Space";
import type React from "react";
import { usePanelStyles } from "./usePanelStyles";
import { useContext, useMemo, type CSSProperties } from "react";
import { VerticalLayoutContext } from "../../layout/VerticalLayout/VerticalLayout";
import {
	blendMultipleColors,
	isValidHEXColor,
	shade,
} from "@mirawision/colorize";
import { editOpacity } from "../../../utils/colors.util";

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
}: Readonly<PanelProps>) {
	const context = useContext(VerticalLayoutContext); // context to check if its nested - its possible that the user can use the header without the VerticalLayout
	const isNestedInLayout = Boolean(context); // check if nested or not to handle colors

	const selectedItemColor = useMemo(() => {
		if (isNestedInLayout) {
			const blended = blendMultipleColors(
				context.gradients.map((item) => {
					return {
						color: item,
						weight: 1,
					};
				}),
			);
			const color = shade(blended, 0.5);

			return {
				menuColor: context?.accentColor,
				menuBgColor: isValidHEXColor(color)
					? editOpacity("hex", color)
					: editOpacity("rgba", color),
			};
		}
		return {
			menuColor: null,
			menuBgColor: null,
		};
	}, [context?.accentColor, isNestedInLayout]);

	const { styles, cx } = usePanelStyles({
		color: selectedItemColor.menuBgColor,
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
