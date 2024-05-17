interface CardProps {
  price: number;
  title: string;
  image: string;
}
import './card.css';

export function Card({ price, title, image }: CardProps) {
  return (
    <div>
      <div className="card">
        <img src={image} alt="sandwich image" />
        <h2>{title}</h2>
        <p>
          <b>Valor: {price}</b>
        </p>
      </div>
    </div>
  );
}
