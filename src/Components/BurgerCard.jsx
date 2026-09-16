import { useState } from "react";
import "./BurgerCard.css";

function BurgerCard({ image, name, description, price, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const safeRating = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));

  return (
    <article className="burger-card">
      <img className="burger-card__image" src={image} alt={name} />

      <div className="burger-card__content">
        <div className="burger-card__rating-row">
          <div
            className="burger-card__rating"
            aria-label={`${safeRating} out of 5 stars`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} aria-hidden="true">
                {index < safeRating ? "★" : "☆"}
              </span>
            ))}
          </div>

          <button
            className={`burger-card__favorite ${isFavorite ? "is-active" : ""}`}
            type="button"
            aria-label={`${isFavorite ? "Remove" : "Add"} ${name} ${isFavorite ? "from" : "to"} favorites`}
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((favorite) => !favorite)}
          >
            <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
          </button>
        </div>

        <h2 className="burger-card__name">{name}</h2>
        <p className="burger-card__description">{description}</p>
        <span className="burger-card__price">₱{price}</span>
      </div>
    </article>
  );
}

export default BurgerCard;
