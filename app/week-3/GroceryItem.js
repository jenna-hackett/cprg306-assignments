
export default function Item({name, quantity, category}) {
  return (
    <section>
      <ul className = "border-rose-400 border-4 rounded-lg max-w-md mx-auto p-5 mb-4 bg-pink-900"> 
        <li className = "font-bold text-pink-400 text-xl">{name}</li>
        <li className="text-white">Quantity: {quantity}</li>
        <li className = "font-style: italic text-white">Category: {category}</li>
      </ul>
    </section>
  );
}