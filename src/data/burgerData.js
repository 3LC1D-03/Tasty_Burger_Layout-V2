import veganBurger from "../assets/Burgers/veganburger.jpg";
import ultimateBacon from "../assets/Burgers/ultimate bacon.webp";
import crispyChicken from "../assets/Burgers/crispy chicken.webp";
import blackSheep from "../assets/Burgers/blacksheep.webp";
import crispyChickenCutout from "../assets/Burgers/crispy_chicken-nobg.png";
import ultimateBaconCutout from "../assets/Burgers/ultimate_bacon-nobg.png";
import veganBurgerCutout from "../assets/Burgers/veganburger-nobg.png";
import blackSheepCutout from "../assets/Burgers/blacksheep-nobg.png";
import breakfastBurger from "../assets/Burgers/breakfast_burger.jpg";
import onionBurger from "../assets/Burgers/Onion_burger.jpg";
import juicyLucyBurger from "../assets/Burgers/juicy-lucy-burger.jpg";
import pizzaBurger from "../assets/Burgers/pizza_burger.jpg";
import mushroomBurger from "../assets/Burgers/mushroom_burger.jpg";
import chiliBurger from "../assets/Burgers/Chili_burger.webp";
import breakfastBurgerCutout from "../assets/Burgers/breakfast_burger-nobg.png";
import onionBurgerCutout from "../assets/Burgers/Onion_burger-nobg.png";
import juicyLucyBurgerCutout from "../assets/Burgers/juicy-lucy-burger-nobg.png";

// These view boxes exclude transparent padding so the hero burgers share a baseline.

export const burgers = [
  {
    id: 1,
    name: "Crispy Chicken",
    image: crispyChicken,
    heroImage: {
      src: crispyChickenCutout,
      viewBox: "21 82 412 372",
      width: 433,
      height: 577,
    },
    description: "Chicken breast, chili sauce, tomatoes, pickles, coleslaw",
    detailedDescription:
      "A crispy, golden chicken breast served with fresh tomatoes, tangy pickles, and creamy coleslaw. Finished with a flavorful chili sauce that adds just the right amount of heat. A satisfying combination of crunch, freshness, and bold flavor in every bite.",
    price: "99.15",
    rating: 5,
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    image: ultimateBacon,
    heroImage: {
      src: ultimateBaconCutout,
      viewBox: "78 71 470 242",
      width: 589,
      height: 424,
    },
    description:
      "Juicy beef patty, crispy bacon, cheddar cheese, and smoky sauce",
    detailedDescription:
      "A juicy beef patty stacked with crispy, savory bacon and melted cheddar cheese. Drizzled with a rich smoky sauce that brings all the flavors together. It's a hearty and indulgent burger made for serious bacon and beef lovers.",
    price: "129.50",
    rating: 5,
  },
  {
    id: 3,
    name: "Vegan Burger",
    image: veganBurger,
    heroImage: {
      src: veganBurgerCutout,
      viewBox: "94 211 261 247",
      width: 422,
      height: 591,
    },
    description:
      "Plant-based patty, fresh lettuce, tomatoes, pickles, and vegan sauce",
    detailedDescription:
      "A flavorful plant-based patty topped with fresh lettuce, juicy tomatoes, and tangy pickles. Finished with a smooth vegan sauce that complements the savory patty and fresh vegetables. A satisfying choice for anyone looking for a delicious burger without the meat.",
    price: "109.75",
    rating: 4,
  },
  {
    id: 4,
    name: "Black Sheep",
    image: blackSheep,
    heroImage: {
      src: blackSheepCutout,
      viewBox: "102 42 407 362",
      width: 577,
      height: 432,
    },
    description:
      "Seasoned beef patty, grilled onions, cheese, and signature sauce",
    detailedDescription:
      "A well-seasoned beef patty topped with savory grilled onions and melted cheese. Our signature sauce adds a rich, flavorful finish that ties every ingredient together. Bold, hearty, and unmistakably different, this burger is made to stand out from the crowd.",
    price: "139.25",
    rating: 4,
  },
  {
    id: 5,
    name: "Breakfast Burger",
    image: breakfastBurger,
    heroImage: {
      src: breakfastBurgerCutout,
      viewBox: "0 69 577 307",
      width: 577,
      height: 433,
    },
    description: "Beef patty, fried egg, bacon, cheddar cheese, lettuce, mayonnaise, toasted bun",
    detailedDescription: "A hearty burger made for breakfast lovers, featuring a juicy beef patty topped with crispy bacon and a freshly fried egg. Melted cheddar and creamy mayo bring everything together in a soft toasted bun.",
    price: "159.00",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Onion Burger",
    image: onionBurger,
    heroImage: {
      src: onionBurgerCutout,
      viewBox: "6 9 598 386",
      width: 612,
      height: 408,
    },
    description: "Beef patty, caramelized onions, cheddar cheese, lettuce, burger sauce, toasted bun",
    detailedDescription: "A savory beef burger loaded with sweet and flavorful caramelized onions. Cheddar cheese and creamy burger sauce balance the rich beef flavor for a simple but satisfying bite.",
    price: "139.00",
    rating: 4.0,
  },
  {
    id: 7,
    name: "Juicy Lucy",
    image: juicyLucyBurger,
    heroImage: {
      src: juicyLucyBurgerCutout,
      viewBox: "72 88 368 353",
      width: 500,
      height: 500,
    },
    description: "Cheese-stuffed beef patty, cheddar cheese, lettuce, tomato, pickles, burger sauce, toasted bun",
    detailedDescription: "A thick beef patty stuffed with melted cheese that bursts with flavor in every bite. Fresh lettuce, tomato, and pickles add balance while the signature burger sauce completes this extra-cheesy favorite.",
    price: "179.00",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Pizza Burger",
    image: pizzaBurger,
    description: "Beef patty, mozzarella cheese, pepperoni, pizza sauce, onions, toasted bun",
    detailedDescription: "A fun combination of two comfort-food classics. The juicy beef patty is topped with pepperoni, rich pizza sauce, and melted mozzarella for a burger that tastes like your favorite pizza.",
    price: "169.00",
    rating: 4.5,
  },
  {
    id: 9,
    name: "Mushroom Burger",
    image: mushroomBurger,
    description: "Beef patty, sautéed mushrooms, Swiss cheese, caramelized onions, lettuce, garlic mayo, toasted bun",
    detailedDescription: "A rich and savory burger topped with tender sautéed mushrooms and melted Swiss cheese. Caramelized onions and garlic mayo give it an earthy, creamy flavor that pairs perfectly with the beef patty.",
    price: "169.00",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Chili Burger",
    image: chiliBurger,
    description: "Beef patty, beef chili, cheddar cheese, jalapeños, onions, burger sauce, toasted bun",
    detailedDescription: "A bold burger topped with savory beef chili, melted cheddar, and sliced jalapeños. It delivers a satisfying mix of meaty, cheesy, and spicy flavors for anyone who likes a little heat.",
    price: "179.00",
    rating: 4.6,
  },
];

export const featuredBurgers = burgers.filter((burger) => burger.heroImage);
