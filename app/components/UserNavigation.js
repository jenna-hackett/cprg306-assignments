import { useRouter } from "next/navigation";

export default function UserNavigation({ onSignOut, redirectPath }) {
  const router = useRouter();

  const handleAction = async () => {
    await onSignOut();
    router.push(redirectPath);
  };

  return (
    <div className="absolute top-20 right-5 z-50">
      <button 
        onClick={handleAction}
        className="bg-pink-900 text-white font-bold py-2 px-4 rounded-full border-2 border-rose-400 hover:bg-pink-600 transition-all shadow-lg text-sm cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}