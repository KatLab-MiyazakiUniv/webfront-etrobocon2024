import React from 'react';
import './LatestSelector.css';

interface LatestSelectorProps {
  latestK: number;
  setLatestK: React.Dispatch<React.SetStateAction<number>>;
}

const LatestSelector: React.FC<LatestSelectorProps> = ({ latestK, setLatestK }) => {
  const handleLatestChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLatestK(Number(event.target.value));
  };

  return (
    <select className="latest-selector" value={latestK} onChange={handleLatestChange}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(k => (
        <option key={k} value={k}>最新{k}番目</option>
      ))}
    </select>
  );
};

export default LatestSelector;