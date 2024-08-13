import React from 'react';
import './ChartSelector.css';

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
    <div className="chart-selector-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="chartType"
          value="pwm"
          checked={selectedChart.includes('pwm')}
          onChange={handleChartSelection}
          className="hidden-checkbox"
        />
        <span className={`styled-checkbox ${selectedChart.includes('pwm') ? 'checked' : ''}`}>
          <svg className="check-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        PWM値
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="chartType"
          value="brightness"
          checked={selectedChart.includes('brightness')}
          onChange={handleChartSelection}
          className="hidden-checkbox"
        />
        <span className={`styled-checkbox ${selectedChart.includes('brightness') ? 'checked' : ''}`}>
          <svg className="check-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        輝度
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="chartType"
          value="rgb"
          checked={selectedChart.includes('rgb')}
          onChange={handleChartSelection}
          className="hidden-checkbox"
        />
        <span className={`styled-checkbox ${selectedChart.includes('rgb') ? 'checked' : ''}`}>
          <svg className="check-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        RGB値
      </label>
    </div>
  );
};

export default ChartSelector;