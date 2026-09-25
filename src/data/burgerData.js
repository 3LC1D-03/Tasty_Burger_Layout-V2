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
    detailedDescription:
      "A crispy, golden chicken breast served with fresh tomatoes, tangy pickles, and creamy coleslaw. Finished with a flavorful chili sauce that adds just the right amount of heat. A satisfying combination of crunch, freshness, and bold flavor in every bite.",
    price: "99.15",
    rating: 5,
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    image: ultimateBacon,
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
    description:
      "Seasoned beef patty, grilled onions, cheese, and signature sauce",
    detailedDescription:
      "A well-seasoned beef patty topped with savory grilled onions and melted cheese. Our signature sauce adds a rich, flavorful finish that ties every ingredient together. Bold, hearty, and unmistakably different, this burger is made to stand out from the crowd.",
    price: "139.25",
    rating: 4,
  },
];
