export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
        <p className="text-red-600">Loading...</p>
      </div>
    </div>
  );
}
