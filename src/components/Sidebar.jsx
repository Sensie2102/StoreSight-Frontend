// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, PieChart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar-container group h-full">
      <div className="sidebar h-full bg-white border-r shadow-sm w-16 group-hover:w-64 transition-all duration-300 overflow-hidden">
        <div className="p-4 border-b flex items-center h-16">
          <h1 className="text-xl font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            App Name
          </h1>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <LayoutDashboard className="h-5 w-5 min-w-[20px]" />
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/overview"
                className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <PieChart className="h-5 w-5 min-w-[20px]" />
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Overview
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
