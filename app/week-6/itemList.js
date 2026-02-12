
import items from './items.json'; 
import Item from './item.js';


export default function ItemList() {
  // Sort the items by category
  const sortedItems = [...items].sort((a, b) => 
    a.category.localeCompare(b.category)
  );

  return (
    <main className="p-4 text-center">
      <ul className="list-none p-0">
        {sortedItems.map((item, index) => {
          // Show category header if it's the first item OR if the category is different from the previous one
          const isFirstOfCategory = index === 0 || item.category !== sortedItems[index - 1].category;

          return (
            <div key={item.id}>
              {/* Render the category title when it's the first of its kind */}
              {isFirstOfCategory && (
                <section>
                  <h2 className="text-xl font-bold text-pink-700 mb-4 mt-2">
                    {item.category}
                  </h2>
                </section>
              )}

              {/* Render the Item component */}
              <Item 
                name={item.name} 
                quantity={item.quantity} 
              />
            </div>
        );
      })}
      </ul>
    </main>
  );
}