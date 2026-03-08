"use client";

import ThemeToggle from "@/components/ui/them_toggle";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex bg-muted min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 bg-card border-r border-border p-6 hidden md:block">
        <h2 className="text-xl font-bold text-primary mb-8">DashStack</h2>

        <nav className="space-y-2">
          <div className="bg-primary text-white px-4 py-2 rounded-lg">
            Modern
          </div>

          <div className="text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted cursor-pointer">
            Analytical
          </div>

          <div className="text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted cursor-pointer">
            eCommerce
          </div>
        </nav>

        <div className="mt-10">
          <p className="text-sm text-muted-foreground mb-2">Applications</p>

          <div className="space-y-2">
            <div className="px-4 py-2 rounded-lg hover:bg-muted cursor-pointer text-foreground">
              Chat
            </div>

            <div className="px-4 py-2 rounded-lg hover:bg-muted cursor-pointer text-foreground">
              Users
            </div>

            <div className="px-4 py-2 rounded-lg hover:bg-muted cursor-pointer text-foreground">
              Calendar
            </div>
          </div>
        </div>
      </aside>

      <p className="text-blue-900 dark:text-red-900 text-xl">Dashboard Title</p>

      {/* MAIN AREA */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

          <ThemeToggle />
        </div>

        <div className="p-10 bg-primary/10 dark:bg-yellow-300">
          <p className="text-blue-900 dark:text-red-900">
            Light mode blue, dark mode red.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
