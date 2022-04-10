import Link from "next/link";
import React from "react";
import Sidebar from "../../components/Sidebar";
import SingleApp from "../../components/SingleApp";

import data from "../../data/applications.json";

function index() {
  return (
    <div className="flex flex-col w-full mb-10">
      <section className="flex flex-col bg-gray-100 items-start p-5 justify-end w-full h-[400px] rounded-xl bg-[url('/discover.jpg')] bg-cover">
        <h2 className="text-3xl text-white">Home Banner</h2>
        <div className="w-96">
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </section>
      <section className="mt-12 ">
        <h2 className="text-2xl font-medium text-navy_blue-700 dark:text-gray-100">
          Popular Apps
        </h2>
        <div className="flex flex-wrap justify-between">
          {data.map((x) => {
            return (
              <Link href={"/category/" + x.id}>
                <SingleApp
                  name={x.title}
                  category={x.category}
                  image={x.image}
                  id={x.id}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default index;
