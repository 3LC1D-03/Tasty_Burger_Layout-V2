import { useEffect, useState } from "react";
import woodTable from "../assets/Burgers/woodtable.jpg";

function ArrowIcon({ direction }) {
  return (
    <svg className="size-[20px] stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={direction === "left" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"} />
    </svg>
  );
}

function BurgerHero({ products, onSelect, isModalOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(() => !document.hidden);
  const isRotating = !prefersReducedMotion && !isHovered && !hasFocus &&
    !isModalOpen && isPageVisible && products.length > 1;

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };
    const handleVisibilityChange = () => setIsPageVisible(!document.hidden);
    motionPreference.addEventListener("change", handleMotionChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      motionPreference.removeEventListener("change", handleMotionChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isRotating) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isRotating, products.length]);

  const changeSlide = (direction) => {
    setActiveIndex((current) =>
      (current + direction + products.length) % products.length,
    );
  };

  if (products.length === 0) return null;
  const activeProduct = products[activeIndex];

  return (
    <section
      className="burger-hero relative isolate box-border m-0 h-[clamp(640px,82svh,860px)] w-full overflow-hidden border-0 bg-[#17130f] bg-[image:linear-gradient(90deg,rgb(12_10_8/45%),transparent_65%),var(--hero-table)] bg-cover bg-center bg-no-repeat text-left text-cream shadow-[0_20px_48px_rgb(0_0_0/22%)] phone:h-[clamp(740px,92svh,820px)] phone:bg-[image:linear-gradient(0deg,#17130f_32%,transparent_60%),var(--hero-table)] phone:bg-[length:100%_100%,auto_62%] phone:bg-[position:center,center_top] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-burger-gold [&_button:focus-visible]:outline-offset-4"
      style={{ "--hero-table": `url(${woodTable})` }}
      aria-label="Featured burgers"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="burger-hero__stage pointer-events-none absolute top-[12%] right-[5%] bottom-[20%] z-1 w-1/2 before:absolute before:right-[12%] before:-bottom-[18px] before:left-[12%] before:h-[36px] before:rounded-full before:bg-[rgb(25_12_5/55%)] before:blur-[16px] before:content-[''] phone:top-[6%] phone:right-[8%] phone:bottom-auto phone:h-[40%] phone:w-[84%]" aria-hidden="true">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`burger-hero__slide absolute inset-0 transition-[visibility] duration-0 motion-reduce:transition-none ${index === activeIndex ? "is-active visible z-1 delay-0" : "invisible delay-[650ms]"}`}
          >
            <svg
              className={`burger-hero__image block h-full w-full overflow-visible drop-shadow-[0_16px_16px_rgb(0_0_0/28%)] transition-[opacity,transform] duration-[650ms] ease-[ease] motion-reduce:transition-none ${index === activeIndex ? "opacity-100 [transform:translateX(0)_scale(1)]" : "opacity-0 [transform:translateX(60px)_scale(0.96)]"}`}
              viewBox={product.heroImage.viewBox}
              preserveAspectRatio="xMidYMax meet"
              focusable="false"
            >
              <image
                href={product.heroImage.src}
                width={product.heroImage.width}
                height={product.heroImage.height}
              />
            </svg>
          </div>
        ))}
      </div>

      <div
        className="burger-hero__info absolute inset-0 z-2 box-border flex items-center px-[clamp(24px,4vw,80px)] pt-[40px] pb-[104px] compact-hero:px-[24px] phone:items-end phone:pt-[20px] phone:pb-[100px]"
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${products.length}: ${activeProduct.name}`}
        aria-live={isRotating ? "off" : "polite"}
        aria-atomic="true"
      >
        <div className="burger-hero__content box-border w-[min(44%,620px)] [text-shadow:0_2px_8px_rgb(0_0_0/35%)] phone:w-full">
          <p className="burger-hero__eyebrow m-0 mb-[20px] font-arial text-[14px] leading-[1.5] font-bold tracking-[2px] text-burger-gold uppercase phone:mb-[12px] phone:text-[12px]">Big bites. Bold flavors.</p>
          <h2 className="burger-hero__name m-0 mb-[20px] font-burger text-[clamp(46px,6vw,96px)] leading-[1.03] font-semibold tracking-[0.4px] text-cream uppercase phone:mb-[14px] phone:text-[clamp(36px,10vw,46px)]">{activeProduct.name}</h2>
          <p className="burger-hero__description m-0 font-arial text-[clamp(18px,1.5vw,22px)] leading-[1.6] text-[#f1e5dc] phone:text-[17px]">{activeProduct.description}</p>
          <div className="burger-hero__product-actions mt-[28px] flex flex-wrap items-center gap-[16px] phone:mt-[20px] phone:gap-[12px]">
            <button
              className="burger-hero__view inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-[12px] rounded-[8px] border border-solid border-white/12 bg-burgundy px-[18px] py-[12px] font-arial text-[17px] leading-[1.2] font-bold text-white transition-colors duration-[180ms] ease-[ease] hover:bg-[#a12626] motion-reduce:transition-none"
              type="button"
              onClick={() => onSelect(activeProduct)}
              aria-haspopup="dialog"
              aria-label={`Get Now: ${activeProduct.name}`}
            >
              Get Now <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>

      <div className="burger-hero__footer absolute right-[clamp(24px,4vw,80px)] bottom-[28px] left-[clamp(24px,4vw,80px)] z-3 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-[12px] compact-hero:right-[24px] compact-hero:left-[24px] phone:right-[16px] phone:bottom-[20px] phone:left-[16px]">
        <span className="burger-hero__counter col-start-1 row-start-1 justify-self-start font-arial text-[16px] leading-none font-bold tracking-[2px] text-cream tabular-nums phone:hidden" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="text-[12px] text-[#c6b8ad]"> / {String(products.length).padStart(2, "0")}</span>
        </span>
        <div className="burger-hero__controls col-start-2 row-start-1 flex items-center gap-[8px] justify-self-center phone:justify-center phone:gap-[6px]" aria-label="Slideshow controls">
          <button
            className="burger-hero__control grid size-[44px] cursor-pointer place-items-center rounded-full border border-solid border-white/25 bg-[rgb(38_24_19/75%)] p-[10px] text-cream transition-colors duration-[180ms] ease-[ease] hover:bg-burgundy motion-reduce:transition-none"
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous burger"
          >
            <ArrowIcon direction="left" />
          </button>
          <div className="burger-hero__dots flex items-center">
            {products.map((product, index) => (
              <button
                key={product.id}
                className={`burger-hero__dot grid h-[44px] w-[28px] cursor-pointer place-items-center border-0 bg-transparent p-0 before:size-[7px] before:rounded-full before:content-[''] before:transition-[background-color,transform] before:duration-[180ms] before:ease-[ease] motion-reduce:before:transition-none phone:w-[24px] ${index === activeIndex ? "is-active before:bg-burger-gold before:scale-[1.4]" : "before:bg-[#c6b8ad]"}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${product.name}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
          <button
            className="burger-hero__control grid size-[44px] cursor-pointer place-items-center rounded-full border border-solid border-white/25 bg-[rgb(38_24_19/75%)] p-[10px] text-cream transition-colors duration-[180ms] ease-[ease] hover:bg-burgundy motion-reduce:transition-none"
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next burger"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BurgerHero;
