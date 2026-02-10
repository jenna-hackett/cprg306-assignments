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
          description="xyz"
        />
      </header>
      <NewItem />
    </main>
  );
}