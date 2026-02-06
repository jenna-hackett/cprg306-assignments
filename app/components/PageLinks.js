
import Link from "next/link";

export default function PageLinks({href, text, className}) {
  return (
    <Link 
      className={className || "text-pink-600 dark:text-pink-300 hover:text-rose-400 text-lg font-bold transition-colors duration-300"} 
      href={href}
    >
      {text}
    </Link>
  );
}