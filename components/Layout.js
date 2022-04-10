import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex dark ">
      <div className="w-2/12 dark:bg-red-300">
        <Sidebar />
      </div>
      <div className="w-10/12 lg:p-12 bg-white dark:bg-navy_blue-700 md:p-8 sm:p-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;
