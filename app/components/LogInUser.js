export default function LogInUser({ onSignIn }) {
  return (
    <div className="max-w-md w-full bg-pink-900 border-4 border-rose-400 rounded-full px-20 py-12 text-center mt-10">
      <h2 className="text-2xl font-bold text-pink-200 mb-4">Secure Access</h2>
      <p className="text-white mb-6">
        Please sign in with your GitHub account to manage the grocery list and meal ideas.
      </p>
      <button 
        onClick={onSignIn} 
        className="max-w-md bg-pink-600 text-white font-bold py-3 px-6 rounded-full border-2 border-white transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}