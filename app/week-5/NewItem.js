"use client";
import { useState } from "react";

export default function NewItem() {
  // Initialize state for the form inputs.
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    // Ensures the page does not reload.
    e.preventDefault();
    // Create the item object and log it to the console.
    const item = { name, quantity, category };
    console.log("New item:", item);
    // Alerts user an item was added with their provided data.
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    resetForm();
  }

  // Resets the form after submission to original values.
  function resetForm() {
    setName("");
    setQuantity(1);
    setCategory("Produce");
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
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md border border-rose-400 bg-pink-800 text-white"
          />
        </div>

        {/* Item Category */}
        <div className="flex-1">
          <label htmlFor="category" className="block mb-1">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
        disabled={!name.trim()}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md disabled:opacity-60"
      >
        Add Item
      </button>
    </form>
  );
}