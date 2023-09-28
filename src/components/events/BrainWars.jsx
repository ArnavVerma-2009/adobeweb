import React from "react";
import Transition from "../../transition";

const BrainWars = () => {
  return (
    <Transition>
      <div className="p-4 sm:p-28 xl:p-42 bg-black">
        <section className="bg-black dark:bg-black">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1
                className="text-3xl font-semibold  text-white lg:text-4xl mt-12 sm:mt-0"
                style={{ fontFamily: "akira" }}
              >
                BRAIN WARS
              </h1>
              <p className="mt-6 text-white">TECH QUIZ</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://i.pinimg.com/736x/28/48/62/284862db346c74d669e427d713edb30e.jpg"
              />
            </div>
          </div>
        </section>

        <div className=" bg-black flex justify-center flex-col">
          <div className="flex sm:flex-row justify-center items-center  flex-col mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class X-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Parth Aggarwal
                <br />
                Jai Vikramaditya Raghav
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Theme
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                IT, tech, space tech, etc.
              </p>
            </div>
          </div>
          <h1 className="text-center text-[#007bc4] mb-14 text-4xl heading">
            RULES
          </h1>
          <ol className="relative">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Round I-Written Questionnaire
                <br />
                Round II- Buzzer Round
                <br />
                Round III- Quantum Entanglement
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Surprise Rules for Round 3 to be revealed on the day itself.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                The questions will include IT, tech, space tech, etc., along
                with pop culture [movies, shows, and comics].Questions can come
                from anywhere.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                A good preparation tip would be to read up on quiz material and
                books that can be found easily online and be up-to-date with the
                latest news and buzz in the tech sector.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default BrainWars;
