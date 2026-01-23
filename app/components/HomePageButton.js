/*
Component: HomePageButton.js
Author: Jenna Hackett
Version: Jan. 23, 2026
 */

import { linkInfo } from "./LinkInformation";
import PageLinks from "./PageLinks";

export default function HomePageButton() {
  return (
    <section className="fixed bottom-0 pl-6 pb-6 font-semibold">
      <button>
        <PageLinks 
          href={linkInfo[0].href} 
          text={linkInfo[0].text} 
        />
      </button>
    </section>
  );
}