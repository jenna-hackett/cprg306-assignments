/* 
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      {/* Student Info Component */}
      <header>
        <h1 className="p-4 text-2xl text-center font-bold text-pink-300">Student Information</h1>
      </header>
        <p className="pl-5 pb-3 text-lg text-pink-200">
          Name: Jenna Hackett
        </p>
        <p className="pl-5 text-lg text-pink-200">
          GitHub:
          <Link className="underline hover:text-pink-900" href="https://github.com/jenna-hackett/cprg306-assignments">
          cprg306-assignments
          </Link>
        </p>
    </section>
);
}