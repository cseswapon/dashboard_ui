import React from "react";
import {
  Search,
  Menu,
  Bell,
  ShoppingCart,
  Languages,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ui/them_toggle";

const Navbar = () => {
  return (
    <header className="h-20 flex items-center justify-between px-4 sticky top-0 z-10">
      {/* Left side: Menu and Search */}
      <div className="flex items-center gap-4 flex-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
          <Menu size={20} />
        </button>

        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
        </div>
      </div>

      {/* Right side: Icons and Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <ShoppingCart size={20} />
        </button>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <Languages size={20} />
        </button>

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <LayoutGrid size={20} />
        </button>

        <ThemeToggle />

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 border border-gray-200 overflow-hidden cursor-pointer">
            <Image
              width={1000}
              height={200}
              src="/avatar.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
