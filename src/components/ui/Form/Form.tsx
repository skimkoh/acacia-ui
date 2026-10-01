import { Form as AntdForm } from "antd";
import type { AcaciaFormProps } from "../interfaces";
import FormItem from "./FormItem";
import FormErrorList from "./FormErrorList";
import FormProvider from "./FormProvider";

export const useForm = AntdForm.useForm;

const Form = Object.assign(
	({ ...props }: AcaciaFormProps) => <AntdForm {...props} />,
	{
		Item: FormItem,
		ErrorList: FormErrorList,
		Provider: FormProvider,
		useForm: AntdForm.useForm,
	},
);

export default Form;
