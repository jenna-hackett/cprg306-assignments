"use client";
import { useUserAuth } from "../contexts/AuthContext";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import LoggedUser from "@/app/components/LoggedUser";
import LogInUser from "../components/LogInUser";

export default function Page() {
  // Use the useUserAuth hook to access the user object and authentication functions.
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  return (
    <main className="min-h-screen">
      <header>
        <SiteHeader />
        <PageHeader 
          title="Firebase Authentication"
          description="Week 9 focuses on integrating Firebase Authentication. This update secures the application by requiring users to authenticate via GitHub before gaining access to the personal shopping list and meal ideas."
        />
      </header>

      <div className="flex flex-col items-center justify-center p-6">
        {!user ? (
          /* NOT LOGGED IN */
          <LogInUser onSignIn={handleSignIn} />
        ) : (
          /* LOGGED IN */
          <LoggedUser user={user} onSignOut={firebaseSignOut} />
        )}
      </div>

    </main>
  );
}