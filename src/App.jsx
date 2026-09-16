import Navbar from "./Components/Navbar";
import BurgerCard from "./Components/BurgerCard";
import { burgers } from "./data/burgerData";
import black from "./assets/Burgers/black.webp";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div
        className="main-content"
        style={{ backgroundImage: `url(${black})` }}
      >
        <main className="burger-intro">
          <div className="burger-intro__content">
            <h1>Our Crazy Burgers</h1>
            <p>
              Get ready for a wild ride of flavors! Our crazy burgers are loaded
              with juicy patties, bold toppings, and irresistible sauces, all
              stacked on a perfectly toasted bun. Whether you like it cheesy, or
              extra meaty, we've got a burger that will blow your mind!
            </p>
          </div>
        </main>
        <section className="burger-grid" aria-label="Our burgers">
          {burgers.map((burger) => (
            <BurgerCard key={burger.id} {...burger} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
