import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import './ModelSaveFood.css';
import useSaveFood from '../../hooks/UseSaveFood';

interface FormData {
  title: string;
  image: string;
  price: number;
}

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData: FormData = {
  title: '',
  image: '',
  price: 0,
};

const ModelSaveFood = ({ isOpen, onClose }: FormProps) => {
  const [loading, error, setData] = useSaveFood();
  const [formData, setFormData] = useState<SaveFood>(initialFormData);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setData(formData);
    setFormData(initialFormData);
    if (loading) {
      onClose();
    }
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [target.id]: target.value });
  }

  const fields = [
    { id: 'title', label: 'Title', type: 'text' },
    { id: 'image', label: 'ImageURL', type: 'text' },
    { id: 'price', label: 'Price', type: 'number' },
  ];

  return (
    <div className="create-form">
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
          <button disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ModelSaveFood;
