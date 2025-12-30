import { AutoComplete as AntdAutoComplete, type AutoCompleteProps } from "antd";

const AutoComplete = ({ ...props }: AutoCompleteProps) => {
	return <AntdAutoComplete {...props} />;
};

export default AutoComplete;
