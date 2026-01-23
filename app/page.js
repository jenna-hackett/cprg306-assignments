/* 
.\app\page.js
Author: Jenna Hackett
Versions: Jan. 16, 2026
 */

import PageLinks from "./components/PageLinks";
import { linkInfo } from "./components/LinkInformation";


export default function Home() {
  return (
    <main>
      <header>
        <h1 className="pb-7 pt-7 text-center font-bold text-2xl text-pink-300">
          CPRG306: Web Development 2 - Assignments
        </h1>
        <ul>
          <li className = "p-3 pb-2 mb-4 ml-4 mr-250 mt-7 text-xl">
            <PageLinks {...linkInfo[1]} /> 
          </li>
          <li className = "p-3 pb-2 mb-4 ml-4 mr-250 text-xl">
              <PageLinks {...linkInfo[2]} />
          </li>
        </ul>
      </header>
    </main>
  );
}
