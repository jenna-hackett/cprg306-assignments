/* 
.\app\page.js
Author: Jenna Hackett
Versions: Jan. 27, 2026
 */

import PageLinks from "./components/PageLinks";
import { linkInfo } from "./components/LinkInformation";
import SiteHeader from "./components/SiteHeader";
import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Weekly Assignments"
          description="A list of links to all of the weekly assignments for the course."
        />
      </header>
        <ul>
          <li className="pb-6 pl-6">
            <PageLinks {...linkInfo[1]} /> 
          </li>
          <li className="pb-6 pl-6">
              <PageLinks {...linkInfo[2]} />
          </li>
          <li className="pb-6 pl-6">
              <PageLinks {...linkInfo[3]} />
          </li>
        </ul>
    </main>
  );
}
