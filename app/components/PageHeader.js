
export default function PageHeader({ title, description }) {
  return (
    <header className = "px-4 py-4">
      <h1 className="text-3xl font-semibold text-indigo-950 dark:text-white">{title}</h1>
      <p className= "text-slate-500 dark:text-slate-400">{description}</p>
    </header>
  );
}