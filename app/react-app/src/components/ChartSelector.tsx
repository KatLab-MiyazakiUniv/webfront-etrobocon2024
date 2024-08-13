import React from 'react';

interface ChartSelectorProps {
  selectedChart: string[];
  setSelectedChart: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChartSelector: React.FC<ChartSelectorProps> = ({ selectedChart, setSelectedChart }) => {
  const handleChartSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedChart(prev =>
      event.target.checked
        ? [...prev, value]
        : prev.filter(chart => chart !== value)
    );
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="chartType"
          value="pwm"
          checked={selectedChart.includes('pwm')}
          onChange={handleChartSelection}
        />
        PWM値
      </label>
      <label>
        <input
          type="checkbox"
          name="chartType"
          value="brightness"
          checked={selectedChart.includes('brightness')}
          onChange={handleChartSelection}
        />
        輝度
      </label>
      <label>
        <input
          type="checkbox"
          name="chartType"
          value="rgb"
          checked={selectedChart.includes('rgb')}
          onChange={handleChartSelection}
        />
        RGB値
      </label>
    </div>
  );
};

export default ChartSelector;