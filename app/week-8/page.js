"use client";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";
import itemData from "./grocery-items.json";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";

export default function Page() {
  const [items, setItems] = useState(itemData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
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
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  )
}