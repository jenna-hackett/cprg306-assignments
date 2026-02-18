
"use client";
import { useState } from "react";
import Item from './item.js';


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items by category
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    }
    return a.category.localeCompare(b.category, undefined, { sensitivity: "base" });
  });

  const btn = "px-3 py-1 rounded-md border border-rose-400 text-white transition-colors";
  const active = "bg-pink-700";
  const inactive = "bg-pink-900 hover:bg-pink-800";

  
return (
    <main className="p-4">
      <div className="flex gap-2 justify-center mb-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`${btn} ${sortBy === "name" ? active : inactive}`}
          aria-pressed={sortBy === "name"}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`${btn} ${sortBy === "category" ? active : inactive}`}
          aria-pressed={sortBy === "category"}
        >
          Sort by Category
        </button>
      </div>

      <ul className="list-none p-0">
        {sortedItems.map((item, index) => {
          const showHeader = sortBy === "category" &&
          (index === 0 || item.category !== sortedItems[index - 1].category);

          return (
            <div key={item.id}>
              {showHeader && (
                <h2 className="text-xl font-bold text-pink-700 mb-4 mt-2 text-center">
                  {item.category}
                </h2>
              )}

              <Item
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            </div>
          );
        })}
      </ul>
    </main>
  );
}