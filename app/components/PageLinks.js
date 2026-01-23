import Link from "next/link";

export default function PageLinks({href, text}) {
  return (
    <Link className="text-pink-300 pl-6 hover:text-pink-700 duration-300 ease-linear text-xl" 
      href={href}>
      {text}
    </Link>
  );
}