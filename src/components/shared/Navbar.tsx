"use client";

import React from "react";
import {
  Search,
  Menu,
  X,
  Bell,
  ShoppingCart,
  Languages,
  LayoutGrid,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { Dropdown, Badge, MenuProps } from "antd";
import ThemeToggle from "../ui/them_toggle";
import { useSidebar } from "@/hooks/useSidebar";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const { toggle, close, isOpen, language, changeLanguage } = useSidebar();

  const languageItems: MenuProps["items"] = [
    {
      key: "en",
      label: "English",
      onClick: () => changeLanguage("en"),
      className: language === "en" ? "bg-blue-50 dark:bg-blue-900/20" : "",
    },
    {
      key: "bn",
      label: "বাংলা",
      onClick: () => changeLanguage("bn"),
      className: language === "bn" ? "bg-blue-50 dark:bg-blue-900/20" : "",
    },
    {
      key: "ar",
      label: "عربي",
      onClick: () => changeLanguage("ar"),
      className: language === "ar" ? "bg-blue-50 dark:bg-blue-900/20" : "",
    },
  ];

  const notificationItems: MenuProps["items"] = [
    { key: "1", label: "You have a new message", icon: <Bell size={14} /> },
    { key: "2", label: "Project updated", icon: <LayoutGrid size={14} /> },
  ];

  const profileItems: MenuProps["items"] = [
    { key: "p1", label: "My Profile", icon: <User size={14} /> },
    { key: "p2", label: "Settings", icon: <Settings size={14} /> },
    { key: "p3", danger: true, label: "Logout", icon: <LogOut size={14} /> },
  ];

  return (
    <header className="h-20 flex items-center justify-between px-4 sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile/Desktop Toggle */}
        <button
          onClick={toggle}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-500"
        >
          <Menu size={20} />
        </button>

        {/* Sidebar for Mobile with Overlay */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />
          <div
            className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex justify-end p-4">
              <button onClick={close} className="p-2 text-gray-500">
                <X size={24} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        {/* Language Switcher */}
        <Dropdown menu={{ items: languageItems }} placement="bottomRight" arrow>
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center gap-1">
            <Languages size={20} />
            <span className="text-[10px] font-bold hidden sm:inline">
              {language === "en" ? "EN" : language === "bn" ? "BN" : "AR"}
            </span>
          </button>
        </Dropdown>

        <Dropdown
          menu={{ items: [{ key: "c1", label: "Your cart is empty" }] }}
          placement="bottomRight"
        >
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <Badge count={0} showZero size="small">
              <ShoppingCart size={20} className="text-gray-500" />
            </Badge>
          </button>
        </Dropdown>

        {/* Notifications */}
        <Dropdown menu={{ items: notificationItems }} placement="bottomRight">
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <Badge dot color="blue">
              <Bell size={20} className="text-gray-500" />
            </Badge>
          </button>
        </Dropdown>

        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <LayoutGrid size={20} />
        </button>

        <ThemeToggle />

        {/* User Profile */}
        <Dropdown menu={{ items: profileItems }} placement="bottomRight">
          <div className="w-9 h-9 rounded-full bg-blue-100 border border-gray-200 overflow-hidden cursor-pointer ml-2 hover:opacity-80 transition-opacity">
            <Image
              width={40}
              height={40}
              src="/avatar.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Navbar;
