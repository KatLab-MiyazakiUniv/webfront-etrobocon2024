import axios from 'axios';
import { RunLogData } from './types';

export const fetchRunLogData = async (
  latestK: number,
  setRunLogData: React.Dispatch<React.SetStateAction<RunLogData[]>>,
  setHasData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await axios.get<{ runLog: RunLogData[] }>(`${process.env.REACT_APP_API_URL}/run-log?latest=${latestK}`);
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