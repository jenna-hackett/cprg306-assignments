"use client";
import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import itemData from "./grocery-items.json";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {

  // State to hold the list of items and the currently selected item name for fetching meal ideas.
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Handles the addition of an item to the shopping list by updating the state.
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  // Handles the selection of an item from the list, processes the item name to remove any punctuation and whitespace,
  // and updates the selected item name state for fetching meal ideas.
  const handleItemSelect = (item) => {
    const cleanName = item
      .split(",")[0] // Part before any commas.
      .replace(/[^\w\s]|_/g, "") // Remove any punctuation.
      .trim(); // Remove any whitespace.

    // Update the selected item name state with the cleaned name.
    setSelectedItemName(cleanName);
  }

  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Shopping List with Meal Ideas"
          description="Week 9 focuses on integrating Firebase Authentication. This update secures the application by requiring users to authenticate via GitHub before gaining access to the personal shopping list and meal ideas."
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