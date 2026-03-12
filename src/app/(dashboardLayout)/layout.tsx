"use client";

import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebar();
  console.log(isOpen);
  return (
    <div className="flex h-screen">
      {!isOpen && (
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300",
            "lg:static lg:translate-x-0",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <Sidebar />
        </div>
      )}

      {/* {isOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" />} */}
      <div className={`flex flex-col flex-1 transition-all duration-300`}>
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
