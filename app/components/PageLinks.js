
import Link from "next/link";

export default function PageLinks({href, text}) {
  return (
    <Link className="text-pink-400 hover:text-rose-400 text-lg font-bold transition-colors duration-300" 
      href={href}>
      {text}
    </Link>
  );
}