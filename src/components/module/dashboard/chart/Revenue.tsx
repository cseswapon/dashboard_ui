"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Grid2X2 } from "lucide-react";

const data = [
  { name: "16/08", eaning: 1500, expense: -2200 },
  { name: "17/08", eaning: 1500, expense: -1400 },
  { name: "18/08", eaning: 2300, expense: -2500 },
  { name: "19/08", eaning: 3200, expense: -1800 },
  { name: "20/08", eaning: 1800, expense: -500 },
  { name: "21/08", eaning: 900, expense: -2400 },
  { name: "22/08", eaning: 2800, expense: -1200 },
];

const Revenue: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800 w-full h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Revenue updates
          </h3>
          <p className="text-sm text-slate-400">Overview of Profit</p>
        </div>
        <select className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm outline-none cursor-pointer">
          <option>March 2022</option>
          <option>April 2022</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 h-75">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                domain={[-3000, 3000]}
                ticks={[-3000, -2000, -1000, 0, 1000, 2000, 3000]}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="eaning"
                fill="#5d87ff"
                radius={[4, 4, 0, 0]}
                barSize={8}
              />
              <Bar
                dataKey="expense"
                fill="#49beff"
                radius={[0, 0, 4, 4]}
                barSize={8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-48 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-500">
                <Grid2X2 size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                  $63,489.50
                </h2>
                <p className="text-xs text-slate-400">Total Earnings</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <div>
                <p className="text-xs text-slate-400">Earnings this month</p>
                <p className="text-sm font-bold text-slate-700 dark:text-gray-200">
                  $48,820
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <div>
                <p className="text-xs text-slate-400">Expense this month</p>
                <p className="text-sm font-bold text-slate-700 dark:text-gray-200">
                  $26,498
                </p>
              </div>
            </div>
          </div>

          <button className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            View full report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
