import { useEffect, useState } from 'react';
import { fetchSaveData } from './useFoodData';

const defaultDataFood = {
  title: '',
  image: '',
  price: 0,
};

const useSaveFood = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<SaveFood>(defaultDataFood);

  useEffect(() => {
    const handleData = async () => {
      console.log(data);
      if (!data.title) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchSaveData(data);
        console.log(response);
      } catch (err: any) {
        setError(err);
      } finally {
        setData(defaultDataFood);
        setIsLoading(false);
      }
    };

    handleData();
  }, [data]);
  return [isLoading, error, setData];
};

export default useSaveFood;
