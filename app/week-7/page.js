"use client";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Week 7"
          description="Managing State"
        />
      </header>
    </main>
  )
}