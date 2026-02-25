
import Item from "./GroceryItem";

export default function GroceryItemList({ items }) {
  
  const itemsCopy = [...items];

  return (
    <section>
      <h2 className="text-2xl font-bold p-4 text-center">Grocery Items</h2>
      <ul>
        {itemsCopy.map((item) => (
          <Item 
            key={item.name}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  )
}