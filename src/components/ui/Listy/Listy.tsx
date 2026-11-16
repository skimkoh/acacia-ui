import { Listy as AntdListy, type ListyProps, type ListyRef } from "antd";
import type { Key, Ref } from "react";

function Listy<T, K extends Key = Key>({
	ref,
	...props
}: ListyProps<T, K> & { ref?: Ref<ListyRef> }) {
	return <AntdListy<T, K> {...props} ref={ref} />;
}

export default Listy;
