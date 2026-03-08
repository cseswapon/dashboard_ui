export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
          Home Page
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to the dashboard UI. Switch to dark mode to see the changes.
        </p>
      </div>
    </div>
  );
}
