import React from "react";
import Sidebar from "../../components/Sidebar";

function index() {
  return (
    <div className="flex flex-col  w-full pl-20 pr-20 items-center">
      <section className=" flex  flex-col w-3/6 mt-12 border-b-2  ">
        <div className="flex flex-row  pb-4">
          <img
            src="https://avatars.githubusercontent.com/u/49678156?s=280&v=4"
            className="h-24 w-auto"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-navy_blue-400">
              KOOMPI Store 0.0.1
            </h2>
            <p className="text-navy_blue-100">A store for applicaitons</p>
            <p className="text-pelorous-500">Get involved</p>
          </div>
        </div>
      </section>
      <section className="w-3/6 mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-medium">Copyright</h2>
          <p>@2022 KOOMPI Team</p>
          <p>License: Open-source</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-medium">Library in use</h2>
          <p>KDE framework 5.91.0</p>
          <p>License: Open-source</p>
        </div>
      </section>
    </div>
  );
}

export default index;
