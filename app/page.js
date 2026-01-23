/* 
.\app\page.js
Author: Jenna Hackett
Versions: Jan. 23, 2026
 */

import PageLinks from "./components/PageLinks";
import { linkInfo } from "./components/LinkInformation";


export default function Home() {
  return (
    <main>
      <header>
        <h1 className="pb-15 pt-7 text-center font-bold text-3xl text-pink-300">
          CPRG306: Web Development II <br></br>Weekly Assignments
        </h1>
        <ul>
          <li className="pb-6 pl-6">
            <PageLinks {...linkInfo[1]} /> 
          </li>
          <li className="pb-6 pl-6">
              <PageLinks {...linkInfo[2]} />
          </li>
        </ul>
      </header>
    </main>
  );
}
