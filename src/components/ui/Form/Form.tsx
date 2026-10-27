import { Form as AntdForm } from "antd";
import type { AcaciaFormProps } from "../interfaces";
import FormErrorList from "./FormErrorList";
import FormItem from "./FormItem";
import FormProvider from "./FormProvider";

export const useForm = AntdForm.useForm;

const Form = Object.assign(
	({ ...props }: AcaciaFormProps) => <AntdForm {...props} />,
	{
		Item: FormItem,
		ErrorList: FormErrorList,
		List: AntdForm.List,
		Provider: FormProvider,
		useForm: AntdForm.useForm,
		useWatch: AntdForm.useWatch,
	},
);

export default Form;
