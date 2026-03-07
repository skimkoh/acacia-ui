import { Statistic as AntdStatistic, type StatisticProps } from "antd";
import StatisticTimer from "./Timer";

const Statistic = ({ ...props }: StatisticProps) => {
	return <AntdStatistic {...props} />;
};

Statistic.Timer = StatisticTimer;
export default Statistic;
