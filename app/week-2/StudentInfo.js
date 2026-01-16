/* Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      {/* Student Info Component */}
        <p>
          Name: Jenna Hackett
        </p>
        <p>
          GitHub:{" "}
          <Link className="underline" href="https://github.com/jenna-hackett/cprg306-assignments">
          CPRG306-Assignments
          </Link>
        </p>
    </section>
);
}