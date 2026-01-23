/* 
.\week-3\page.js
Author: Jenna Hackett
Versions: Jan. 22, 2026
 */

import HomePageButton from "../components/HomePageButton";
import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main>

      <h1 className = "text-center font-bold text-2xl mb-4 mt-4 text-pink-300">
        Shopping List
      </h1>
      <GroceryItemList />
      <HomePageButton />
    </main>
  )
}