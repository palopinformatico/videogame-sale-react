import "./Card.css";

export default function Card({ imagen, titulo, precio }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-image" />
      <div className="card-title">{titulo}</div>
      <div className="card-price">
        Desde <strong>{precio}</strong>
      </div>
    </div>
  );
}
