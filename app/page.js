/* 
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="pb-7 pt-7 text-center font-bold text-2xl text-pink-400">
          CPRG306: Web Development 2 - Assignments
        </h1>
        <ul>
          <li className = "border-pink-400 border-2 rounded-md max-w-sm mx-auto p-3 mb-4 pb-2 text-lg"><Link className="underline pl-2 hover:text-pink-400" href="/week-2">
            Week 2</Link>
          </li>
          <li className = "border-pink-400 border-2 rounded-md max-w-sm mx-auto p-3 mb-4 pb-2 text-lg"><Link className="underline pl-2 hover:text-pink-400" href="/week-3">
            Week 3</Link>
          </li>
        </ul>
      </header>
    </main>
  );
}
