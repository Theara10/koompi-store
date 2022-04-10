import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import SingleApp from "../components/SingleApp";
import data from "../data/applications.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KOOMPI Store</title>
      </Head>

      <main className="flex dark flex-col w-full">
        <section className="flex flex-col bg-gray-100 items-start p-5 justify-end w-full h-[400px]  rounded-xl bg-[url('/discover.jpg')] bg-cover">
          <h2 className="text-2xl text-white font-medium">Home Banner</h2>
          <div className="w-96">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <img src="/discover.jpg" className="h-6 w-auto" />
        </section>
        <section className="mt-4 flex">
          <div className=" flex items-end justify-start w-full mr-4 h-[300px] rounded-xl bg-[url('/os.jpeg')] bg-cover object-cover">
            <h2 className="text-2xl text-white p-4 font-medium">KOOMPI Apps</h2>
          </div>
          <div className=" flex items-end justify-start w-full h-[300px] rounded-xl bg-[url('/update.jpg')] bg-cover object-fill">
            <h2 className=" text-2xl text-white p-4 font-medium">Updates</h2>
          </div>
        </section>

        <section className="mt-8 ">
          <h2 className="text-xl font-medium dark:text-gray-100">
            Popular Apps
          </h2>
          <div className="flex w-full flex-wrap lg:flex-row md:flex-col sm:flex-col">
            {data.map((x) => {
              console.log(x.id);
              return (
                <SingleApp
                  name={x.title}
                  category={x.category}
                  image={x.image}
                  id={x.id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
