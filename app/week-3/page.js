
import GroceryItemList from "./GroceryItemList";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Shopping List"
          description="A list of grocery items to buy this week."
        />
      </header>
      <GroceryItemList />
    </main>
  )
}