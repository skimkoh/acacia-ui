import { Statistic as AntdStatistic, type StatisticTimerProps } from "antd";

const StatisticTimer = ({ ...props }: StatisticTimerProps) => {
	return <AntdStatistic.Timer {...props} />;
};

export default StatisticTimer;
