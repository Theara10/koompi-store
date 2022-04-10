import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

function SingleApp({ name, category, image, id, update, uninstall }) {
  return (
    <div className=" flex lg:w-5/12 md:w-full sm:w-full border-b-2 pb-3 mr-20 dark:border-navy_blue-500">
      <div className="mt-6 flex justify-between w-full">
        <Link href={"/category/" + id}>
          <div className="flex flex-row cursor-pointer">
            <Image
              src={image}
              className=" rounded-2xl"
              height="80px"
              width="80px"
              alt="app-logo-image"
            />

            <div className="ml-4">
              <h2 className="text-lg font-medium text-navy_blue-700 dark:text-lightgray-100">
                {name}
              </h2>
              <p className=" text-navy_blue-400 dark:text-gray-300">
                {category}
              </p>
              <div className="flex">
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-gray-300" />
                <StarIcon className="h-4 text-gray-300" />
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-1">
          <button className=" text-lg pl-3 pr-3 pt-0.5 pb-0.5  bg-pelorous-500 text-white rounded-md">
            {(update && "Update") || (uninstall && "Uninstall") || "Install"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleApp;
