import React from "react";
import AOS from "aos";

AOS.init();

export default function Guidelines() {
  return (
    <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="drop-shadow-[0_0px_35px_#c640ff] text-center text-[#c640ff] mb-14 text-4xl heading"
      >
        THE AIM OF DIGITAL INDIA
      </h1>
      <ol className="relative">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#c640ff] bg-[#c640ff] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            The motto of the Digital India Mission is 'Power to Empower'. There
            are three core components to the Digital India initiative. They are
            digital infrastructure creation, digital delivery of services, and
            digital literacy.{" "}
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#c640ff] bg-[#c640ff] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            To provide high-speed internet in all gram panchayats.{" "}
          </p>
        </li>
        <li className="ml-4 mb-10">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#c640ff] bg-[#c640ff] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            To provide easy access to Common Service Centre (CSC) in all the
            locality.{" "}
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#c640ff] bg-[#c640ff] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            Digital India is an initiative that combines a large number of ideas
            and thoughts into a single, comprehensive vision so that each of
            them is seen as part of a larger goal.{" "}
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#c640ff] bg-[#c640ff] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            Digital India Mission is an initiative that encompasses plans to
            connect the rural areas of the country with high-speed internet
            networks. Public Internet Access Programme is one among the nine
            pillars of digital India.
          </p>
        </li>
      </ol>
    </div>
  );
}
