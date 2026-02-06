
import { linkInfo } from "./LinkInformation";
import PageLinks from "./PageLinks";

export default function SiteHeader() {
  return (
    <header className = "flex gap-4 py-4 px-4 justify-between bg-pink-900">
      <nav>
        <PageLinks
          href = {linkInfo[0].href}
          text = {linkInfo[0].text}
          className= "text-pink-200 hover:text-white font-bold"
        />
      </nav>
      <p className = "font-bold text-pink-200">
          CPRG306: Web Development II
      </p>
    </header>
  )
}