import { AutoComplete as AntdAutoComplete, type AutoCompleteProps } from "antd";

const AutoComplete = ({ ...props }: AutoCompleteProps): React.ReactNode => {
	return <AntdAutoComplete {...props} />;
};

export default AutoComplete;
