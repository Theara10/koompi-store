import React from "react";
import Sidebar from "../../components/Sidebar";
import { StarIcon } from "@heroicons/react/solid";

function index() {
  return (
    <div className="flex flex-col w-full">
      <section className=" flex flex-col w-full mr-8 border-b-2 h-44">
        <div className="flex justify-between w-full">
          <div className="flex flex-row">
            <img
              src="https://www.citypng.com/public/uploads/small/31631799232q74jw0cko5c1uvgpelqzssgha5zfscvnjre0b6hslsfb9egnfnsqgwghla9bsd25hbxbey6rd4n3gjtdlurikyskupiincxhuqit.png"
              className="h-24 w-auto"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-navy_blue-400">
                LibreOffice
              </h2>
              <p className="text-navy_blue-100">Documentation app</p>
              <p className="text-pelorous-500">The LibreOffice team</p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className=" pl-4 pr-4 pt-1 pb-1 bg-pelorous-500 text-white rounded-md">
              Install
            </button>
            <p className="mt-12 text-navy_blue-100">Version: 3.0.3</p>
          </div>
        </div>
        <div className="flex items-center mb-8 mt-2">
          <div className="flex mr-2 ">
            <StarIcon className="h-4 text-yellow-400" />
            <StarIcon className="h-4 text-yellow-400" />
            <StarIcon className="h-4 text-yellow-400" />
            <StarIcon className="h-4 text-gray-300" />
            <StarIcon className="h-4 text-gray-300" />
          </div>
          <p className="text-navy_blue-100">45 ratings</p>
        </div>
      </section>

      <section className="mt-8 flex">
        <div className=" flex items-end justify-start w-full mr-4 h-80 rounded-md bg-[url('https://techcrunch.com/wp-content/uploads/2019/10/app-store-icon-1.jpg')]"></div>
        <div className=" flex items-end justify-start w-full  h-80 rounded-md bg-[url('https://techcrunch.com/wp-content/uploads/2019/10/app-store-icon-1.jpg')]"></div>
      </section>
      <section className="mt-8 border-b-2 pb-8 w-5/6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </section>
      <section className="mt-8 border-b-2 pb-8">
        <h2 className=" text-2xl font-semibold">Details</h2>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
        </div>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
        </div>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div>
            <p className="text-navy_blue-100">Author</p>
            <p>Phal Brilliant</p>
          </div>
          <div className="">
            <p className="text-navy_blue-100 ">Author</p>
            <p>Phal Brilliant</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pelorous-500 font-medium">Report a problem</p>
          <p className="text-pelorous-500 font-medium">Make a donation</p>
        </div>
      </section>
      <section className="mt-8 pb-8">
        <h2 className=" text-2xl font-semibold">Reviews and Ratings</h2>
        <div className="h-auto w-2/3 border-2 mt-6 rounded-md p-4">
          <div className="flex justify-between">
            <div>
              <div className="flex mr-2 ">
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-yellow-400" />
                <StarIcon className="h-4 text-gray-300" />
                <StarIcon className="h-4 text-gray-300" />
              </div>
              <p className="text-navy_blue-100">By Phal Brilliant</p>
            </div>
            <p className="text-navy_blue-100">22 April, 2022</p>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="flex mt-4">
          <p className="pt-1 pb-1 pl-2 pr-2 border-2 rounded-md">
            Show all review
          </p>
          <p className="pt-1 pb-1 pl-2 pr-2 ml-2 border-2 rounded-md">
            Write a review
          </p>
        </div>
      </section>
    </div>
  );
}

export default index;
