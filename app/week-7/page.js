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
    setItems((prev) => [newItem, ...prev]);
  }

  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Managing State"
          description="Merging the functionalities developed during Week 4, 5 and 6 into a single, interactive shopping list application. The application will consist of a form for adding new items and a sortable list for displaying these items."
        />
      </header>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  )
}