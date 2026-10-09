import { formatMoney, priceInCents } from "../data/cart";
import black from "../assets/Burgers/black.webp";

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burger-gold";

function ArrowIcon({ back = false }) {
  return (
    <svg
      className="size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={back ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14m-6-6 6 6-6 6"} />
    </svg>
  );
}

function CartPage({ items, onQuantityChange, onRemove }) {
  const subtotal = items.reduce(
    (sum, item) => sum + priceInCents(item.price) * item.quantity,
    0,
  );

  return (
    <main
      className="min-h-[calc(100svh-76px)] bg-[#24211f] bg-[image:linear-gradient(rgb(20_14_11/28%),rgb(20_14_11/28%)),var(--cart-background)] bg-repeat px-5 py-10 text-left font-[Arial,sans-serif] text-[#292929] scheme-light sm:px-8"
      style={{ "--cart-background": `url(${black})` }}
    >
      <div className="mx-auto max-w-[1500px]">
        <a
          className={`mb-7 inline-flex items-center gap-2 text-sm font-bold text-cream no-underline hover:text-burger-gold ${focusStyle}`}
          href="/"
        >
          <ArrowIcon back /> Back to the shop
        </a>

        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-burger-gold uppercase">
              Good taste. Great choices.
            </p>
            <h1 className="m-0 font-burger text-5xl leading-none tracking-wide text-cream uppercase sm:text-6xl">
              Your burger cart
            </h1>
            <p className="mt-4 text-base text-[#e0d8d1]">
              A little closer to your next favorite bite.
            </p>
          </div>
        </header>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.8fr)_minmax(320px,1fr)] lg:items-start">
          <section
            aria-labelledby="cart-items-heading"
            className="min-w-0 rounded-3xl bg-[#fffdfb] p-5 shadow-xl sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between gap-3 border-0 border-b border-solid border-[#eadfd9] pb-5">
              <h2
                id="cart-items-heading"
                className="m-0 font-burger text-2xl tracking-wide text-[#292929] uppercase"
              >
                The delicious lineup
              </h2>
              <span className="text-sm text-[#75675f]">
                {items.length} {items.length === 1 ? "selection" : "selections"}
              </span>
            </div>

            {items.length === 0 ? (
              <div className="flex min-h-80 flex-col items-center justify-center px-3 py-10 text-center">
                <span className="mb-5 grid size-20 place-items-center rounded-2xl bg-[#f5ede4] text-burgundy">
                  <svg
                    className="size-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M3 10a9 9 0 0 1 18 0H3Zm0 4h18M4 18h16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM2 12l4 2 4-2 4 2 4-2 4 2" />
                  </svg>
                </span>
                <h3 className="m-0 font-burger text-3xl font-normal uppercase">
                  Your cart is craving a burger
                </h3>
                <p className="mt-3 max-w-80 text-sm leading-relaxed text-[#75675f]">
                  Pick your favorites from the menu and we’ll keep them right
                  here.
                </p>
                <a
                  className={`mt-6 inline-flex items-center gap-3 rounded-xl bg-burgundy px-6 py-3 text-sm font-bold text-white no-underline hover:bg-[#5f1515] ${focusStyle}`}
                  href="/"
                >
                  Explore our burgers <ArrowIcon />
                </a>
              </div>
            ) : (
              <ul className="m-0 grid list-none gap-4 p-0">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="grid min-w-0 grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-2xl border border-solid border-[#eadfd9] bg-[#fbf7f2] p-3 sm:grid-cols-[124px_minmax(0,1fr)] sm:p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-full rounded-xl object-cover sm:h-[132px]"
                    />
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="m-0 font-burger text-xl leading-tight font-normal tracking-wide uppercase sm:text-2xl">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className={`grid size-7 shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-xl text-[#75675f] hover:bg-[#efe2d8] hover:text-burgundy ${focusStyle}`}
                        >
                          ×
                        </button>
                      </div>
                      <p className="mt-2 text-sm font-bold text-burgundy">
                        {formatMoney(priceInCents(item.price))}{" "}
                        <span className="font-normal text-[#75675f]">each</span>
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div
                          className="flex items-center gap-2 rounded-full border border-solid border-[#dfd1c8] bg-white p-1"
                          aria-label={`Quantity of ${item.name}`}
                        >
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${item.name}`}
                            disabled={item.quantity === 1}
                            onClick={() =>
                              onQuantityChange(item.id, item.quantity - 1)
                            }
                            className={`grid size-8 cursor-pointer place-items-center rounded-full border-0 bg-[#f5ede4] text-lg text-burgundy hover:bg-[#ead9cb] disabled:cursor-not-allowed disabled:opacity-40 ${focusStyle}`}
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center text-sm font-bold tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.name}`}
                            onClick={() =>
                              onQuantityChange(item.id, item.quantity + 1)
                            }
                            className={`grid size-8 cursor-pointer place-items-center rounded-full border-0 bg-burgundy text-lg text-white hover:bg-[#5f1515] ${focusStyle}`}
                          >
                            +
                          </button>
                        </div>
                        <p
                          className="text-base font-bold text-burgundy tabular-nums"
                          aria-label={`Total for ${item.name}`}
                        >
                          {formatMoney(
                            priceInCents(item.price) * item.quantity,
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside
            aria-label="Checkout"
            className="grid min-w-0 gap-5 lg:sticky lg:top-6"
          >
            <section
              className="rounded-3xl bg-cream p-6 shadow-xl sm:p-7"
              aria-labelledby="order-summary-heading"
            >
              <p className="mb-3 text-xs font-bold tracking-[0.18em] text-burgundy uppercase">
                All the good stuff
              </p>
              <h2
                id="order-summary-heading"
                className="m-0 font-burger text-3xl tracking-wide text-[#292929] uppercase"
              >
                Order summary
              </h2>
              <ul
                aria-label="Receipt items"
                className="mb-0 mt-6 grid list-none gap-5 border-0 border-y border-dashed border-[#dfd1c8] px-0 py-6 text-sm"
              >
                {items.length === 0 ? (
                  <li className="text-[#75675f]">
                    burger choices will appear here.
                  </li>
                ) : (
                  items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="font-bold leading-snug">{item.name}</p>
                        <p className="mt-1 text-xs text-[#75675f]">
                          {item.quantity} ×{" "}
                          {formatMoney(priceInCents(item.price))}
                        </p>
                      </div>
                      <span className="shrink-0 font-bold tabular-nums">
                        {formatMoney(priceInCents(item.price) * item.quantity)}
                      </span>
                    </li>
                  ))
                )}
              </ul>
              <dl className="mb-0 mt-6 grid gap-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-[#75675f]">Subtotal</dt>
                  <dd className="m-0 font-bold tabular-nums">
                    {formatMoney(subtotal)}
                  </dd>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 border-0 border-t border-solid border-[#dfd1c8] pt-5">
                  <dt className="font-bold">Total</dt>
                  <dd
                    className="m-0 text-3xl font-bold text-burgundy tabular-nums"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {formatMoney(subtotal)}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                disabled
                className="mt-7 w-full cursor-not-allowed rounded-xl border-0 bg-burgundy px-5 py-4 text-base font-bold text-white opacity-60"
              >
                Checkout coming soon
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
