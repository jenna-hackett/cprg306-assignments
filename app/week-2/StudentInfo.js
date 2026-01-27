/* 
Component: StudentInfo.js
Author: Jenna Hackett
Version: Jan. 27, 2026
 */

import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      {/* Student Info Component */}
      <section className="px-4 py-4">
        <p>
          Name: Jenna Hackett
        </p>
        <p>
          GitHub Link:
            <Link className="hover:text-amber-400 font-bold duration-300 ease-linear" 
              href="https://github.com/jenna-hackett/cprg306-assignments"
              target = "_none">
              cprg306-assignments
            </Link>
        </p>
      </section>
    </section>
);
}