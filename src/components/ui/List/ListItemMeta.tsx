import { List as AntdList } from "antd";
import type { ListItemMetaProps } from "antd/es/list";

const ListItemMeta = ({ ...props }: ListItemMetaProps) => {
	return <AntdList.Item.Meta {...props} />;
};

export default ListItemMeta;
