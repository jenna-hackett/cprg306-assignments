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
          title="Week 7"
          description="Managing State"
        />
      </header>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  )
}