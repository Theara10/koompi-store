import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function SingleApp({ name, description }) {
  return (
    <div className=" flex w-full mr-20  border-b-2 pb-3 ">
      <div className="mt-6 flex justify-between w-full">
        <div className="flex flex-row">
          <Image
            src="https://www.citypng.com/public/uploads/small/31631799232q74jw0cko5c1uvgpelqzssgha5zfscvnjre0b6hslsfb9egnfnsqgwghla9bsd25hbxbey6rd4n3gjtdlurikyskupiincxhuqit.png"
            className=" rounded-2xl"
            height="100px"
            width="100px"
            alt="app-logo-image"
          />

          <div className="ml-4">
            <h2 className="text-2xl font-medium text-navy_blue-400">{name}</h2>
            <p className="text-lg text-navy_blue-100">{description}</p>
            <div className="flex">
              <StarIcon className="h-4 text-yellow-400" />
              <StarIcon className="h-4 text-yellow-400" />
              <StarIcon className="h-4 text-yellow-400" />
              <StarIcon className="h-4 text-gray-300" />
              <StarIcon className="h-4 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="mt-1">
          <button className=" text-lg pl-3 pr-3 pt-0.5 pb-0.5  bg-pelorous-500 text-white rounded-md">
            Install
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleApp;
