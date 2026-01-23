/* 
Author: Jenna Hackett
Versions: Jan. 22, 2026
 */

export default function Item({name, quantity, category}) {
  return (
    <section>
      <ul className = "border-pink-200 border-2 rounded-md max-w-md mx-auto p-5 mb-4"> 
        <li>{name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </section>
  );
}