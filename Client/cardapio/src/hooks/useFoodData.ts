import { FoodData } from '../interface/FoodData';
import { useEffect, useState } from 'react';
import { FoodService } from '../service/FoodService';

export function useFoodData() {
  const [foodData, setFoodData] = useState<FoodData[] | null>(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await FoodService.get();
        setFoodData(response);
      } catch (error) {
        console.log('Error fetching food data', error);
      }
    };

    fetchFoodData();
  }, [foodData]);

  return foodData;
}
