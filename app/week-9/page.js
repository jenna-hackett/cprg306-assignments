"use client";
import { useUserAuth } from "../contexts/AuthContext";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";

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

  // Handles if the user is not logged in yet.
  if (!user) {
    return (
      <main>
        <header>
          <SiteHeader />
          <PageHeader 
            title="Please sign in to access the content."
            description="In the Week 9 assignment, firebase authentication is being implemented. A user might sign in using their github account before being able to view the shopping list page of the webpage."
          />
        </header>

        <div className="p-4">
          <button onClick={handleSignIn} className="bg-pink-800 text-white py-2 px-4 rounded cursor-pointer">
            Sign in with GitHub
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <header>
        <SiteHeader />
        <PageHeader 
          title="Firebase Authentication"
          description="In the Week 9 assignment, firebase authentication is being implemented. A user might sign in using their github account before being able to view the shopping list page of the webpage."
          />
      </header>
      <p>
        Welcome, {user.displayName}!
      </p>
      <button onClick={firebaseSignOut}>
        Sign Out
      </button>
    </main>
  );
}