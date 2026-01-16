/* 
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="p-4">CPRG306: Web Development 2 - Assignments</h1>
        <ul>
          <li><Link className="underline pl-4" href="/week-2">Week 2</Link></li>
        </ul>
      </header>
    </main>
  );
}
