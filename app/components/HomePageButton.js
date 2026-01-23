/*
Component: HomePageButton.js
Author: Jenna Hackett
Version: Jan. 23, 2026
 */

import { linkInfo } from "./LinkInformation";
import PageLinks from "./PageLinks";

export default function HomePageButton() {
  return (
    <section className="fixed bottom-0 p-6 font-bold text-lg">
      <button>
        <PageLinks 
          href={linkInfo[0].href} 
          text={linkInfo[0].text} 
        />
      </button>
    </section>
  );
}