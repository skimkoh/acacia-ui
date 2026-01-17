import type { AcaciaOptionSelectGroupProps } from "../interfaces";
import Row from "../Grid/Row";
import { type CheckboxOptionType, Col, Space } from "antd";
import OptionSelect from "./OptionSelect";
import { match } from "ts-pattern";
import Checkbox from "../Checkbox/Checkbox";

function isCheckboxOptionArray(
	options: unknown,
): options is CheckboxOptionType<any>[] {
	return (
		Array.isArray(options) &&
		options.length > 0 &&
		typeof options[0] === "object" &&
		"value" in options[0]
	);
}

const OptionSelectGroup = ({
	children,
	orientation = "horizontal",
	span = 6,
	options,
	...props
}: React.PropsWithChildren<AcaciaOptionSelectGroupProps>) => {
	const renderOptions = () => {
		return match(orientation)
			.with("horizontal", () => {
				return (
					<Row gutter={[12, 12]}>
						{isCheckboxOptionArray(options) &&
							options.map((option) => {
								return (
									<Col key={option.value} span={span}>
										<OptionSelect
											value={option.value}
											style={{ width: "100%" }}
											label={option.label}
											description={option.description}
											labelIcon={option.labelIcon}
										/>
									</Col>
								);
							})}
					</Row>
				);
			})
			.with("vertical", () => {
				return (
					<Space style={{ width: "100%" }} orientation="vertical">
						{isCheckboxOptionArray(options) &&
							options.map((option) => {
								return (
									<Row key={option.value}>
										<Col
											key={option.value}
											span={typeof span === "number" && span}
											flex={typeof span === "string" && span}
										>
											<OptionSelect
												value={option.value}
												style={{ width: "100%" }}
												label={option.label}
												description={option.description}
												labelIcon={option.labelIcon}
											/>
										</Col>
										<Col
											key={option.value}
											span={typeof span === "number" && 24 - span}
											flex={typeof span === "string" && "auto"}
										/>
									</Row>
								);
							})}
					</Space>
				);
			})
			.exhaustive();
	};
	return (
		<Checkbox.Group style={{ width: "100%" }}>{renderOptions()}</Checkbox.Group>
	);
};

export default OptionSelectGroup;
