/* 
app/week-4/page.js
Author: Jenna Hackett
Version: Jan. 27, 2026
*/

import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title=""
          description=""
        />
      </header>
    </main>
  );
}