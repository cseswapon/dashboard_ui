import {
  ShoppingBag,
  Monitor,
  ShoppingCart,
  MessageSquare,
  Users,
  FileText,
  Calendar,
  UserCircle,
  Edit,
  LucideIcon,
} from "lucide-react";

export interface SubMenuItem {
  name: string;
  href?: string;
}

export interface SidebarItem {
  name: string;
  icon: LucideIcon;
  badge?: string;
  badgeColor?: string;
  variant?: "solid" | "outline";
  disabled?: boolean;
  hasSubmenu?: boolean;
  subItems?: SubMenuItem[];
  subtext?: string;
}

export interface MenuGroup {
  title: string;
  items: SidebarItem[];
}

export const menuGroups: MenuGroup[] = [
  {
    title: "DASHBOARDS",
    items: [
      { name: "Modern", icon: ShoppingBag },
      {
        name: "Analytical",
        icon: Monitor,
        badge: "9",
        badgeColor: "bg-cyan-400",
      },
      { name: "eCommerce", icon: ShoppingCart },
    ],
  },
  {
    title: "APPLICATIONS",
    items: [
      { name: "Chat", icon: MessageSquare },
      {
        name: "Users",
        icon: Users,
        hasSubmenu: true,
        subItems: [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }],
      },
      { name: "Note", icon: FileText },
      { name: "Calendar", icon: Calendar },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        name: "Avatar",
        icon: UserCircle,
        badge: "Coded",
        badgeColor: "bg-cyan-400",
      },
      {
        name: "Outline",
        icon: Edit,
        badge: "Outline",
        variant: "outline",
      },
      {
        name: "Basic",
        icon: Monitor,
        badge: "9",
        badgeColor: "bg-cyan-400",
        subtext: "8+ Basic Components",
      },
    ],
  },
];

export const sideBarTranslations: any = {
  en: {
    DASHBOARDS: "DASHBOARDS",
    Modern: "Modern",
    Analytical: "Analytical",
    eCommerce: "eCommerce",
    APPLICATIONS: "APPLICATIONS",
    Chat: "Chat",
    Users: "Users",
    Note: "Note",
    Calendar: "Calendar",
    OTHERS: "OTHERS",
    Avatar: "Avatar",
    Outline: "Outline",
    Basic: "Basic",
  },
  bn: {
    DASHBOARDS: "ড্যাশবোর্ড",
    Modern: "মডার্ন",
    Analytical: "অ্যানালিটিক্যাল",
    eCommerce: "ই-কমার্স",
    APPLICATIONS: "অ্যাপ্লিকেশন",
    Chat: "চ্যাট",
    Users: "ব্যবহারকারী",
    Note: "নোট",
    Calendar: "ক্যালেন্ডার",
    OTHERS: "অন্যান্য",
    Avatar: "অ্যাভাটার",
    Outline: "আউটলাইন",
    Basic: "বেসিক",
  },
  ar: {
    DASHBOARDS: "لوحات القيادة",
    Modern: "حديث",
    Analytical: "تحليلي",
    eCommerce: "تجارة إلكترونية",
    APPLICATIONS: "التطبيقات",
    Chat: "دردشة",
    Users: "المستخدمين",
    Note: "ملاحظة",
    Calendar: "التقويم",
    OTHERS: "أخرى",
    Avatar: "الصورة الرمزية",
    Outline: "مخطط",
    Basic: "أساسي",
  },
};
