import { useState } from 'react';
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import './App.css';
import ModelSaveFood from './components/modelSaveFood/ModelSaveFood';

function App() {
  const [model, setModel] = useState<boolean>(false);
  const foodsData: FoodData[] | null = useFoodData();

  function handleClick() {
    setModel(!model);
  }

  return (
    <div className={`container ${model ? 'model-active' : ''}`}>
      <button onClick={handleClick}>Add Food</button>
      <div className="card-grid">
        {foodsData?.map((foodData) => (
          <Card
            key={foodData.id}
            image={foodData.image}
            price={foodData.price}
            title={foodData.title}
          />
        ))}
      </div>
      <ModelSaveFood isOpen={model} onClose={setModel} />
    </div>
  );
}

export default App;
