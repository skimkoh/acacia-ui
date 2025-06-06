import { Input as AntdInput } from "antd";
import type { AcaciaInputProps } from "../interfaces";

const Search = ({ ...props }: AcaciaInputProps) => {
	return <AntdInput.Search {...props} />;
};

export default Search;
