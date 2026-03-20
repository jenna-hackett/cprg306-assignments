import Link from "next/link";
import SiteHeader from "./SiteHeader";

export default function AccessDenied({ loginPath }) {
  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />
      <div className="flex flex-col items-center justify-center mt-20 p-6">
        <div className="bg-pink-900 border-4 border-rose-400 rounded-lg p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-pink-200 mb-4">Access Denied</h2>
          <p className="text-white mb-6">You must be logged in to view the shopping list.</p>
          <Link 
            href={loginPath} 
            className="bg-pink-600 text-white font-bold py-2 px-6 rounded-md border-2 border-rose-400"
          >
            Go to Login Page
          </Link>
        </div>
      </div>
    </main>
  );
}