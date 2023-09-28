// import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

AOS.init();

export default function Schedule() {
  return (
    <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] sf flex flex-col justify-center items-center ">
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="text-center drop-shadow-[0_0px_35px_#007bc4] text-[#007bc4]  text-4xl mb-4 heading"
      >
        THE TIMELINE
      </h1>
      <Link
        to="/Schedule"
        data-aos="fade-up"
        data-aos-duration="750"
        className="flex justify-center w-max transition duration-500 dark:text-black rounded-3xl mb-14 px-3 py-1 text-base font-semibold leading-7 text-white text-center uppercase border-[2px] hover:bg-gray-50 hover:text-black "
      >
        SEE THE FULL SCHEDULE
      </Link>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-100 dark:text-black"
          >
            OPENING CEREMONY
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            26 OCTOBER
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300  dark:text-black"
          >
            All schools must report by 8:30 AM. The opening ceremony will begin
            at 9:00AM. The participants will be informed about the important
            guidelines prior to the event.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-[#007bc4] drop-shadow-[0_0px_20px_#007bc4] rounded-full mt-1.5 -left-1.5 border border-[#007bc4]"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-300 dark:text-black"
          >
            THE COMPETITON IS ON
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            8:00AM to 2:00PM{" "}
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300  dark:text-black"
          >
            All the event heads will lead the participants to their respective
            events. All the events would come to an end by 2:00PM.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-[#007bc4] drop-shadow-[0_0px_20px_#007bc4] rounded-full mt-1.5 -left-1.5 border border-[#007bc4]"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-300 dark:text-black"
          >
            THE CHAMPIONS ARE ANNOUNCED
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            2:15PM
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300  dark:text-black"
          >
            The valedictory ceremony will take place and the winners of the
            events will be announced.
          </p>
        </li>
      </ol>
    </div>
  );
}
