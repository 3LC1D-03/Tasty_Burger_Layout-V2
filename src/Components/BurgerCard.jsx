import { useState } from "react";

function BurgerCard({ image, name, description, price, rating, onSelect }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const safeRating = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)));

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect?.();
    }
  };

  return (
    <article
      className={`burger-card flex h-full min-w-0 flex-col overflow-hidden rounded-[6px] border border-solid border-[#e6e6e6] bg-white transition-[transform,box-shadow] duration-[180ms] ease-[ease] hover:-translate-y-[4px] hover:shadow-[0_8px_18px_rgba(43,26,18,0.1)] ${onSelect ? "cursor-pointer focus-visible:outline-3 focus-visible:outline-[#e30613] focus-visible:outline-offset-3" : ""}`}
      role={onSelect ? "button" : undefined}
      aria-haspopup={onSelect ? "dialog" : undefined}
      aria-label={onSelect ? `View ${name} details` : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={onSelect ? handleKeyDown : undefined}
    >
      <img className="burger-card__image block h-[210px] w-full shrink-0 object-cover phone:h-[190px]" src={image} alt={name} />

      <div className="burger-card__content flex min-h-[190px] flex-1 flex-col p-[16px]">
        <div className="burger-card__rating-row flex min-h-[24px] items-center justify-between">
          <div
            className="burger-card__rating flex gap-[2px] font-georgia text-[17px] leading-none text-[#e4a51c]"
            aria-label={`${safeRating} out of 5 stars`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} aria-hidden="true">
                {index < safeRating ? "★" : "☆"}
              </span>
            ))}
          </div>

          <button
            className={`burger-card__favorite inline-grid size-[28px] cursor-pointer place-items-center border-0 bg-transparent p-0 font-georgia text-[24px] leading-none transition-[color,transform] duration-[180ms] ease-[ease] hover:scale-[1.08] hover:text-[#e30613] focus-visible:text-[#e30613] focus-visible:outline-2 focus-visible:outline-[#e30613] focus-visible:outline-offset-2 ${isFavorite ? "is-active text-[#e30613]" : "text-[#777]"}`}
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

        <h2 className="burger-card__name mx-0 mt-[12px] mb-[6px] font-burger text-[20px] leading-[1.1] font-semibold tracking-[0.6px] text-left text-[#292929] [overflow-wrap:anywhere]">{name}</h2>
        <p className="burger-card__ingredients m-0 line-clamp-3 font-narrow text-[15px] leading-[1.4] tracking-[0.35px] text-left text-[#737373]">{description}</p>
        <span className="burger-card__price mt-auto self-start rounded-[3px] bg-[#542f25] px-[11px] py-[7px] font-narrow text-[14px] leading-none font-bold text-burger-gold">₱{price}</span>
      </div>
    </article>
  );
}

export default BurgerCard;
