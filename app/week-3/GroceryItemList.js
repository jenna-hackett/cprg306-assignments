
import Item from "./GroceryItem";

export default function GroceryItemList() {
  const item1 = {
    name: "Milk, 4 L 🥛",
    quantity: 1,
    category: "Dairy",
  };

  const item2 = {
  name: "Bread 🍞",
  quantity: 2,
  category: "Bakery",
  };
 
const item3 = {
  name: "Eggs, Dozen 🥚", 
  quantity: 2,
  category: "Dairy",
  };
 
const item4 = {
  name: "Bananas 🍌",
  quantity: 6,
  category: "Produce",
  };
 
const item5 = {
  name: "Broccoli 🥦",
  quantity: 3,
  category: "Produce",
  };
 
const item6 = {
  name: "Chicken Breasts, 1 kg 🍗",
  quantity: 1,
  category: "Meat",
  };
 
const item7 = {
  name: "Pasta Sauce 🍝",
  quantity: 3,
  category: "Canned Goods",
  };
 
const item8 = {
  name: "Spaghetti, 454 g 🍝",
  quantity: 2,
  category: "Dry Goods",
  };
 
const item9 = {
  name: "Toilet Paper, 12 pack 🧻",
  quantity: 1,
  category: "Household",
  };
 
const item10 = {
  name: "Paper Towels, 6 pack",
  quantity: 1,
  category: "Household",
  };
 
const item11 = {
  name: "Dish Soap 🍽️",
  quantity: 1,
  category: "Household",
  };
 
const item12 = {
  name: "Hand Soap 🧼",
  quantity: 4,
  category: "Household",
  };

// Place items in an array to map through
const groceryItems = [
  item1, item2, item3, 
  item4, item5, item6, 
  item7, item8, item9, 
  item10, item11, item12
];

  return (
    <section>
      <h2 className="text-xl font-bold p-4 text-center">Grocery Items</h2>
      <ul>
        {groceryItems.map((item) => (
          <Item 
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}