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
      <header>
        <h1 className = "text-center font-bold text-3xl mb-6 mt-4 text-pink-300">
          Shopping List
        </h1>

      {/* Components being rendered */}
      <GroceryItemList />
      <HomePageButton />
      </header>
    </main>
  )
}