import { useState } from "react";
import logo from "../assets/Burgers/Burgerlogo.png";
import "./Navbar.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

function CartIcon() {
  return (
    <svg
      className="navbar__cart-icon"
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar__inner">
        <a className="navbar__brand" href="/" aria-label="Tasty Burger home">
          {/* Replace Burgerlogo.png with your logo filename when needed. */}
          <img src={logo} alt="Tasty Burger" />
          <span className="navbar__brand-name" aria-hidden="true">
            <span className="navbar__brand-name-tasty">Tasty</span>{" "}
            <span className="navbar__brand-name-burger">Burger</span>
          </span>
        </a>

        <div className="navbar__actions">
          <div
            className={`navbar__links ${menuOpen ? "is-open" : ""}`}
            id="primary-navigation-links"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="navbar__cart"
            href="/cart"
            aria-label="Shopping cart with 2 items"
          >
            <CartIcon />
            <span className="navbar__badge" aria-hidden="true">
              2
            </span>
          </a>

          <button
            className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation-links"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
