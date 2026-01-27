/* 
Component: SiteHeader.js
Author: Jenna Hackett
Version: Jan. 27, 2026
*/

import { linkInfo } from "./LinkInformation";
import PageLinks from "./PageLinks";

export default function SiteHeader() {
  return (
    <header className = "flex gap-4 py-4 px-4 justify-between bg-gray-500 border-2 border-pink-300">
      <p className = "text-pink-300 font-bold">
          CPRG306: Web Development II
      </p>
      <nav>
        <PageLinks
          href = {linkInfo[0].href}
          text = {linkInfo[0].text}
        />
      </nav>
    </header>
  )
}