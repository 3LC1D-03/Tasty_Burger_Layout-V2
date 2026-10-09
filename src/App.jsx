import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import BurgerCard from "./Components/BurgerCard";
import BurgerHero from "./Components/BurgerHero";
import ProductDetails from "./Components/ProductDetails";
import CartPage from "./Components/CartPage";
import { burgers, featuredBurgers } from "./data/burgerData";
import { addCartItem, CART_STORAGE_KEY, readCart } from "./data/cart";
import black from "./assets/Burgers/black.webp";

function App() {
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [cart, setCart] = useState(() => readCart(burgers));
  const [cartNotice, setCartNotice] = useState(null);
  const [showAllBurgers, setShowAllBurgers] = useState(false);
  const visibleBurgers = showAllBurgers ? burgers : burgers.slice(0, 8);
  const isCartPage = window.location.pathname.replace(/\/$/, "") === "/cart";
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartProducts = cart.map((item) => ({
    ...burgers.find((burger) => burger.id === item.id),
    quantity: item.quantity,
  }));

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // The cart still works for this visit if browser storage is unavailable.
    }
  }, [cart]);

  useEffect(() => {
    if (!cartNotice) return;
    const timer = window.setTimeout(() => setCartNotice(null), 3000);
    return () => window.clearTimeout(timer);
  }, [cartNotice]);

  const addToCart = (product, quantity) => {
    setCart((current) => addCartItem(current, product.id, quantity));
    setCartNotice((current) => ({
      id: (current?.id ?? 0) + 1,
      message: `${quantity} ${product.name} added to your cart.`,
    }));
    setSelectedBurger(null);
  };

  const changeQuantity = (id, quantity) => {
    if (!Number.isSafeInteger(quantity) || quantity < 1) return;
    setCart((current) => current.map((item) => item.id === id
      ? { ...item, quantity }
      : item));
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="app min-h-svh bg-white text-[#292929]">
      <Navbar cartCount={cartCount} />
      {isCartPage ? (
        <CartPage
          items={cartProducts}
          onQuantityChange={changeQuantity}
          onRemove={removeFromCart}
        />
      ) : (
        <div
          className="main-content"
          style={{ backgroundImage: `url(${black})` }}
        >
          <BurgerHero
            products={featuredBurgers}
            onSelect={setSelectedBurger}
            isModalOpen={selectedBurger !== null}
          />
          <main className="burger-intro flex justify-center px-[24px] pt-[120px] pb-[80px] text-center phone:px-[20px] phone:pt-[80px] phone:pb-[56px]">
            <div className="burger-intro__content w-[min(100%,760px)]">
              <h1 className="m-0 mb-[24px] font-burger text-[clamp(34px,5vw,58px)] leading-none font-semibold tracking-[0.2px] text-[#e30613] uppercase phone:mb-[18px]">Our Crazy Burgers</h1>
              <p className="mx-auto my-0 font-arial text-[clamp(16px,1.8vw,21px)] leading-[1.55] font-medium tracking-[0.15px] text-[#ededed]">
                Get ready for a wild ride of flavors! Our crazy burgers are
                loaded with juicy patties, bold toppings, and irresistible
                sauces, all stacked on a perfectly toasted bun. Whether you like
                it cheesy, or extra meaty, we've got a burger that will blow
                your mind!
              </p>
            </div>
          </main>
          <section id="burger-grid" className="burger-grid mx-auto my-0 grid w-[min(calc(100%-48px),1200px)] grid-cols-4 gap-[32px] px-0 pt-0 pb-[80px] tablet-menu:grid-cols-2 phone:w-[min(calc(100%-40px),420px)] phone:grid-cols-1 phone:gap-[22px] phone:pb-[56px]" aria-label="Our burgers">
            {visibleBurgers.map((burger) => (
              <BurgerCard
                key={burger.id}
                {...burger}
                onSelect={() => setSelectedBurger(burger)}
              />
            ))}
            {!showAllBurgers && burgers.length > 8 && (
              <div className="burger-grid__actions col-span-full text-right">
                <button
                  className="burger-grid__view-all min-h-[48px] cursor-pointer rounded-[8px] border border-solid border-white/12 bg-burgundy px-[32px] py-[14px] font-arial text-[16px] leading-[1.2] font-bold text-white transition-colors duration-[180ms] ease-[ease] hover:bg-[#a12626] focus-visible:outline-3 focus-visible:outline-burger-gold focus-visible:outline-offset-4"
                  type="button"
                  aria-controls="burger-grid"
                  onClick={() => setShowAllBurgers(true)}
                >
                  View all
                </button>
              </div>
            )}
          </section>
        </div>
      )}
      {selectedBurger && (
        <ProductDetails
          key={selectedBurger.id}
          product={selectedBurger}
          onClose={() => setSelectedBurger(null)}
          onAddToCart={addToCart}
        />
      )}
      {cartNotice && (
        <div className="cart-notice fixed right-[24px] bottom-[24px] z-20 box-border flex max-w-[calc(100%-48px)] animate-cart-notice flex-wrap items-center gap-[12px] rounded-[14px] border border-solid border-[#eadfd9] bg-[#fffdfb] px-[20px] py-[16px] font-arial text-[14px] leading-[1.5] text-left text-[#403733] shadow-[0_8px_32px_rgb(0_0_0/20%)] motion-reduce:animate-cart-notice-fade" key={cartNotice.id}>
          <p role="status">{cartNotice.message}</p>
          <a className="font-bold text-burgundy no-underline focus-visible:outline-2 focus-visible:outline-[#d49a2a] focus-visible:outline-offset-3" href="/cart">View cart →</a>
        </div>
      )}
    </div>
  );
}

export default App;
