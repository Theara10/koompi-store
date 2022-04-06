import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex">
      <div className="w-1/6 mr-16">
        <Sidebar />
      </div>
      <div className="w-full p-16">{children}</div>
    </div>
  );
}

export default Layout;
