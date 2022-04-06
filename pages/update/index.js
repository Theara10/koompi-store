import React from "react";
import SingleApp from "../../components/SingleApp";

function index() {
  return (
    <div className="mt-12">
      <section className=" pl-20 pr-20 ">
        <div className="border-b-2 pb-4">
          <h2 className="text-3xl font-medium">Updates</h2>
        </div>
      </section>
      <section className="flex flex-col w-full pl-20 pr-20 mt-10 mb-10">
        <h2 className="text-2xl font-medium">Available Updates</h2>
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
      <section className="flex flex-col w-full pl-20 pr-20 mt-10 mb-10">
        <h2 className="text-2xl font-medium">Installed apps</h2>
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
