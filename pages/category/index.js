import React from "react";
import Sidebar from "../../components/Sidebar";
import SingleApp from "../../components/SingleApp";

function index() {
  return (
    <div className="flex flex-col w-full mb-10">
      <section className="flex flex-col bg-gray-100 items-start p-5 justify-end w-full h-[500px] rounded-xl bg-[url('/discover.jpg')]">
        <h2 className="text-3xl text-white">Home Banner</h2>
        <div className="w-96">
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </section>
      <section className="mt-12 ">
        <h2 className="text-3xl font-medium">Popular Apps</h2>
        <div className="flex">
          <SingleApp
            name="LibreOffice Writer"
            description="Documentation app"
          />
          <SingleApp name="LibreOffice Calc" description="Documentation app" />
        </div>
        <div className="flex">
          <SingleApp
            name="LibreOffice Writer"
            description="Documentation app"
          />
          <SingleApp name="LibreOffice Calc" description="Documentation app" />
        </div>
        <div className="flex">
          <SingleApp
            name="LibreOffice Writer"
            description="Documentation app"
          />
          <SingleApp name="LibreOffice Calc" description="Documentation app" />
        </div>
      </section>
    </div>
  );
}

export default index;
