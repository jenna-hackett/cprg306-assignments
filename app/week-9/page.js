"use client";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
 
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
//await gitHubSignIn();
 
// Sign out of Firebase
//await firebaseSignOut();
 
return (
  <p>
    Welcome, {user.displayName}!
  </p>
);
}
