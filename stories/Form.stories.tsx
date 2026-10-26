import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Button from "../src/components/ui/Button/Button";
import Checkbox from "../src/components/ui/Checkbox/Checkbox";
import DatePicker from "../src/components/ui/DatePicker/DatePicker";
import Form from "../src/components/ui/Form/Form";
import Input from "../src/components/ui/Input/Input";
import InputNumber from "../src/components/ui/InputNumber/InputNumber";
import Radio from "../src/components/ui/Radio/Radio";
import Select from "../src/components/ui/Select/Select";
import Switch from "../src/components/ui/Switch/Switch";

const meta = {
	component: Form,
	parameters: {
		docs: {
			description: {
				component:
					"This Form wraps [Ant Design Form](https://ant.design/components/form/) and supports the same form and validation APIs.",
			},
		},
	},
	title: "Components/Form",
	tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
	render: () => {
		const [submittedValues, setSubmittedValues] = useState<string>();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form
					layout="vertical"
					onFinish={(values) =>
						setSubmittedValues(JSON.stringify(values, null, 2))
					}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please enter a username." }]}
					>
						<Input placeholder="Enter a username" />
					</Form.Item>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{ required: true, message: "Please enter your email." },
							{ type: "email", message: "Enter a valid email address." },
						]}
					>
						<Input placeholder="name@example.com" />
					</Form.Item>
					<Form.Item
						name="agreement"
						valuePropName="checked"
						rules={[
							{
								validator: (_, checked) =>
									checked
										? Promise.resolve()
										: Promise.reject(new Error("Please accept the terms.")),
							},
						]}
					>
						<Checkbox>I agree to the terms and conditions</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
				{submittedValues && <pre aria-live="polite">{submittedValues}</pre>}
			</div>
		);
	},
};

BasicUsage.parameters = {
	docs: {
		description: {
			story:
				"A vertical form with required fields, email validation, a checkbox, and a submit result.",
		},
	},
};

export const Layouts: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 32, maxWidth: 560 }}>
			<section>
				<h3>Vertical</h3>
				<Form layout="vertical">
					<Form.Item label="Name" name="verticalName">
						<Input placeholder="Name" />
					</Form.Item>
					<Form.Item>
						<Button type="primary">Save</Button>
					</Form.Item>
				</Form>
			</section>
			<section>
				<h3>Horizontal</h3>
				<Form
					layout="horizontal"
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 18 }}
				>
					<Form.Item label="Name" name="horizontalName">
						<Input placeholder="Name" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 6, span: 18 }}>
						<Button type="primary">Save</Button>
					</Form.Item>
				</Form>
			</section>
			<section>
				<h3>Inline</h3>
				<Form layout="inline">
					<Form.Item label="Name" name="inlineName">
						<Input placeholder="Name" />
					</Form.Item>
					<Form.Item>
						<Button type="primary">Search</Button>
					</Form.Item>
				</Form>
			</section>
		</div>
	),
};

Layouts.parameters = {
	docs: {
		description: {
			story: "Compare the vertical, horizontal, and inline Form layouts.",
		},
	},
};

export const Validation: Story = {
	render: () => {
		const [form] = Form.useForm();
		const [submitted, setSubmitted] = useState(false);

		return (
			<div style={{ maxWidth: 480 }}>
				<Form
					form={form}
					layout="vertical"
					onFinish={() => setSubmitted(true)}
					onValuesChange={() => setSubmitted(false)}
				>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please enter a password." }]}
					>
						<Input.Password placeholder="Password" />
					</Form.Item>
					<Form.Item
						label="Confirm password"
						name="confirmPassword"
						dependencies={["password"]}
						rules={[
							{ required: true, message: "Please confirm your password." },
							{
								validator: (_, value) =>
									!value || form.getFieldValue("password") === value
										? Promise.resolve()
										: Promise.reject(new Error("The passwords do not match.")),
							},
						]}
					>
						<Input.Password placeholder="Confirm password" />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Create account
						</Button>
					</Form.Item>
				</Form>
				<output>
					{submitted && "The form is valid and has been submitted."}
				</output>
			</div>
		);
	},
};

Validation.parameters = {
	docs: {
		description: {
			story:
				"Use field rules and dependencies to validate that the password fields match.",
		},
	},
};

export const FormInstance: Story = {
	render: () => {
		const [form] = Form.useForm();
		const [submittedValues, setSubmittedValues] = useState<string>();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form
					form={form}
					layout="vertical"
					initialValues={{ name: "Alex Morgan", role: "designer" }}
					onFinish={(values) =>
						setSubmittedValues(JSON.stringify(values, null, 2))
					}
				>
					<Form.Item label="Name" name="name">
						<Input />
					</Form.Item>
					<Form.Item label="Role" name="role">
						<Select
							options={[
								{ value: "designer", label: "Designer" },
								{ value: "developer", label: "Developer" },
							]}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>{" "}
						<Button htmlType="button" onClick={() => form.resetFields()}>
							Reset
						</Button>
					</Form.Item>
				</Form>
				{submittedValues && <pre aria-live="polite">{submittedValues}</pre>}
			</div>
		);
	},
};

FormInstance.parameters = {
	docs: {
		description: {
			story:
				"Control a Form instance to submit its values or reset fields to their initial values.",
		},
	},
};

export const OtherControls: Story = {
	render: () => {
		const [values, setValues] = useState<string>();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form
					layout="vertical"
					initialValues={{ plan: "standard", seats: 2, notifications: true }}
					onFinish={(formValues) =>
						setValues(JSON.stringify(formValues, null, 2))
					}
				>
					<Form.Item label="Start date" name="startDate">
						<DatePicker style={{ width: "100%" }} />
					</Form.Item>
					<Form.Item label="Plan" name="plan">
						<Radio.Group
							options={[
								{ label: "Standard", value: "standard" },
								{ label: "Premium", value: "premium" },
							]}
						/>
					</Form.Item>
					<Form.Item label="Seats" name="seats">
						<InputNumber min={1} max={20} style={{ width: "100%" }} />
					</Form.Item>
					<Form.Item
						label="Email notifications"
						name="notifications"
						valuePropName="checked"
					>
						<Switch />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Save preferences
						</Button>
					</Form.Item>
				</Form>
				{values && <pre aria-live="polite">{values}</pre>}
			</div>
		);
	},
};

OtherControls.parameters = {
	docs: {
		description: {
			story:
				"Bind date, radio, number, and switch controls to Form.Item fields, using valuePropName for Switch.",
		},
	},
};

export const DynamicFields: Story = {
	render: () => {
		const [submittedValues, setSubmittedValues] = useState<string>();

		return (
			<div style={{ maxWidth: 520 }}>
				<Form
					layout="vertical"
					initialValues={{ contacts: [{ name: "", email: "" }] }}
					onFinish={(values) =>
						setSubmittedValues(JSON.stringify(values, null, 2))
					}
				>
					<Form.List name="contacts">
						{(fields, { add, remove }, { errors }) => (
							<>
								{fields.map((field, index) => (
									<div
										key={field.key}
										style={{
											display: "grid",
											gridTemplateColumns: "1fr 1fr auto",
											gap: 12,
											alignItems: "start",
										}}
									>
										<Form.Item
											label={`Contact ${index + 1}`}
											name={[field.name, "name"]}
											rules={[{ required: true, message: "Enter a name." }]}
										>
											<Input placeholder="Name" />
										</Form.Item>
										<Form.Item
											label={index === 0 ? "Email" : " "}
											name={[field.name, "email"]}
											rules={[
												{ type: "email", message: "Enter a valid email." },
											]}
										>
											<Input placeholder="Email" />
										</Form.Item>
										<Button
											htmlType="button"
											danger
											onClick={() => remove(field.name)}
											aria-label={`Remove contact ${index + 1}`}
											style={{ marginTop: 30 }}
										>
											Remove
										</Button>
									</div>
								))}
								<Form.Item>
									<Button
										htmlType="button"
										onClick={() => add({ name: "", email: "" })}
									>
										Add contact
									</Button>
									<Form.ErrorList errors={errors} />
								</Form.Item>
							</>
						)}
					</Form.List>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit contacts
						</Button>
					</Form.Item>
				</Form>
				{submittedValues && <pre aria-live="polite">{submittedValues}</pre>}
			</div>
		);
	},
};

DynamicFields.parameters = {
	docs: {
		description: {
			story:
				"Use Form.List to add and remove repeated fields, with nested field names and per-field validation.",
		},
	},
};

const WatchedName = ({
	form,
}: { form: ReturnType<typeof Form.useForm>[0] }) => {
	const name = Form.useWatch("name", form);
	return <p>Live preview: {String(name || "Enter a name above")}</p>;
};

export const WatchFields: Story = {
	render: () => {
		const [form] = Form.useForm();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form form={form} layout="vertical" initialValues={{ name: "Taylor" }}>
					<Form.Item label="Name" name="name">
						<Input placeholder="Enter your name" />
					</Form.Item>
					<WatchedName form={form} />
				</Form>
			</div>
		);
	},
};

WatchFields.parameters = {
	docs: {
		description: {
			story:
				"Use Form.useWatch in a child component to reactively display a field value.",
		},
	},
};

export const NestedFields: Story = {
	render: () => {
		const [submittedValues, setSubmittedValues] = useState<string>();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form
					layout="vertical"
					initialValues={{
						profile: { name: "Morgan Lee", address: { city: "Singapore" } },
					}}
					onFinish={(values) =>
						setSubmittedValues(JSON.stringify(values, null, 2))
					}
				>
					<Form.Item label="Name" name={["profile", "name"]}>
						<Input />
					</Form.Item>
					<Form.Item label="City" name={["profile", "address", "city"]}>
						<Input />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit profile
						</Button>
					</Form.Item>
				</Form>
				{submittedValues && <pre aria-live="polite">{submittedValues}</pre>}
			</div>
		);
	},
};

NestedFields.parameters = {
	docs: {
		description: {
			story: "Use array paths to bind fields to nested objects in Form values.",
		},
	},
};

export const DisabledAndVariants: Story = {
	render: () => (
		<div style={{ display: "grid", gap: 24, maxWidth: 480 }}>
			<Form
				layout="vertical"
				disabled
				initialValues={{ name: "Read-only value" }}
			>
				<Form.Item label="Disabled form" name="name">
					<Input />
				</Form.Item>
				<Form.Item label="Select" name="disabledSelect">
					<Select
						options={[
							{ label: "First option", value: "first" },
							{ label: "Second option", value: "second" },
						]}
					/>
				</Form.Item>
			</Form>
			<Form layout="vertical" variant="filled" size="small">
				<Form.Item label="Small filled input" name="smallFilled">
					<Input placeholder="Small filled input" />
				</Form.Item>
				<Form.Item label="Small filled select" name="smallFilledSelect">
					<Select
						placeholder="Choose an option"
						options={[{ label: "Option", value: "option" }]}
					/>
				</Form.Item>
			</Form>
		</div>
	),
};

DisabledAndVariants.parameters = {
	docs: {
		description: {
			story:
				"Form-level disabled, variant, and size props are inherited by supported controls.",
		},
	},
};

export const CoordinatedForms: Story = {
	render: () => {
		const [result, setResult] = useState<string>();

		return (
			<div style={{ maxWidth: 480 }}>
				<Form.Provider
					onFormFinish={(name, { values }) =>
						setResult(`${name}: ${JSON.stringify(values)}`)
					}
				>
					<Form name="account" layout="vertical">
						<Form.Item label="Username" name="username">
							<Input placeholder="Username" />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit account
							</Button>
						</Form.Item>
					</Form>
					<Form name="profile" layout="vertical">
						<Form.Item label="Display name" name="displayName">
							<Input placeholder="Display name" />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit profile
							</Button>
						</Form.Item>
					</Form>
				</Form.Provider>
				{result && <output>{result}</output>}
			</div>
		);
	},
};

CoordinatedForms.parameters = {
	docs: {
		description: {
			story:
				"Use Form.Provider to observe submissions from named forms and coordinate their data.",
		},
	},
};
