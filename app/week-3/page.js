/* 
.\week-3\page.js
Author: Jenna Hackett
Versions: Jan. 22, 2026
 */

import HomePageButton from "../components/HomePageButton";
import GroceryItemList from "./GroceryItemList";
// import Image from "next/image";

export default function Page() {
  return (
    <main>
      <header>
        <h1 className = "text-center font-bold text-2xl mb-6 mt-4 text-pink-300">
        Shopping List
      </h1>

      {/* Image Section */}

      {/* Components being rendered */}
      <GroceryItemList />
      <HomePageButton />
      </header>
    </main>
  )
}