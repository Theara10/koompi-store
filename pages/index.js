import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import SingleApp from "../components/SingleApp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KOOMPI Store</title>
      </Head>

      <main className="flex flex-col w-full">
        <section className="flex flex-col bg-gray-100 items-start p-5 justify-end w-full h-[500px]  rounded-xl bg-[url('/discover.jpg')] bg-cover">
          <h2 className="text-3xl text-white font-medium">Home Banner</h2>
          <div className="w-96">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <img src="/discover.jpg" className="h-6 w-auto" />
        </section>
        <section className="mt-8 flex">
          <div className=" flex items-end justify-start w-full mr-8 h-[400px] rounded-xl bg-[url('/os.jpeg')] bg-cover object-cover">
            <h2 className="text-3xl text-white p-4 font-medium">KOOMPI Apps</h2>
          </div>
          <div className=" flex items-end justify-start w-full h-[400px] rounded-xl bg-[url('/update.jpg')] bg-cover object-fill">
            <h2 className=" text-3xl text-white p-4 font-medium">Updates</h2>
          </div>
        </section>

        <section className="mt-8 ">
          <h2 className="text-3xl font-medium">Popular Apps</h2>
          <div className="flex">
            <SingleApp
              name="LibreOffice Writer"
              description="Documentation app"
            />
            <SingleApp
              name="LibreOffice Calc"
              description="Documentation app"
            />
          </div>
          <div className="flex">
            <SingleApp
              name="LibreOffice Writer"
              description="Documentation app"
            />
            <SingleApp
              name="LibreOffice Calc"
              description="Documentation app"
            />
          </div>
          <div className="flex">
            <SingleApp
              name="LibreOffice Writer"
              description="Documentation app"
            />
            <SingleApp
              name="LibreOffice Calc"
              description="Documentation app"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
