"use client";
import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext"; 
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";

// Note: If these files are in the 'week-9' folder, ensure these paths are correct
import itemData from "./grocery-items.json"; 
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Access Control
  if (!user) {
    return (
      <main className="min-h-screen bg-black">
        <SiteHeader />
        <div className="flex flex-col items-center justify-center mt-20 p-6">
          <div className="bg-pink-900 border-4 border-rose-400 rounded-lg p-8 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-pink-200 mb-4">Access Denied</h2>
            <p className="text-white mb-6">You must be logged in to view the shopping list.</p>
            <Link href="/week-9" className="bg-pink-600 text-white font-bold py-2 px-6 rounded-md border-2 border-rose-400">
              Go to Login Page
            </Link>
          </div>
        </div>
      </main>
    );
  }

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  const handleItemSelect = (item) => {
    const cleanName = item
      .split(",")[0] 
      .replace(/[^\w\s]|_/g, "") 
      .trim(); 

    setSelectedItemName(cleanName);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header>
        <SiteHeader />
        <PageHeader 
          title="Shopping List with Meal Ideas"
          description="Manage your grocery items and get meal ideas based on your shopping list."
        />
      </header>

      <div className="flex flex-col md:flex-row gap-10 p-5">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}