export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
}
