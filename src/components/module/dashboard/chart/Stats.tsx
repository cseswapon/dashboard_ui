"use client";

import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  AreaChart,
  Area,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, LayoutGrid } from "lucide-react";
import Social from "../Social";
import BestSellingProducts from "../BestSell";

const salaryData = [
  { month: "Apr", val: 40 },
  { month: "May", val: 70 },
  { month: "Jun", val: 50 },
  { month: "Jul", val: 65 },
  { month: "Aug", val: 30 },
  { month: "Spe", val: 35 },
];

const customerData = [
  { val: 30 },
  { val: 45 },
  { val: 35 },
  { val: 55 },
  { val: 40 },
];

const projectData = [
  { val: 20 },
  { val: 40 },
  { val: 30 },
  { val: 60 },
  { val: 45 },
  { val: 70 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Employee salary
        </h3>
        <p className="text-sm text-slate-400 mb-4">Every month</p>

        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salaryData}>
              <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                {salaryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.month === "Jul" ? "#5d87ff" : "#ebf3fe"}
                  />
                ))}
              </Bar>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#94a3b8" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between mt-6 pt-4 border-t border-gray-50 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-500">
              <LayoutGrid size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Total Sales</p>
              <p className="font-bold">$36,358</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-slate-400">
              <LayoutGrid size={18} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Expenses</p>
              <p className="font-bold">$5,296</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white dark:bg-gray-900 p-6  rounded-lg border border-gray-100 dark:border-gray-800">
            <p className="text-slate-400 text-sm">Customers</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">36,358</h2>
              <span className="flex items-center text-red-500 text-xs font-bold">
                <ArrowDownRight size={14} />
                +9%
              </span>
            </div>
            <div className="h-16 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={customerData}>
                  <Area
                    type="monotone"
                    dataKey="val"
                    stroke="#49beff"
                    fill="#49beff20"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
            <p className="text-slate-400 text-sm">Projects</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">78,298</h2>
              <span className="flex items-center text-green-500 text-xs font-bold">
                <ArrowUpRight size={14} />
                +9%
              </span>
            </div>
            <div className="h-16 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectData}>
                  <Bar
                    dataKey="val"
                    fill="#5d87ff"
                    radius={[2, 2, 0, 0]}
                    barSize={4}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 col-span-2">
            <Social />
          </div>
        </div>
      </div>
      <div>
        <BestSellingProducts />
      </div>
    </div>
  );
};

export default Stats;
