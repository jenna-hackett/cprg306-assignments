import Image from "next/image";
import Link from "next/link";

export default function LoggedUser({ user, onSignOut, listPath }) {
  return (
    <div className="max-w-2xl w-full flex flex-col gap-6 mt-10">
      <div className="bg-pink-900 border-4 border-rose-400 rounded-full p-8 shadow-xl text-center">
        <div className="flex flex-col items-center gap-4">
          {user.photoURL && (
            <Image 
              src={user.photoURL} 
              alt={user.displayName} 
              width={80}
              height={80}
              className="rounded-full border-2 border-pink-200 shadow-md"
            />
          )}
          <h2 className="text-2xl font-bold text-pink-200">
            Logged in as {user.displayName}
          </h2>
          <p className="text-pink-100 italic">{user.email}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link 
            href={listPath}
            className="bg-pink-600 text-white font-bold py-2 px-6 rounded-full border-2 border-rose-400 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Go to Shopping List
          </Link>
          
          <button 
            onClick={onSignOut} 
            className="bg-pink-600 text-white font-bold py-2 px-6 rounded-full border-2 border-rose-400 cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}