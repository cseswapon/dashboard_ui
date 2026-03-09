"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuGroups, SidebarItem } from "@/constant/menue_Data";
import { Button } from "antd";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Modern");
  const [isUsersOpen, setIsUsersOpen] = useState(false);

  const handleItemClick = (item: SidebarItem) => {
    if (item.disabled) return;

    setActiveItem(item.name);

    if (item.hasSubmenu) {
      if (item.name === "Users") {
        setIsUsersOpen(!isUsersOpen);
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-5 border-b border-gray-100">
        <Image
          width={120}
          height={40}
          alt="logo"
          src="/logo/easy.png"
          className="object-contain"
        />
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {menuGroups.map((group, idx) => (
          <div
            key={group.title}
            className={cn(
              "px-4 mb-6",
              idx !== 0 && "pt-4 border-t border-gray-100",
            )}
          >
            <p className="px-4 mb-3 text-xs tracking-widest text-slate-400 uppercase">
              {group.title}
            </p>

            <ul className="space-y-1">
              {group.items.map((item) => (
                <div key={item.name}>
                  <li
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "group flex flex-col px-4 py-3 rounded-lg cursor-pointer transition-all duration-200",
                      activeItem === item.name
                        ? "bg-blue-500 text-white"
                        : "text-slate-500 hover:bg-gray-50",
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <item.icon
                          size={19}
                          strokeWidth={activeItem === item.name ? 2.5 : 2}
                        />
                        <span className="text-sm font-normal">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full font-bold",
                              item.variant === "outline"
                                ? "border border-cyan-400 text-cyan-400 bg-transparent"
                                : cn(
                                    "text-white",
                                    item.badgeColor || "bg-blue-500",
                                  ),
                            )}
                          >
                            {item.badge}
                          </span>
                        )}

                        {item.hasSubmenu && (
                          <div className="transition-transform duration-200">
                            {isUsersOpen && item.name === "Users" ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {item.subtext && (
                      <p
                        className={cn(
                          "text-xs ml-8 mt-1",
                          activeItem === item.name
                            ? "text-blue-100"
                            : "text-slate-400",
                        )}
                      >
                        {item.subtext}
                      </p>
                    )}
                  </li>

                  {item.hasSubmenu && item.name === "Users" && isUsersOpen && (
                    <ul className="mt-1 ml-9 space-y-1 border-l-2 border-gray-100">
                      {item.subItems?.map((sub) => (
                        <li
                          key={sub.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveItem(sub.name);
                          }}
                          className={cn(
                            "px-4 py-2 text-sm cursor-pointer transition-colors relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-px before:bg-gray-200",
                            activeItem === sub.name
                              ? "text-blue-500 font-semibold"
                              : "text-slate-500 hover:text-blue-500",
                          )}
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        ))}
        <div className="pt-4 border-t border-gray-100 p-4">
          <div className="relative bg-blue-100 p-5 rounded-lg">
            <div className="grid grid-cols-2">
              <div>
                <h3 className="font-bold text-lg text-gray-500">
                  Unlimited <br /> Access
                </h3>
                <Button className="bg-primary! text-white! mt-3">Signup</Button>
              </div>
              <div>
                <Image
                  width={120}
                  height={40}
                  style={{ zoom: 1.2 }}
                  alt="rocket"
                  src="/upgrade-rocket.png"
                  className="object-contain absolute -top-6 -right-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
