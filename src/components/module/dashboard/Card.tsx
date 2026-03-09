import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export interface IDashboardCard {
  icon: string;
  name: string;
  count: string | number;
  color: string;
  darkColor: string;
  textColor: string;
}

const Card: React.FC<{ item: IDashboardCard }> = ({ item }) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer",
        item.color,
        item.darkColor,
      )}
    >
      <div className="w-12 h-12 relative flex items-center justify-center">
        <Image
          width={48}
          height={48}
          alt={item.name}
          src={item.icon}
          className="object-contain"
        />
      </div>
      <p className={cn("text-sm font-medium mt-2", item.textColor)}>
        {item.name}
      </p>
      <h3 className={cn("text-2xl font-bold", item.textColor)}>{item.count}</h3>
    </div>
  );
};

export default Card;
