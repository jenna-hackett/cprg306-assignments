"use client";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";
import itemData from "./grocery-items.json";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  const handleItemSelect = (item) => {
    const cleanName = item
      .split(",")[0] // Get the part before any comma
      .replace(/[^\w\s]|_/g, "") // Remove any punctuation
      .trim(); // Remove any  whitespace

    setSelectedItemName(cleanName);
  }

  return (
    <main>

      <header>
        <SiteHeader />
        <PageHeader 
          title="Fetching Data"
          description="In the Week 8 assignment, functionality is extended by integrating third-party APIs to suggest meal ideas based on the items in the user's shopping list. This involves fetching data from an external API, handling asynchronous operations, and updating the UI accordingly."
        />
      </header>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10 p-5">
        {/* Add Item and Item List */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas */}
        <div className="flex-1">
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>

    </main>
  )
}