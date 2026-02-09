
export default function Item({name, quantity, category}) {
  return (
    <section>
      <li className = "border-rose-400 border-4 rounded-lg max-w-md mx-auto p-5 mb-4 bg-pink-900"> 
        <h3 className = "font-bold text-pink-200 text-xl">{name}</h3>
        <p className="text-white">Quantity: {quantity}</p>
        <p className = "font-style: italic text-white">Category: {category}</p>
      </li>
    </section>
  );
}