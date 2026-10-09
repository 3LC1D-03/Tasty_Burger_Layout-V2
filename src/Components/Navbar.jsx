import { useState } from "react";
import logo from "../assets/Burgers/Burgerlogo.png";

const links = [
  { label: "About", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

function CartIcon() {
  return (
    <svg
      className="navbar__cart-icon size-[19px] fill-none stroke-current stroke-[1.45] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Shopping cart"
    >
      <path d="M3 5h2l1.5 10h11L20 8H6" />
      <circle cx="9" cy="19" r="1.25" />
      <circle cx="17" cy="19" r="1.25" />
    </svg>
  );
}

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar w-full border-0 border-b border-solid border-[#ececec] bg-white text-[#292929]" aria-label="Primary navigation">
      <div className="navbar__inner mx-auto flex min-h-[76px] w-[calc(100%-40px)] items-center justify-between gap-[32px] compact-nav:min-h-[68px] compact-nav:w-[calc(100%-28px)]">
        <a className="navbar__brand inline-flex shrink-0 items-center gap-[10px] no-underline focus-visible:outline-2 focus-visible:outline-[#e30613] focus-visible:outline-offset-4" href="/" aria-label="Tasty Burger home">
          {/* Replace Burgerlogo.png with your logo filename when needed. */}
          <img className="block h-[51px] w-auto object-contain compact-nav:h-[45px]" src={logo} alt="Tasty Burger" />
          <span className="navbar__brand-name font-burger text-[22px] leading-none font-semibold tracking-[0.2px] whitespace-nowrap text-[#292929] uppercase compact-nav:text-[18px]" aria-hidden="true">
            <span className="text-[#e30613]">Tasty</span>{" "}
            <span className="text-[#292929]">Burger</span>
          </span>
        </a>

        <div className="navbar__actions flex items-center gap-[26px] compact-nav:gap-[18px] tablet-nav:gap-[16px]">
          <div
            className={`navbar__links flex items-center gap-[50px] tablet-nav:gap-[16px] compact-nav:absolute compact-nav:inset-x-0 compact-nav:top-[68px] compact-nav:z-10 compact-nav:flex-col compact-nav:items-stretch compact-nav:gap-0 compact-nav:overflow-hidden compact-nav:border-0 compact-nav:border-b compact-nav:border-solid compact-nav:bg-white compact-nav:[transition:max-height_220ms_ease,opacity_180ms_ease,border-color_180ms_ease] ${menuOpen ? "is-open compact-nav:max-h-[240px] compact-nav:border-[#ececec] compact-nav:opacity-100" : "compact-nav:max-h-0 compact-nav:border-transparent compact-nav:opacity-0"}`}
            id="primary-navigation-links"
          >
            {links.map((link) => (
              <a className="font-nav text-[20px] leading-none font-semibold tracking-[0.2px] text-[#292929] uppercase no-underline transition-colors duration-[180ms] ease-[ease] hover:text-[#e30613] focus-visible:text-[#e30613] compact-nav:border-0 compact-nav:border-t compact-nav:border-solid compact-nav:border-[#f2f2f2] compact-nav:px-[24px] compact-nav:py-[16px]" key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="navbar__cart relative inline-flex shrink-0 text-[#292929] no-underline hover:text-[#e30613] focus-visible:text-[#e30613] focus-visible:outline-2 focus-visible:outline-[#e30613] focus-visible:outline-offset-4"
            href="/cart"
            aria-label={`Shopping cart with ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            aria-current={window.location.pathname.replace(/\/$/, "") === "/cart" ? "page" : undefined}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="navbar__badge absolute -top-[8px] -right-[9px] grid h-[14px] min-w-[14px] place-items-center rounded-full bg-[#e30613] px-[2px] py-0 font-arial text-[9px] leading-none font-bold text-white" aria-hidden="true">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </a>

          <button
            className={`navbar__toggle hidden size-[38px] cursor-pointer rounded-[3px] border border-solid border-[#e5e5e5] bg-white p-[8px] focus-visible:outline-2 focus-visible:outline-[#e30613] focus-visible:outline-offset-4 compact-nav:block ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation-links"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className={`my-[4px] block h-[2px] bg-[#292929] transition-[transform,opacity] duration-[180ms] ease-[ease] ${menuOpen ? "[transform:translateY(6px)_rotate(45deg)]" : ""}`} />
            <span className={`my-[4px] block h-[2px] bg-[#292929] transition-[transform,opacity] duration-[180ms] ease-[ease] ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`my-[4px] block h-[2px] bg-[#292929] transition-[transform,opacity] duration-[180ms] ease-[ease] ${menuOpen ? "[transform:translateY(-6px)_rotate(-45deg)]" : ""}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
