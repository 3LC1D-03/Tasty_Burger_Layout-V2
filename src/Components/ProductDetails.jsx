import { useEffect, useRef, useState } from "react";

const quantityButtonClasses = "product-details__quantity-button grid size-[2.25rem] cursor-pointer place-items-center rounded-full border-0 bg-burgundy p-0 text-[1.5rem] leading-none text-white transition-[background-color,transform] duration-200 ease-[ease] enabled:hover:scale-[1.05] enabled:hover:bg-[#5f1515] disabled:cursor-not-allowed disabled:opacity-50";

function ProductDetails({ product, onClose, onAddToCart }) {
  const { image, name, description, detailedDescription, price, rating } =
    product;
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dialogRef = useRef(null);
  const safeRating = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));
  const totalPrice = ((Math.round(Number(price) * 100) * quantity) / 100)
    .toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="product-details-modal box-border m-auto max-h-[calc(100svh-32px)] w-[min(1080px,calc(100%-48px))] max-w-none overflow-auto rounded-[24px] border border-solid border-[#eadfd9] bg-[#fffdfb] p-0 text-[#403733] shadow-[0_24px_80px_rgb(0_0_0/30%)] scheme-light backdrop:bg-[rgb(20_14_11/65%)] backdrop:backdrop-blur-[4px] compact-nav:w-[calc(100%-24px)] compact-nav:rounded-[18px]"
      aria-labelledby="product-details-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
        }
      }}
    >
    <section className="product-details relative box-border mx-auto my-0 grid min-h-0 w-full grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-stretch gap-[clamp(1.5rem,4vw,3rem)] px-[2rem] pt-[3.5rem] pb-[2rem] [&_button]:[font-family:inherit] [&_button:focus-visible]:outline-3 [&_button:focus-visible]:outline-[#d49a2a] [&_button:focus-visible]:outline-offset-3 compact-nav:min-h-[auto] compact-nav:grid-cols-1 compact-nav:gap-[2rem] compact-nav:px-[1.25rem] compact-nav:pt-[3rem]">
      {onClose && (
        <button
          className="product-details__close absolute top-[1rem] right-[1rem] size-[2.25rem] cursor-pointer rounded-full border-0 bg-transparent p-0 text-[2rem] leading-none text-burgundy compact-nav:top-[0.75rem] compact-nav:right-[0.75rem]"
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          title="Close product details"
          autoFocus
        >
          ×
        </button>
      )}
      <div className="product-details__image-section relative min-h-0 w-full overflow-hidden rounded-[1rem] shadow-[0_8px_24px_rgb(0_0_0/15%)] compact-nav:aspect-[4/3] compact-nav:max-h-[320px]">
        <img className="product-details__image absolute inset-0 block h-full w-full object-cover" src={image} alt={name} />
      </div>

      <div className="product-details__information flex min-w-0 flex-col gap-[1.25rem] text-left">
        <div className="product-details__title-row flex items-center justify-between gap-[1rem]">
          <h2 className="m-0 mb-[0.25rem] font-sans text-[clamp(1.6rem,3vw,2rem)] leading-[1.1] font-medium tracking-normal text-black compact-nav:text-[1.75rem]" id="product-details-title">{name}</h2>
          <button
            className={`product-details__like shrink-0 cursor-pointer border-0 bg-transparent p-0 text-[2.25rem] leading-none transition-[color,transform] duration-200 ease-[ease] hover:scale-[1.08] hover:text-[#e30613] ${isLiked ? "is-active scale-[1.08] text-[#e30613]" : "text-[#777]"}`}
            type="button"
            onClick={() => setIsLiked((liked) => !liked)}
            aria-label={`${isLiked ? "Unlike" : "Like"} ${name}`}
            aria-pressed={isLiked}
            title={`${isLiked ? "Unlike" : "Like"} ${name}`}
          >
            {isLiked ? "♥" : "♡"}
          </button>
        </div>
        <p className="product-details__ingredients m-0 text-[1rem] leading-[1.5] font-medium text-[#737373]">{description}</p>
        <p className="product-details__rating m-0 text-[1.1rem] font-semibold tracking-[0.05rem] text-[#d49a2a]" aria-label={`${rating} out of 5 stars`}>
          <span aria-hidden="true">{"★".repeat(safeRating)} {rating}/5</span>
        </p>
        <div className="product-details__description-section grid gap-[0.6rem]">
          <h3 className="product-details__description-heading m-0 text-[1.05rem] font-bold text-burgundy">Description</h3>
          <p className="product-details__description m-0 leading-[1.7]">
            {detailedDescription || description}
          </p>
        </div>
        <div className="product-details__price-row mt-[0.5rem] flex items-center justify-between gap-[1rem] border-0 border-t border-solid border-[#eadfd9] pt-[1rem]">
          <p className="product-details__price m-0 text-[2.25rem] font-bold text-burgundy">₱{price}</p>
          <div className="product-details__order-summary flex flex-col items-end gap-[0.5rem]">
            <div className="product-details__quantity flex items-center gap-[0.75rem] text-[1.25rem] font-bold text-burgundy" aria-label="Quantity">
              <button
                className={quantityButtonClasses}
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                aria-label={`Decrease quantity of ${name}`}
                disabled={quantity === 1}
              >
                −
              </button>
              <span className="product-details__quantity-value min-w-[1.25rem] text-center">{quantity}</span>
              <button
                className={quantityButtonClasses}
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label={`Increase quantity of ${name}`}
              >
                +
              </button>
            </div>
            <p className="product-details__total m-0 text-[0.95rem] text-[#737373] tabular-nums" aria-live="polite" aria-atomic="true">
              Total: <strong className="text-burgundy">₱{totalPrice}</strong>
            </p>
          </div>
        </div>
        <button
          className="product-details__button mt-[0.5rem] w-full cursor-pointer rounded-[0.5rem] border-0 bg-burgundy px-[2rem] py-[0.9rem] text-[1rem] font-bold text-white transition-[background-color,transform] duration-200 ease-[ease] hover:-translate-y-[2px] hover:bg-[#5f1515]"
          type="button"
          onClick={() => onAddToCart(product, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </section>
    </dialog>
  );
}

export default ProductDetails;
