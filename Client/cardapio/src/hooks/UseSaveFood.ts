import { useEffect, useState } from 'react';
import { FoodService } from '../service/FoodService';

const defaultDataFood = {
  title: '',
  image: '',
  price: 0,
};

type UseSaveFoodReturn = [boolean, string, (data: SaveFood) => void];

const useSaveFood = (): UseSaveFoodReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<SaveFood>(defaultDataFood);

  useEffect(() => {
    const handleData = async () => {
      if (!data.title) return;

      setIsLoading(true);
      setError('');

      try {
        await FoodService.post(data);
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
