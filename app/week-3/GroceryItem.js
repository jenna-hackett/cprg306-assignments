/* 
Component: Grocery Item.js
Author: Jenna Hackett
Versions: Jan. 27, 2026
 */

export default function Item({name, quantity, category}) {
  return (
    <section>
      <ul className = "border-amber-500 border-3 rounded-md max-w-md mx-auto p-5 mb-4"> 
        <li className = "font-bold text-amber-600">{name}</li>
        <li>Quantity: {quantity}</li>
        <li className = "font-style: italic">Category: {category}</li>
      </ul>
    </section>
  );
}