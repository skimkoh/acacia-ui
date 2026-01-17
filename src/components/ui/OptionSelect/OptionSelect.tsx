import type { AcaciaOptionSelectProps } from "../interfaces";
import Checkbox from "../Checkbox/Checkbox";
import { useOptionSelectStyles } from "./useOptionSelectStyles";
import { theme } from "antd";
import { cx } from "antd-style";
import OptionSelectGroup from "./OptionSelectGroup";
import Typography from "../Typography/Typography";
import Space from "../Space/Space";

const OptionSelect = ({
	mode = "single",
	label,
	description,
	descriptionRows = 2,
	...props
}: Readonly<AcaciaOptionSelectProps>) => {
	const { useToken } = theme;
	const { styles } = useOptionSelectStyles({
		colorPrimary: useToken().token.colorPrimary,
		disabledColor: useToken().token.colorTextDisabled,
	});

	return (
		<Checkbox
			classNames={{
				root: cx(styles.rootBase, styles.checkedOption),
				icon: styles.iconBase,
				label: styles.labelBase,
			}}
			{...props}
		>
			{/* Container ensures flex works and width is measurable */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					minWidth: 0,
					gap: 4,
				}}
			>
				{label && (
					<Space orientation="horizontal">
						{props.labelIcon}
						<Typography.Text disabled={props.disabled} strong>
							{label}
						</Typography.Text>
					</Space>
				)}

				{description && (
					<Typography.Paragraph
						type="secondary"
						disabled={props.disabled}
						ellipsis={{ rows: descriptionRows }}
					>
						{description}
					</Typography.Paragraph>
				)}
			</div>
		</Checkbox>
	);
};

OptionSelect.Group = OptionSelectGroup;

export default OptionSelect;
