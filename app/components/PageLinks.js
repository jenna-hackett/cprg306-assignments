/*
Component: PageLinks.js
Author: Jenna Hackett
Version: Jan. 27, 2026
*/

import Link from "next/link";

export default function PageLinks({href, text}) {
  return (
    <Link className="text-pink-300 hover:text-pink-400 duration-300 ease-linear text-lg" 
      href={href}>
      {text}
    </Link>
  );
}