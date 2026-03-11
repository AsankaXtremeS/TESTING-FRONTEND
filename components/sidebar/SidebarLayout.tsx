"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  CalendarDays,
  Settings,
  LogOut,
  PanelLeft,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/users/employer/dashboard", icon: LayoutDashboard },
  { label: "Candidates", href: "/users/employer/candidates", icon: Users },
  { label: "Job Posts", href: "/users/employer/job-posts", icon: MessageSquare },
  { label: "Interviews", href: "/users/employer/interviews", icon: CalendarDays },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 min-h-screen bg-white flex flex-col border-r border-gray-100 shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
        <span className="text-2xl font-bold text-gray-900 tracking-tight">Talvio</span>
        <button className="text-gray-400 hover:text-gray-600">
          <PanelLeft size={18} />
        </button>
      </div>

      {/* Workspace */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
              R
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Rackspace</p>
              <p className="text-xs text-gray-400">Team · 100 Members</p>
            </div>
          </div>
          <Settings size={15} className="text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 mb-3">
          Main Menu
        </p>
        <ul className="space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon size={17} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="px-4 pb-5">
        <button className="w-full flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-semibold py-3 rounded-xl transition-colors">
          Sign Out
          <LogOut size={15} />
        </button>
      </div>
    </aside>
  );
}