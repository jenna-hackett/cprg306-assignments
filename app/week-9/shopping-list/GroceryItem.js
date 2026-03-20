
export default function Item({name, quantity, category, hideCategory, onSelect}) {
  return (
    <section>
      <div 
      className = "border-rose-400 border-4 rounded-lg max-w-md mx-auto p-5 mb-4 bg-pink-900 cursor-pointer hover:bg-pink-700 transition-colors"
      onClick={() => onSelect(name)}
      > 
        <h3 className = "font-bold text-pink-200 text-lg">{name}</h3>
        <p className="text-white">Quantity: {quantity}</p>
        {!hideCategory && (
          <p className = "italic text-white">Category: {category}</p>
        )}
      </div>
    </section>
  );
}