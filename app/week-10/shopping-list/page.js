"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext"; 
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import NewItem from "./NewGroceryItem";
import ItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";
import Link from "next/link";
import { cleanItemName } from "../../utils/item-utils";
import AccessDenied from "@/app/components/AccessDenied";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Helper function for adding item.
  const handleAddItem = async (newItem) => {
  try {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);

      const itemWithId = {
        ...newItem,
        id: newItemId
      };

      setItems((prevItems) => [...prevItems, itemWithId]);
    }
  } catch (error) {
    console.error("Error adding item to Firestore: ", error);
  }
  };

  // Helper function for item selection.
  const handleItemSelect = (item) => {
  setSelectedItemName(cleanItemName(item));
  };

  // Helper function for signout.
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10"); // Redirect to login page after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  // Add useEffect hook, declaring and calling the loadItems function inside.
  useEffect(() => {
    const loadItems = async () => {
      try {
        if (user) {
          const fetchedItems = await getItems(user.uid);
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Error loading items: ", error);
      }
    };
    if (user) {
      loadItems();
    }
  }, [user]); 

  // TODO
  // Add a profile page that displays the user's profile information.
  // Add other OAuth providers such as Google

 // Access Control
  if (!user) {
    return <AccessDenied loginPath="/week-10" />;
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