import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

AOS.init();

export default function Sponsors() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <section className="relative pt-28   bg-blueGray-100 overflow-hidden bg-black dark:bg-[#ebe2e2]">
        <div className="relative z-10 container px-4 mx-auto">
          <h1
            className="mb-2 text-4xl drop-shadow-[0_0px_35px_#007bc4] text-[#007bc4] text-center font-semibold uppercase tracking-px heading"
            data-aos="fade-up"
          >
            THE SUPPORTERS
          </h1>

          <p
            className="mb-14 text-sm text-white text-center font-semibold uppercase tracking-px dark:text-black"
            data-aos="fade-up"
          >
            THE OFFICAL SPONSORS
          </p>
          <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000]  rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <img src="" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              <div
                className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff24] dark:bg-[#000] rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-4  bg-blueGray-100 overflow-hidden bg-transparent">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className=" text-white px-4 py-16 mb-4 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-24 sm:gap-0 sm:mt-20 sm:grid-cols-2">
              <div className="text-center">
                <h6 className="text-5xl font-bold text-deep-purple-accent-400">
                  {counterOn && (
                    <CountUp
                      className="akira"
                      start={0}
                      end={850}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </h6>
                <p
                  className="font-bold akira"
                  data-aos="fade-up"
                  data-aos-druation="1000ms"
                >
                  Participants
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-5xl font-bold text-deep-purple-accent-400">
                  {counterOn && (
                    <CountUp
                      className="akira"
                      start={0}
                      end={55}
                      duration={3}
                      delay={0}
                    >
                      
                    </CountUp>
                  )}{" "}+
                </h6>
                <p
                  className="font-bold akira"
                  data-aos="fade-up"
                  data-aos-druation="1000ms"
                >
                  Schools
                </p>
              </div>
            </div>
            <h1
              className="akira text-center sm:text-5xl text-3xl font-bold mt-20"
              data-aos="fade-up"
              data-aos-druation="1000ms"
            >
              1 MEGA COMPETITION
            </h1>
          </div>
        </ScrollTrigger>
      </section>
    </div>
  );
}
