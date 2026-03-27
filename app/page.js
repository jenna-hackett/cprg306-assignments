import PageLinks from "./components/PageLinks";
import { linkInfo } from "./components/LinkInformation";
import SiteHeader from "./components/SiteHeader";
import PageHeader from "./components/PageHeader";


export default function Home() {
  return (
    <main className="min-h-screen">
      <header>
        <SiteHeader />
        <PageHeader 
          title="Weekly Assignments"
          description="A list of links to all of the weekly assignments for the course."
        />
      </header>
      {/* Container for centering weekly items on the page */}
      <section className="max-w-2xl mx-auto p-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 5, 6, 7, 8, 9, 10].map((index) => (
            <li key={index} className="flex justify-center">
              <PageLinks 
                {...linkInfo[index]} 
                className="w-full flex items-center justify-center py-4 px-2 bg-pink-900/40 border-2 border-rose-400 rounded-lg text-pink-200 text-base font-bold transition-all duration-300 hover:bg-pink-700 hover:scale-105 text-center"
              /> 
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
