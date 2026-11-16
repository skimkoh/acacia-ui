import { Input as AntdInput, type GetProps } from "antd";

type SearchProps = GetProps<typeof AntdInput.Search>;

const Search = ({ ...props }: SearchProps) => {
	return <AntdInput.Search {...props} />;
};

export default Search;
