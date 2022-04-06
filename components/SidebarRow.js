import React from "react";
import Image from "next/image";
// import {} from "../lib/img/fb";
import Link from "next/link";

function SidebarRow({ title, icon, link }) {
  return (
    <div className="flex  items-center pl-6 p-2 hover:bg-gray-200 ">
      <Image src={icon} width="24" height="24" layout="fixed" />
      <h2 className="ml-2 font-medium text-black-400 text-lg">{title}</h2>
    </div>
  );
}

export default SidebarRow;
