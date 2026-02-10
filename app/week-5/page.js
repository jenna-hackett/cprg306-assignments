import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";
import NewItem from "./NewItem";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Basic Interactivity with Forms"
          description="A simple form to add items to a shopping list using name, quantity and category properties."
        />
      </header>
      <NewItem />
    </main>
  );
}