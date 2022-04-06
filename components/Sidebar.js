import React from "react";
import SidebarRow from "./SidebarRow";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-gray-100 w-1/6 h-screen pt-6 fixed flex flex-col justify-between pb-8  ">
      <div>
        <div className="flex ml-4 items-center rounded-sm bg-gray-200 p-1 w-4/5 justify-between">
          <input
            className="bg-transparent outline-none placeholder-gray-500 items-center w-3/4 ml-1"
            type="text"
            placeholder="Search"
          />

          <img
            src="https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640"
            width="20"
            height="20"
            layout="fixed"
          />
        </div>

        <div className="mt-4">
          <Link href="/">Home</Link>
          <Link href="/category">category</Link>
          <Link href="/detail">detail</Link>

          <Link href="/about">about</Link>
          <Link href="/update">upate</Link>

          <Link href="/about">
            <SidebarRow
              title="Explore"
              icon="/icons/explore.png"
              className="cursor-pointer"
            />
          </Link>

          <SidebarRow title="KOOMPI Apps" icon="/icons/tool.png" />
          <SidebarRow title="Education" icon="/education.png" />
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
        <div className="flex items-center ml-6 cursor-pointer">
          <ExclamationCircleIcon className="h-6 text-pelorous-500" />
          <p className="text-black-400 pl-2 font-medium">About</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
