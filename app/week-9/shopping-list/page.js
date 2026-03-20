"use client";
import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext"; 
import { useRouter } from "next/navigation";
import itemData from "./grocery-items.json"; 
// Shared Components.
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import AccessDenied from "@/app/components/AccessDenied";
import UserNavigation from "@/app/components/UserNavigation";
// Week-Specific Components.
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";

  
// TODO:
// Add a profile page that displays the user's profile information(?)
// Add other OAuth providers such as Google(?)

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  const handleItemSelect = (item) => setSelectedItemName(cleanItemName(item));

 // Access Control
  if (!user) {
    return <AccessDenied loginPath="/week-9" />;
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <header>
        <SiteHeader />
        <PageHeader 
          title="Shopping List with Meal Ideas"
          description="Manage your grocery items and get meal ideas based on your shopping list."
        />
        {/* Sign Out Button */}
        <div className="absolute top-20 right-5 z-50">
          <button 
            onClick={handleSignOut}
            className="bg-pink-900 text-white font-bold py-2 px-4 rounded-full border-2 border-rose-400 hover:bg-pink-600 transition-all shadow-lg text-sm cursor-pointer"
          >
            Sign Out
          </button>
        </div>
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