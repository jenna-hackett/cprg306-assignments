/* 
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="pb-7 pt-7 text-center font-bold text-2xl text-pink-300">
          CPRG306: Web Development 2 - Assignments
        </h1>
        <ul>
          <li className = "p-3 mb-4 pb-2 text-lg light:text-pink-200"><Link className="text-pink-200 underline pl-2 hover:text-pink-900 duration-300 ease-linear" href="/week-2">
            Week 2</Link> 
          </li>
          <li className = "p-3 mb-4 pb-2 text-lg light:text-pink-200"><Link className="text-pink-200 underline pl-2 hover:text-pink-900 duration-300 ease-linear" href="/week-3">
            Week 3</Link>
          </li>
        </ul>
      </header>
    </main>
  );
}
