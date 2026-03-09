"use client";

import React, { useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
import { Button } from "antd";
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      type="default"
      shape="circle"
      icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dark:bg-primary/10! border-border text-foreground dark:text-white! hover:text-primary transition-all duration-300"
    />
  );
};

export default ThemeToggle;
