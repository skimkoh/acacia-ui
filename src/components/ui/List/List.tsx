import { List as AntdList, type ListProps } from "antd";
import ListItem from "./ListItem";

const List = <T,>({ ...props }: ListProps<T>) => {
	return <AntdList {...props} />;
};

List.Item = ListItem;
export default List;
