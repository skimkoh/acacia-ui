/**
 * @description A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
 */

import { Pagination as AntdPagination } from "antd";
import type { AcaciaPaginationProps } from "../interfaces";

const Pagination = ({ ...props }: AcaciaPaginationProps) => {
	return <AntdPagination {...props} />;
};
export default Pagination;
