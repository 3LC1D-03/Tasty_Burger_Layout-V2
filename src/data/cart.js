export const CART_STORAGE_KEY = "tasty-burger-cart";

export function readCart(catalog) {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    const items = new Map();
    saved.forEach((item) => {
      if (item && catalog.some((product) => product.id === item.id) &&
          Number.isSafeInteger(item.quantity) && item.quantity > 0) {
        items.set(item.id, { id: item.id, quantity: item.quantity });
      }
    });
    return [...items.values()];
  } catch {
    return [];
  }
}

export function addCartItem(cart, id, quantity) {
  if (!Number.isSafeInteger(quantity) || quantity < 1) return cart;
  const existing = cart.find((item) => item.id === id);
  if (!existing) return [...cart, { id, quantity }];
  return cart.map((item) => item.id === id
    ? { ...item, quantity: item.quantity + quantity }
    : item);
}

export function priceInCents(price) {
  return Math.round(Number(price) * 100);
}

export function formatMoney(cents) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(cents / 100);
}
