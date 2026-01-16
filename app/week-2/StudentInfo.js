/* Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      {/* Student Info Component */}
      <header>
        <h2>Student Information</h2>
      </header>
      <p>Student Name: Jenna Hackett</p>
      <p>
        GitHub Link:{" "}
        <Link href="https://github.com/jenna-hackett/cprg306-assignments">
          CPRG306-Assignments
        </Link>
      </p>
    </section>
);
}