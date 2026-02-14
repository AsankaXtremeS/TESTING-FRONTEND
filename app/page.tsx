import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <Link href="/login">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Sign In
        </button>
      </Link>
      <Link href="/register">
        <button className="px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
