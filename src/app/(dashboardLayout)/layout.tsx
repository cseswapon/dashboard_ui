import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 md:block hidden shrink-0 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="shrink-0">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto md:p-4 p-1">{children}</main>
      </div>
    </div>
  );
}
