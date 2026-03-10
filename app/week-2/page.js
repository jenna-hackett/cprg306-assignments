
import StudentInfo from "./StudentInfo";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Student Information"
          description="Student name and GitHub repository link for the assignments."
        />
      </header>
      <section>
        <StudentInfo
          name="Jenna Hackett"
          gitHubLink="https://github.com/jenna-hackett/cprg306-assignments"
      />
      </section>
    </main>
  );
}