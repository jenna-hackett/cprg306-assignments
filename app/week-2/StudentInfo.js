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
        <h2 className="p-4 text-lg text-center font-bold">Student Information</h2>
      </header>
        <p className="p-4">
          Name: Jenna Hackett
        </p>
        <p className="pl-4">
          GitHub:
          <Link className="underline" href="https://github.com/jenna-hackett/cprg306-assignments">
          cprg306-assignments
          </Link>
        </p>
    </section>
);
}