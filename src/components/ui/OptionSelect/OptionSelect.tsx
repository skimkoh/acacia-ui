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
			}}
			{...props}
		>
			<Space orientation="vertical" size={0}>
				<Typography.Text disabled={props.disabled} strong>
					{props.label}
				</Typography.Text>
				<Typography.Text disabled={props.disabled} type="secondary">
					{props.description}
				</Typography.Text>
			</Space>
		</Checkbox>
	);
};

OptionSelect.Group = OptionSelectGroup;
export default OptionSelect;
