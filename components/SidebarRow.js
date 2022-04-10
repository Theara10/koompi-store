import React from "react";
import Image from "next/image";
// import {} from "../lib/img/fb";
import Link from "next/link";

function SidebarRow({ title, icon, link }) {
  return (
    <Link href={"/category"}>
      <div className="flex  items-center pl-6 p-2 hover:bg-lightgray-300 mx-4 rounded-md dark:hover:bg-navy_blue-700 cursor-pointer ">
        <Image src={icon} width="20" height="20" layout="fixed" />
        <h2 className="ml-4 selection:font-medium text-black-500 dark:text-lightgray-100">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default SidebarRow;
