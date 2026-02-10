import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Form Interactivity"
          description="XYZ"
        />
      </header>
    </main>
  );
}