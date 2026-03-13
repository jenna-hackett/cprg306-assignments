"use client";
import { useUserAuth } from "../contexts/AuthContext";

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
      <div>
        <p>Please sign in to access the content.</p>
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <main>
      <p>
        Welcome, {user.displayName}!
      </p>
      <button onClick={firebaseSignOut}>
        Sign Out
      </button>
    </main>
  );
}