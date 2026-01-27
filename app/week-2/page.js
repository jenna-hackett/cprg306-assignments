/* 
app/week-2/page.js
Author: Jenna Hackett
Versions: Jan. 27, 2026
 */

import StudentInfo from "./StudentInfo";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Student Information"
          description="Student name and GitHub repository link for the assignments."
        />
      </header>
      <StudentInfo />
    </main>
  );
}