import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Week 5"
          description="Week 5 assignment."
        />
      </header>
    </main>
  );
}