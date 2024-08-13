import Highcharts from 'highcharts';
import { RunLogData } from './types';

export const getChartOptions = (selectedChart: string[], runLogData: RunLogData[]): Highcharts.Options => {
  const generateTitle = (selectedCharts: string[]): string => {
    const titles = {
      pwm: 'PWM値',
      brightness: '輝度',
      rgb: 'RGB値'
    };
    const selectedTitles = selectedCharts.map(chart => titles[chart as keyof typeof titles]);
    return selectedTitles.length > 0 ? selectedTitles.join('と') : '選択されたデータ';
  };

  return {
    title: {
      text: generateTitle(selectedChart)
    },
    xAxis: {
      title: {
        text: '時間（秒）'
      },
      labels: {
        formatter: function(this: Highcharts.AxisLabelsFormatterContextObject) {
          return (this.value as number * 0.1).toFixed(1);
        }
      }
    },
    yAxis: [
      {
        title: {
          text: generateTitle(selectedChart)
        }
      }
    ],
    series: [
      ...(selectedChart.includes('pwm') ? [{
        name: '右PWM',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.rightPWM))
      }, {
        name: '左PWM',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.leftPWM))
      }] : []),
      ...(selectedChart.includes('brightness') ? [{
        name: '輝度',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.brightness))
      }] : []),
      ...(selectedChart.includes('rgb') ? [{
        name: 'R',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.R))
      }, {
        name: 'G',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.G))
      }, {
        name: 'B',
        type: 'line' as const,
        data: runLogData.map(d => parseInt(d.B))      
      }] : [])
    ] as Highcharts.SeriesOptionsType[]
  };
};