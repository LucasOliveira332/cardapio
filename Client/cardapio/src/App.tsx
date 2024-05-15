import { useState } from 'react';
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';

function App() {
  const foodsData: FoodData[] = [];
  return (
    <>
      <div className="container">
        <div className="card-grid">
          {foodsData.map((foodData) => (
            <Card
              image={foodData.image}
              price={foodData.price}
              title={foodData.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
