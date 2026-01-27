/*
Component: HomePageButton.js
Author: Jenna Hackett
Version: Jan. 27, 2026
 */

import { linkInfo } from "../components/LinkInformation";
import PageLinks from "../components/PageLinks";

export default function HomePageButton() {
  return (
    <section>
      <button>
        <PageLinks 
          href={linkInfo[0].href} 
          text={linkInfo[0].text} 
        />
      </button>
    </section>
  );
}