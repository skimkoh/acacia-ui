import { Form as AntdForm, type FormItemProps } from "antd";

const FormItem = ({ ...props }: FormItemProps) => {
	return <AntdForm.Item {...props} />;
};

export default FormItem;
