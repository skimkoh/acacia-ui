import { List as AntdList } from "antd";
import type { ListItemProps } from "antd/es/list/Item";
import ListItemMeta from "./ListItemMeta";

const ListItem = ({ ...props }: ListItemProps) => {
	return <AntdList.Item {...props} />;
};

ListItem.Meta = ListItemMeta;
export default ListItem;
