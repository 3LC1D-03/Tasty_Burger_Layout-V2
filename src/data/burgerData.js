import veganBurger from "../assets/Burgers/veganburger.jpg";
import ultimateBacon from "../assets/Burgers/ultimate bacon.webp";
import crispyChicken from "../assets/Burgers/crispy chicken.webp";
import blackSheep from "../assets/Burgers/blacksheep.webp";

export const burgers = [
  {
    id: 1,
    name: "Crispy Chicken",
    image: crispyChicken,
    description: "Chicken breast, chili sauce, tomatoes, pickles, coleslaw",
    price: "99.15",
    rating: 5,
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    image: ultimateBacon,
    description: "Juicy beef patty, crispy bacon, cheddar cheese, and smoky sauce",
    price: "129.50",
    rating: 5,
  },
  {
    id: 3,
    name: "Vegan Burger",
    image: veganBurger,
    description: "Plant-based patty, fresh lettuce, tomatoes, pickles, and vegan sauce",
    price: "109.75",
    rating: 4,
  },
  {
    id: 4,
    name: "Black Sheep",
    image: blackSheep,
    description: "Seasoned beef patty, grilled onions, cheese, and signature sauce",
    price: "139.25",
    rating: 4,
  },
];
