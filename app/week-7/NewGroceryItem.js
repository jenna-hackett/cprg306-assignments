"use client";
import { useState } from "react";

// Define state for easy reset.
  const initialState ={
    name: "",
    quantity: 1,
    category: "Produce",
  }

export default function NewItem({ onAddItem }) {
  // Merge into single state object
  const [item, setItem] = useState(initialState);

  // Reusable event handler
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const newItem = { 
      ...item,
      id: crypto.randomUUID()
     };

    onAddItem(newItem);
    setItem(initialState); // Reset form after submission
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 border-2 border-rose-400 rounded-lg bg-pink-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-pink-200">Add New Item</h2>

      {/* Item Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Item Name:</label>
        <input
          type="text"
          id="name"
          name="name" // Must match key in state for handleChange to work
          required
          value={item.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md border border-rose-400 bg-pink-800 text-white"
          placeholder="e.g., Sourdough Bread"
        />
      </div>

      {/* Quantity/Category Row */}
      <div className="mb-4 flex gap-4">
        {/* Item Quantity */}
        <div className="flex-1">
          <label htmlFor="quantity" className="block mb-1">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity" // Must match key in state for handleChange to work
            min={1}
            max={99}
            value={item.quantity}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-rose-400 bg-pink-800 text-white"
          />
        </div>

        {/* Item Category */}
        <div className="flex-1">
          <label htmlFor="category" className="block mb-1">Category:</label>
          <select
            id="category"
            name="category" // Must match key in state for handleChange to work
            value={item.category}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-rose-400 bg-pink-800 text-white"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="CannedGoods">Canned Goods</option>
            <option value="DryGoods">Dry Goods</option>
            <option value="Household">Household</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        // Disable the button if the name input is empty or just whitespace.
        disabled={!item.name.trim()}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md disabled:opacity-60"
      >
        Add Item
      </button>
    </form>
  );
}