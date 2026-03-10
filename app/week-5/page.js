import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Basic Interactivity and State"
          description="A simple form to add items to a shopping list using name, quantity and category properties."
        />
      </header>
      <NewItem />
    </main>
  );
}