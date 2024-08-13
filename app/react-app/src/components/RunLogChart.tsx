import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { fetchRunLogData } from './DataFetcher';
import { getChartOptions } from './ChartOptions';
import ChartSelector from './ChartSelector';
import LatestSelector from './LatestSelector';
import { RunLogData } from './types';

const RunLogChart: React.FC = () => {
  const [runLogData, setRunLogData] = useState<RunLogData[]>([]);
  const [latestK, setLatestK] = useState<number>(1);
  const [hasData, setHasData] = useState<boolean>(true);
  const [selectedChart, setSelectedChart] = useState<string[]>(['pwm']);

  useEffect(() => {
    fetchRunLogData(latestK, setRunLogData, setHasData);
  }, [latestK]);

  const chartOptions = getChartOptions(selectedChart, runLogData);

  return (
    <div>
      <LatestSelector latestK={latestK} setLatestK={setLatestK} />
      <ChartSelector selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
      {hasData ? (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      ) : (
        <p>データがありません。別の選択肢を試してください。</p>
      )}
    </div>
  );
}

export default RunLogChart;