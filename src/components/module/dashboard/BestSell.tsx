"use client";

import React from "react";
import { Card, Progress, Typography } from "antd";
import Image from "next/image";
import { cn } from "@/lib/utils"; // আপনার cn utility, না থাকলে path ঠিক করুন

const { Title, Text } = Typography;

const BestSellingProducts: React.FC = () => {
  return (
    <Card
      className="rounded-lg border-none h-full relative"
      style={{ backgroundColor: "#5d87ff", padding: 0 }}
      styles={{ body: { padding: 0 } }}
    >
      <div className="p-8 pb-10">
        <Title
          level={4}
          className="m-0! font-bold text-[18px]"
          style={{ color: "white", margin: 0, fontWeight: 700 }}
        >
          Best Selling Products
        </Title>
        <Text
          className="text-xs! opacity-80!"
          style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "13px" }}
        >
          Overview 2022
        </Text>
      </div>

      <div className="px-6 relative h-48 -mt-30">
        <Image
          width={400}
          height={200}
          alt="onlinevideo"
          src="/onlinevideo.png"
          className="w-full object-contain"
        />
      </div>

      <div className="bg-white m-6 p-8 rounded-2xl space-y-7 shadow-lg relative z-10">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex flex-col">
              <Text
                className="font-bold text-slate-800 text-[15px]"
                style={{ fontWeight: 700, color: "#111827" }}
              >
                MaterialPro Dashboard
              </Text>
              <Text
                type="secondary"
                className="text-xs"
                style={{ color: "#6b7280", fontSize: "13px" }}
              >
                $23,568
              </Text>
            </div>
            <div
              className="bg-[#ecf2ff] px-3 py-1 rounded text-[#5d87ff] font-bold text-xs"
              style={{
                backgroundColor: "#ecf2ff",
                color: "#5d87ff",
                fontWeight: 700,
              }}
            >
              55%
            </div>
          </div>
          <Progress
            percent={55}
            showInfo={false}
            strokeColor="#5d87ff"
            trailColor="#f1f5f9"
            strokeLinecap="round"
            strokeWidth={4}
            className="m-0!"
          />
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex flex-col">
              <Text
                className="font-bold text-slate-800 text-[15px]"
                style={{ fontWeight: 700, color: "#111827" }}
              >
                Flexy Admin Template
              </Text>
              <Text
                type="secondary"
                className="text-xs"
                style={{ color: "#6b7280", fontSize: "13px" }}
              >
                $23,568
              </Text>
            </div>
            <div
              className="bg-[#e6fffb] px-3 py-1 rounded text-[#49beff] font-bold text-xs"
              style={{
                backgroundColor: "#e6fffb",
                color: "#49beff",
                fontWeight: 700,
              }}
            >
              24%
            </div>
          </div>
          <Progress
            percent={24}
            showInfo={false}
            strokeColor="#49beff"
            trailColor="#f1f5f9"
            strokeLinecap="round"
            strokeWidth={4}
            className="m-0!"
          />
        </div>
      </div>
    </Card>
  );
};

export default BestSellingProducts;
