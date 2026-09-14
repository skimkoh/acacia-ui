import { Tour as AntdTour } from "antd";
import type { AcaciaTourProps } from "../interfaces";

const Tour = ({ ...props }: AcaciaTourProps) => {
	return <AntdTour {...props} />;
};

export default Tour;
