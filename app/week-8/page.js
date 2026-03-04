"use client";
import SiteHeader from "../components/SiteHeader";
import PageHeader from "../components/PageHeader";

export default function Page() {
  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Week 8 "
          description="Week 8 assignment."
        />
      </header>
    </main>
  )
}