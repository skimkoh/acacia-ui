import { Form as AntdForm } from "antd";
import type { ErrorListProps } from "antd/es/form";

const FormErrorList = ({ ...props }: ErrorListProps) => {
	return <AntdForm.ErrorList {...props} />;
};

export default FormErrorList;
