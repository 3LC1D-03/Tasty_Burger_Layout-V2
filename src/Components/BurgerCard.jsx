import { useState } from "react";
import "./BurgerCard.css";

function BurgerCard({ image, name, description, price, rating, onSelect }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const safeRating = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.();
    }
  };

  return (
    <article
      className="burger-card"
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={onSelect ? handleKeyDown : undefined}
    >
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
            onClick={(event) => {
              event.stopPropagation();
              setIsFavorite((favorite) => !favorite);
            }}
          >
            <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
          </button>
        </div>

        <h2 className="burger-card__name">{name}</h2>
        <p className="burger-card__ingredients">{description}</p>
        <span className="burger-card__price">₱{price}</span>
      </div>
    </article>
  );
}

export default BurgerCard;
