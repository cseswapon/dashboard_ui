"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "2022", value: 75 },
  { name: "2021", value: 25 },
];
const COLORS = ["#5d87ff", "#ecf2ff"];

const Yearnly: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
        Yearly Breakup
      </h3>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mt-4">
            $36,358
          </h2>
          <div className="flex items-center gap-1 mt-2">
            <div className="bg-green-100 text-green-600 p-0.5 rounded-full">
              <ArrowUpRight size={14} />
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-gray-300">
              +9%
            </p>
            <p className="text-sm text-slate-400">than last year</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5d87ff]"></span>
              <span className="text-sm text-slate-400">2022</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ecf2ff]"></span>
              <span className="text-sm text-slate-400">2021</span>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={55}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Yearnly;
