import Card, { IDashboardCard } from "@/components/module/dashboard/Card";
import React from "react";

const DashboardPage: React.FC = () => {
  const cardMenu: IDashboardCard[] = [
    {
      name: "Employees",
      icon: "/dashboard/employe.png",
      count: 96,
      color: "bg-[#EDF2FF]",
      darkColor: "dark:bg-[#EDF2FF1A]", // ১০% অপাসিটি
      textColor: "text-[#5D87FF]",
    },
    {
      name: "Clients",
      icon: "/dashboard/client.png",
      count: "3,650",
      color: "bg-[#FEF5E5]",
      darkColor: "dark:bg-[#FEF5E51A]",
      textColor: "text-[#FFAE1F]",
    },
    {
      name: "Projects",
      icon: "/dashboard/project.png",
      count: 356,
      color: "bg-[#E8F7FF]",
      darkColor: "dark:bg-[#E8F7FF1A]",
      textColor: "text-[#49BEFF]",
    },
    {
      name: "Events",
      icon: "/dashboard/event.png",
      count: 696,
      color: "bg-[#FDEDE8]",
      darkColor: "dark:bg-[#FDEDE81A]",
      textColor: "text-[#FA896B]",
    },
    {
      name: "Payroll",
      icon: "/dashboard/payroll.png",
      count: "$96 k",
      color: "bg-[#E6FFFA]",
      darkColor: "dark:bg-[#E6FFFA1A]",
      textColor: "text-[#13DEB9]",
    },
    {
      name: "Reports",
      icon: "/dashboard/report.png",
      count: 59,
      color: "bg-[#EBF3FE]",
      darkColor: "dark:bg-[#EBF3FE1A]",
      textColor: "text-[#539BFF]",
    },
  ];

  return (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {cardMenu.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
