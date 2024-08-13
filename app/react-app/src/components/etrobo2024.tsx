import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface RunLogData {
  brightness: string;
  rightPWM: string;
  leftPWM: string;
  R: string;
  G: string;
  B: string;
}

const RunLogChart: React.FC = () => {
  const [runLogData, setRunLogData] = useState<RunLogData[]>([]);
  const [latestK, setLatestK] = useState<number>(1);
  const [hasData, setHasData] = useState<boolean>(true);
  const [selectedCharts, setSelectedCharts] = useState({
    brightnessRgbPwm: true,
    brightness: true,
    rgb: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ runLog: RunLogData[] }>(`http://133.54.33.97:8000/run-log?latest=${latestK}`);
        setRunLogData(response.data.runLog);
        setHasData(true);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          console.log('データがありません');
          setRunLogData([]);
          setHasData(false);
        } else {
          console.error('データの取得に失敗しました:', error);
          setHasData(false);
        }
      }
    };
    fetchData();
  }, [latestK]);

  const handleLatestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLatestK(Number(event.target.value));
  };

  const handleChartSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCharts({
      ...selectedCharts,
      [event.target.name]: event.target.checked,
    });
  };
  
  // 明るさに関するグラフの描画
  const brightnessOptions: Highcharts.Options = {
    title: {
      text: '輝度'
    },
    xAxis: {
      title: {
        text: 'データポイント'
      }
    },
    yAxis: {
      title: {
        text: '輝度'
      }
    },
    series: [
      {
        name: '輝度',
        type: 'line',
        data: runLogData.map(d => parseInt(d.brightness))
      }
    ]
  };

  const rgbOptions: Highcharts.Options = {
    title: {
      text: 'RGB値'
    },
    xAxis: {
      title: {
        text: 'データポイント'
      }
    },
    yAxis: [
      {
        title: {
          text: 'PWM'
        }
      },
      {
        title: {
          text: 'RGB値'
        },
        opposite: true
      }
    ],
    series: [
      {
        name: 'R',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.R))
      },
      {
        name: 'G',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.G))
      },
      {
        name: 'B',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.B))
      }
    ]
  };

  const pwmOptions: Highcharts.Options = {
    title: {
      text: 'PWM値'
    },
    xAxis: {
      title: {
        text: 'データポイント'
      }
    },
    yAxis: [
      {
        title: {
          text: 'PWM'
        }
      },
      {
        title: {
          text: 'RGB値'
        },
        opposite: true
      }
    ],
    series: [
      {
        name: 'R',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.R))
      },
      {
        name: 'G',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.G))
      },
      {
        name: 'B',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.B))
      },
      {
        name: '右PWM',
        type: 'line',
        data: runLogData.map(d => parseInt(d.rightPWM))
      },
      {
        name: '左PWM',
        type: 'line',
        data: runLogData.map(d => parseInt(d.leftPWM))
      }
    ]
  };

  const brightnessRgbPwmOptions: Highcharts.Options = {
    title: {
      text: 'PWM値'
    },
    xAxis: {
      title: {
        text: 'データポイント'
      }
    },
    yAxis: [
      {
        title: {
          text: 'PWM'
        }
      },
      {
        title: {
          text: 'RGB値'
        },
        opposite: true
      }
    ],
    series: [
      {
        name: 'R',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.R))
      },
      {
        name: 'G',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.G))
      },
      {
        name: 'B',
        type: 'line',
        yAxis: 1,
        data: runLogData.map(d => parseInt(d.B))
      },
      {
        name: '右PWM',
        type: 'line',
        data: runLogData.map(d => parseInt(d.rightPWM))
      },
      {
        name: '左PWM',
        type: 'line',
        data: runLogData.map(d => parseInt(d.leftPWM))
      }
    ]
  };


  return (
    <div>
      <select value={latestK} onChange={handleLatestChange}>
        {[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10].map(k => (
          <option key={k} value={k}>最新{k}番目</option>
        ))}
      </select>
      <div>
        <label>
          <input
            type="checkbox"
            name="brightnessRgbPwm"
            checked={selectedCharts.brightnessRgbPwm}
            onChange={handleChartSelection}
          />
          輝度・RGB・PWM
        </label>
        <label>
          <input
            type="checkbox"
            name="brightness"
            checked={selectedCharts.brightness}
            onChange={handleChartSelection}
          />
          輝度
        </label>
        <label>
          <input
            type="checkbox"
            name="rgb"
            checked={selectedCharts.rgb}
            onChange={handleChartSelection}
          />
          RGB
        </label>
      </div>
      {hasData ? (
        <>
          {selectedCharts.brightnessRgbPwm && (
            <HighchartsReact highcharts={Highcharts} options={brightnessRgbPwmOptions} />
          )}
          {selectedCharts.brightness && (
            <HighchartsReact highcharts={Highcharts} options={brightnessOptions} />
          )}
          {selectedCharts.rgb && (
            <HighchartsReact highcharts={Highcharts} options={rgbOptions} />
          )}
        </>
      ) : (
        <p>データがありません。別の選択肢を試してください。</p>
      )}
    </div>
  );
}

export default RunLogChart;