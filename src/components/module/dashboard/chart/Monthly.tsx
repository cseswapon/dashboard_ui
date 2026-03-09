"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { ArrowDownRight, DollarSign } from "lucide-react";

const data = [
  { name: "1", val: 30 },
  { name: "2", val: 55 },
  { name: "3", val: 40 },
  { name: "4", val: 60 },
  { name: "5", val: 50 },
  { name: "6", val: 75 },
  { name: "7", val: 65 },
];

const Monthly: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden mt-5">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Monthly earnings
          </h3>
          <div className="bg-[#49beff] p-2.5 rounded-full text-white">
            <DollarSign size={20} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4">
          $6,820
        </h2>
        <div className="flex items-center gap-1 mt-2">
          <div className="bg-red-100 text-red-500 p-0.5 rounded-full">
            <ArrowDownRight size={14} />
          </div>
          <p className="text-sm font-bold text-slate-700 dark:text-gray-300">
            +9%
          </p>
          <p className="text-sm text-slate-400">than last year</p>
        </div>
      </div>

      {/* Area Chart */}
      <div className="h-20 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#49beff" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#49beff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="val"
              stroke="#49beff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorVal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Monthly;
