
export default function Item({name, quantity, category}) {
  return (
    <section>
      <ul className = "border-amber-500 border-3 rounded-md max-w-md mx-auto p-5 mb-4">
        <li className = "font-bold text-amber-600">{name}</li>
        <li>Quantity: {quantity}</li>
      </ul>
    </section>
  );
}