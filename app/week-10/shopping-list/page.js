"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext"; 
import { getItems, addItem } from "../_services/shopping-list-service";
import { cleanItemName } from "../../utils/item-utils";
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
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      getItems(user.uid).then(setItems).catch(console.error);
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { ...newItem, id: newItemId }]);
    }
  };

  const handleItemSelect = (item) => setSelectedItemName(cleanItemName(item));

  if (!user) return <AccessDenied loginPath="/week-10" />;

  return (
    <main className="relative min-h-screen bg-black text-white">
      <header>
        <SiteHeader />
        <PageHeader title="Cloud Shopping List" description="Live Firestore Integration" />
        <UserNavigation onSignOut={firebaseSignOut} redirectPath="/week-10" />
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