"use client";
import { useUserAuth } from "../contexts/AuthContext";
import SiteHeader from "@/app/components/SiteHeader";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";
import Image from "next/image";

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
    <main className="min-h-screen bg-black">
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
          <div className="max-w-md w-full bg-pink-900 border-4 border-rose-400 rounded-lg p-8 text-center shadow-xl mt-10">
            <h2 className="text-2xl font-bold text-pink-200 mb-4">Secure Access</h2>
            <p className="text-white mb-6">
              Please sign in with your GitHub account to manage the grocery list and meal ideas.
            </p>
            <button 
              onClick={handleSignIn} 
              className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-md border-2 border-white transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Sign in with GitHub
            </button>
          </div>
        ) : (
          /* LOGGED IN */
          <div className="max-w-2xl w-full flex flex-col gap-6 mt-10">
            <div className="bg-pink-900 border-4 border-rose-400 rounded-lg p-8 shadow-xl text-center">
              <div className="flex flex-col items-center gap-4">
                {user.photoURL && (
                  <Image 
                    src={user.photoURL} 
                    alt={user.displayName} 
                    width={80}  // 80px corresponds to w-20
                    height={80} // 80px corresponds to h-20
                    className="rounded-full border-2 border-pink-200 shadow-md"
                  />
                )}
                <h2 className="text-2xl font-bold text-pink-200">
                  Logged in as {user.displayName}
                </h2>
                <p className="text-pink-100 italic">{user.email}</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link 
                  href="/week-8" 
                  className="bg-pink-600 text-white font-bold py-2 px-6 rounded-md border-2 border-rose-400 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Go to Shopping List
                </Link>
                
                <button 
                  onClick={firebaseSignOut} 
                  className="bg-pink-600 text-white font-bold py-2 px-6 rounded-md border-2 border-rose-400 cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}