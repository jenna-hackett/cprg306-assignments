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
      <header className="p-4 mb-15 text-3xl text-center font-bold text-pink-300">
        <h1>
          Student Information
        </h1>
      </header>
      <section className="pl-8 pb-6 text-xl text-pink-300">
        <p className = "pb-6">
          Name: Jenna Hackett
        </p>
        <p className = "pb-6">
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