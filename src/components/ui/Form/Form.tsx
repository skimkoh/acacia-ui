import { Form as AntdForm } from "antd";
import type { AcaciaFormProps } from "../interfaces";
import FormItem from "./FormItem";
import FormErrorList from "./FormErrorList";
import FormProvider from "./FormProvider";

const Form = ({ ...props }: AcaciaFormProps) => {
	return <AntdForm {...props} />;
};

Form.Item = FormItem;
Form.ErrorList = FormErrorList;
Form.Provider = FormProvider;
export default Form;
