import { useUserAuth } from "../contexts/AuthContext";


export default function Page() {
  // Use the useUserAuth hook to access the user object and authentication functions.
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <p>
      Welcome, {user.displayName}!
    </p>
  );
}

// Sign in to Firebase using GitHub authentication.
await githubSignIn();

// Sign out of Firebase.
await firebaseSignOut();