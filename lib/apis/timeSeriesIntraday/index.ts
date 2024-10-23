import { API_BASE_URL } from '@/lib/config';

export const getTimeSeriesIntradayData = async (interval: string = '5min') => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=${interval}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
