/* 
Component: StudentInfo.js
Author: Jenna Hackett
Versions: Jan. 23, 2026
 */

import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      {/* Student Info Component */}
      <header>
        <h1 className="p-4 mb-15 text-3xl text-center font-bold text-pink-300">
          Student Information
        </h1>
      </header>
      <section>
        <p className="pl-8 pb-6 text-xl text-pink-300">
          Name: Jenna Hackett
        </p>
        <p className="pl-8 text-xl text-pink-300">
          GitHub Link:
            <Link className=" hover:text-pink-700 duration-300 ease-linear" 
              href="https://github.com/jenna-hackett/cprg306-assignments"
              target = "_none">
              cprg306-assignments
            </Link>
        </p>
      </section>
    </section>
);
}