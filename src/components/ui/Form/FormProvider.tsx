import { Form as AntdForm } from "antd";
import type { FormProviderProps } from "antd/es/form/context";

const FormProvider = ({ ...props }: FormProviderProps) => {
	return <AntdForm.Provider {...props} />;
};

export default FormProvider;
