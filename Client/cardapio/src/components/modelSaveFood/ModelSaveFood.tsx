import React, { useState } from 'react';
import './ModelSaveFood.css';
import useSaveFood from '../../hooks/UseSaveFood';

interface SaveFood {
  title: string;
  image: string;
  price: number;
}

interface FormProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialFormData: SaveFood = {
  title: '',
  image: '',
  price: 0,
};

interface Field {
  id: keyof SaveFood;
  label: string;
  type: string;
}

const fields: Field[] = [
  { id: 'title', label: 'Title', type: 'text' },
  { id: 'image', label: 'ImageURL', type: 'text' },
  { id: 'price', label: 'Price', type: 'number' },
];

const ModelSaveFood = ({ isOpen, onClose }: FormProps) => {
  const [isLoading, error, setData] = useSaveFood();
  const [formData, setFormData] = useState<SaveFood>(initialFormData);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { id, value } = target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setData(formData);
    setFormData(initialFormData);
  };

  const closeModel: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const isOverlay = event.target === event.currentTarget;
    if (isOpen && isOverlay) {
      onClose(false);
    }
  };

  return (
    <div className={`create-form ${isOpen && 'is-open'}`} onClick={closeModel}>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          {fields.map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                id={id}
                type={type}
                value={formData[id]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ModelSaveFood;
