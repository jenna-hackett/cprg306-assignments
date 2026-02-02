
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Sorted Shopping List"
          description="Items grouped by category for easier shopping."
        />
      </header>
      <ItemList />
    </main>
  );
}