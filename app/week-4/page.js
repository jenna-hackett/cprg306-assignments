/* 
app/week-4/page.js
Author: Jenna Hackett
Version: Jan. 29, 2026
*/

import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Shopping List"
          description="A list of items to purchase for the week."
        />
      </header>
    </main>
  );
}