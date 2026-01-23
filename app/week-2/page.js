/* 
.\week-2\page.js
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import HomePageButton from "../components/HomePageButton";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <main>
      {/* <h1>Shopping List</h1> Commented this out for visibility purposes.*/}
      <StudentInfo />
      <HomePageButton />
    </main>
  );
}