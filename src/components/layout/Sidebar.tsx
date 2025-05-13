
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Gavel,
  Users,
  UserCog,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
};

const NavItem = ({ icon, label, to, isActive }: NavItemProps) => (
  <Link to={to} className="w-full">
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
        isActive
          ? "bg-secondary text-white"
          : "hover:bg-gray-100 hover:text-secondary"
      )}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  </Link>
);

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  
  const menuItems = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "داشبورد",
      to: "/",
    },
    {
      icon: <Gavel className="h-5 w-5" />,
      label: "مزایده‌ها",
      to: "/auctions",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "مشتریان",
      to: "/customers",
    },
    {
      icon: <UserCog className="h-5 w-5" />,
      label: "کارمندان",
      to: "/employees",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "گزارش‌ها",
      to: "/reports",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "تنظیمات",
      to: "/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed z-50 top-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-primary text-white border-none"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar Backdrop (Mobile) */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex flex-col w-64 bg-white border-l shadow-sm transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
          "md:w-72 md:static md:z-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-primary">سامانه مزایده</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="block md:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isActive={location.pathname === item.to}
            />
          ))}
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center justify-center w-full px-4 py-2 text-red-500 rounded-md hover:bg-red-50 transition-colors">
            <LogOut className="h-5 w-5 ml-2" />
            <span>خروج</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
