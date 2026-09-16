import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800"
    >
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <h2 className="text-6xl font-bold text-gray-400 mb-4">404</h2>
      <p>The page you are looking for does not exist.</p>
      <p className="mt-4">
        Return to the{' '}
        <Link href="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}
