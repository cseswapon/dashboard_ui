"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { LayoutGrid, ShoppingCart, MessageSquare } from "lucide-react";

const data = [
  { val: 30 },
  { val: 60 },
  { val: 40 },
  { val: 70 },
  { val: 50 },
  { val: 80 },
];

const WeeklyStats: React.FC = () => {
  const stats = [
    {
      id: 1,
      title: "Top sales",
      subtitle: "Johnathan Doe",
      icon: <LayoutGrid size={18} />,
      color: "bg-blue-50 text-blue-500",
      badge: "+68",
    },
    {
      id: 2,
      title: "Best seller",
      subtitle: "MaterialPro Admin",
      icon: <ShoppingCart size={18} />,
      color: "bg-cyan-50 text-cyan-500",
      badge: "+68",
    },
    {
      id: 3,
      title: "Most commented",
      subtitle: "Ample Admin",
      icon: <MessageSquare size={18} />,
      color: "bg-orange-50 text-orange-500",
      badge: "+68",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Weekly stats
        </h3>
        <p className="text-sm text-slate-400">Average sales</p>
      </div>

      {/* Area Chart */}
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="val"
              stroke="#5d87ff"
              strokeWidth={3}
              fill="#5d87ff10"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats List */}
      <div className="mt-6 space-y-5">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                  {stat.title}
                </p>
                <p className="text-xs text-slate-400">{stat.subtitle}</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded text-slate-500 font-bold text-[10px]">
              {stat.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyStats;
