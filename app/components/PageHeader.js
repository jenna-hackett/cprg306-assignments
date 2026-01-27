/*
Component: PageHeader.js
Author: Jenna Hackett
Version: Jan. 27, 2026
*/

export default function PageHeader({ title, description }) {
  return (
    <header className = "px-4 py-4 text-gray-400">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}