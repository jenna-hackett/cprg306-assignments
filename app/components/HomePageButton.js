/*
Home Page Button Component
Author: Jenna Hackett
Version: Jan. 23, 2026
 */

import Link from "next/link";

export default function HomePageButton() {
  return (
    <section>
      <button className="pl-5 mt-120">
        <Link className="text-pink-200 underline hover:text-pink-900 duration-300 ease-linear" href="/">Back to Home</Link>
      </button>
    </section>
  );
}