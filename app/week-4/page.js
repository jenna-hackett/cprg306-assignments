
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import ItemList from "./itemList";

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