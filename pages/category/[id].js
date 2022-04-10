import React from "react";
import Sidebar from "../../components/Sidebar";
import { StarIcon } from "@heroicons/react/solid";
import details from "../../data/application_details.json";

function index() {
  return (
    <div className="flex flex-col w-full">
      <section className=" flex flex-col w-full mr-8 border-b-2 dark:border-b-navy_blue-500 h-44">
        <div className="flex justify-between w-full">
          <div className="flex flex-row">
            <img src={details.image} className="h-24 w-auto" />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-navy_blue-700 dark:text-lightgray-100">
                {details.title}
              </h2>
              <p className="text-navy_blue-400 dark:text-lightgray-300">
                {details.category}
              </p>
              <p className="text-pelorous-500">{details.creator}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <button className=" pl-4 pr-4 pt-1 pb-1 bg-pelorous-500 text-white rounded-md">
              Install
            </button>
            <p className="mt-12 text-navy_blue-400 dark:text-lightgray-100">
              Version: {details.version}
            </p>
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
          <p className="text-navy_blue-400 dark:text-gray-100">45 ratings</p>
        </div>
      </section>

      <section className="mt-8 flex">
        <div className=" flex items-end justify-start w-full mr-4 h-96 rounded-md bg-[url('https://techcrunch.com/wp-content/uploads/2019/10/app-store-icon-1.jpg')] bg-cover"></div>
        <div className=" flex items-end justify-start w-full  h-96 rounded-md bg-[url('https://techcrunch.com/wp-content/uploads/2019/10/app-store-icon-1.jpg')] bg-cover"></div>
      </section>
      <section className="mt-8 border-b-2  text-navy_blue-700 dark:border-b-gray-500 pb-8 w-5/6 dark:text-gray-100">
        <p>{details.description}</p>
      </section>
      <section className="mt-8 border-b-2 dark:border-b-gray-500 pb-8">
        <h2 className=" text-2xl font-semibold text-navy_blue-700 dark:text-gray-100">
          Details
        </h2>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">Author</p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.author}
            </p>
          </div>
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">Size</p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.size}
            </p>
          </div>
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">category</p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.category}
            </p>
          </div>
        </div>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">License</p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.license}
            </p>
          </div>
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">Source</p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.source}
            </p>
          </div>
          <div>
            <p className="text-navy_blue-300 dark:text-gray-400">
              Documentation
            </p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.documentation}
            </p>
          </div>
        </div>
        <div className=" flex mt-6 w-2/3 flex-row justify-between">
          <div>
            <p className="text-navy_blue-100 dark:text-gray-400">
              Get Involved
            </p>
            <p className="text-navy_blue-700 dark:text-gray-100">
              {details.details.getinvolve}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pelorous-500 font-medium">Report a problem</p>
          <p className="text-pelorous-500 font-medium">Make a donation</p>
        </div>
      </section>
      <section className="mt-8 pb-8">
        <h2 className=" text-2xl font-semibold text-navy_blue-700 dark:text-gray-100">
          Reviews and Ratings
        </h2>
        {details.reviews.map((x) => {
          return (
            <div className="h-auto w-2/3 border-2 dark:border-navy_blue-500 mt-6 rounded-md p-4">
              <div className="flex justify-between">
                <div>
                  <div className="flex mr-2 ">
                    <StarIcon className="h-4 text-yellow-400" />
                    <StarIcon className="h-4 text-yellow-400" />
                    <StarIcon className="h-4 text-yellow-400" />
                    <StarIcon className="h-4 text-gray-300" />
                    <StarIcon className="h-4 text-gray-300" />
                  </div>
                  <p className="text-navy_blue-300 dark:text-lightgray-400">
                    by {x.name}
                  </p>
                </div>
                <p className="text-navy_blue-300 dark:text-lightgray-400">
                  {x.created_at}
                </p>
              </div>
              <p className="mt-4 text-navy_blue-700 dark:text-lightgray-100">
                {x.review}
              </p>
            </div>
          );
        })}

        <div className="flex mt-4">
          <p className="pt-1 pb-1 pl-2 pr-2 border-2 rounded-md text-navy_blue-400 dark:text-lightgray-100 dark:border-navy_blue-500">
            Show all review
          </p>
          <p className="pt-1 pb-1 pl-2 pr-2 ml-2 border-2 rounded-md text-navy_blue-400 dark:text-lightgray-100 dark:border-navy_blue-500">
            Write a review
          </p>
        </div>
      </section>
    </div>
  );
}

export default index;
