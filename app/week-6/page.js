"use client";
import { useState } from "react";
import itemData from "./items.json";
import NewItem from "./newItem.js";
import ItemList from "./itemList.js";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

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
          title="Form Interactivity"
          description="This page allows the user to add a new item to the grocery shopping list. Once the user has added an item they are able to see it reflected in the list below."
        />
      </header>
      
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}