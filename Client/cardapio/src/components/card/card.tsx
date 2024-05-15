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
        <img src="" alt="" />
        <h2></h2>
        <p>
          <b>Valor:</b>
        </p>
      </div>
    </div>
  );
}
