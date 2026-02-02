
import Link from "next/link";

export default function PageLinks({href, text}) {
  return (
    <Link className="text-amber-500 hover:text-amber-400 font-bold duration-300 ease-linear text-lg" 
      href={href}>
      {text}
    </Link>
  );
}