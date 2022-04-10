import React from "react";
import SingleApp from "../../components/SingleApp";
import data from "../../data/applications.json";

function index() {
  return (
    <div>
      <section>
        <div className="border-b-2 pb-4 dark:border-b-gray-500">
          <h2 className="text-3xl font-medium dark:text-gray-100">Updates</h2>
        </div>
      </section>
      <section className="flex flex-col w-full mt-10 mb-10">
        <h2 className="text-2xl font-medium dark:text-gray-100">
          Available Updates
        </h2>
        <div className="flex w-full flex-wrap">
          {data.map((x) => {
            return (
              <SingleApp
                name={x.title}
                category={x.category}
                image={x.image}
                update={"update"}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col w-full mt-10 mb-10">
        <h2 className="text-2xl font-medium dark:text-gray-100">
          Installed apps
        </h2>
        <div className="flex w-full flex-wrap">
          {data.map((x) => {
            return (
              <SingleApp
                name={x.title}
                category={x.category}
                image={x.image}
                uninstall={"uninstall"}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default index;
