import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center">
        <p className="text-6xl mb-4">📸</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Looks like this page wandered off into the Himalayas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
