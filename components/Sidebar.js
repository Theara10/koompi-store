import React from "react";
import SidebarRow from "./SidebarRow";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-lightgray-100 w-2/12 h-screen pt-6 fixed flex flex-col justify-between pb-8 dark:bg-navy_blue-800 ">
      <div>
        <div className="flex justify-center bg-lightgray-300 dark:bg-navy_blue-700 py-1 mx-6 rounded-md items-center">
          <input
            type="email"
            name="email"
            class=" p-1 w-2/3 bg-lightgray-300 dark:bg-navy_blue-700 outline-none shadow-sm border-none placeholder-lightgray-600 dark:placeholder-lightgray-100  rounded-md sm:text-sm "
            placeholder="Search"
          />
          <Image
            src={"/icons/search.png"}
            width="20"
            height="20"
            layout="fixed"
          />
        </div>

        <div className="mt-4">
          <Link href="/about">
            <SidebarRow title="Explore" icon="/icons/explore.png" />
          </Link>

          <SidebarRow title="KOOMPI Apps" icon="/icons/logo.png" />
          <SidebarRow title="Education" icon="/icons/education.png" />
          <Link href="/category">
            <SidebarRow title="Office" icon="/icons/office.png" />
          </Link>

          <SidebarRow title="Internet" icon="/icons/global.png" />
          <SidebarRow title="Graphics" icon="/icons/graphic.png" />
          <SidebarRow title="Developer Tools" icon="/icons/tool.png" />
          <SidebarRow title="Game" icon="/icons/game.png" />
          <SidebarRow title="Multimedia" icon="/icons/multimedia.png" />
          <SidebarRow title="Science" icon="/icons/science.png" />
          <SidebarRow title="Updates" icon="/icons/update.png" />
        </div>
      </div>

      <Link href="/about">
        <div className="flex items-center ml-6 cursor-pointer ">
          <ExclamationCircleIcon className="h-6 text-pelorous-500" />
          <p className="text-black-400 dark:text-lightgray-100 pl-2 font-medium">
            About
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
