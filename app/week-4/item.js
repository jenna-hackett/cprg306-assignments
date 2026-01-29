/*
Component: item.js 
Author: Jenna Hackett
Version: Jan. 29, 2026
*/

export default function Item({name, quantity, category}) {
  return (
    <ul>
      <li>{name}</li>
      <li>Quantity: {quantity}</li>
      <li>Category: {category}</li>
    </ul>
  );
}