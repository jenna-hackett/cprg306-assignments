/* 
Author: Jenna Hackett
Versions: Jan. 22, 2026
 */

export default function Item({name, quantity, category}) {
  return (
    <section>
      <ul> 
        <li>Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </section>
  );
}