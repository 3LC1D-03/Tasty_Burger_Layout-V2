import { useState } from "react";
import "./ProductDetails.css";

function ProductDetails({ product, onClose }) {
  const { image, name, description, detailedDescription, price, rating } =
    product;
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="product-details">
      {onClose && (
        <button
          className="product-details__close"
          type="button"
          onClick={onClose}
          aria-label="Back to burgers"
          title="Back to burgers"
        >
          &lt;
        </button>
      )}
      <div className="product-details__image-section">
        <img className="product-details__image" src={image} alt={name} />
      </div>

      <div className="product-details__information">
        <div className="product-details__title-row">
          <h1>{name}</h1>
          <button
            className={`product-details__like ${isLiked ? "is-active" : ""}`}
            type="button"
            onClick={() => setIsLiked((liked) => !liked)}
            aria-label={`${isLiked ? "Unlike" : "Like"} ${name}`}
            aria-pressed={isLiked}
            title={`${isLiked ? "Unlike" : "Like"} ${name}`}
          >
            {isLiked ? "♥" : "♡"}
          </button>
        </div>
        <p className="product-details__ingredients">{description}</p>
        <p className="product-details__rating">
          {"★".repeat(rating)} {rating}/5
        </p>
        <h2 className="product-details__description-heading">Description</h2>
        <p className="product-details__description">
          {detailedDescription || description}
        </p>
        <div className="product-details__price-row">
          <p className="product-details__price">₱{price}</p>
          <div className="product-details__quantity" aria-label="Quantity">
            <button
              className="product-details__quantity-button"
              type="button"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              aria-label={`Decrease quantity of ${name}`}
              disabled={quantity === 1}
            >
              −
            </button>
            <span className="product-details__quantity-value">{quantity}</span>
            <button
              className="product-details__quantity-button"
              type="button"
              onClick={() => setQuantity((current) => current + 1)}
              aria-label={`Increase quantity of ${name}`}
            >
              +
            </button>
          </div>
        </div>
        <button className="product-details__button" type="button">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
