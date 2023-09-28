import React from "react";
import Transition from "../../transition";

const Ragnarok = () => {
  return (
    <Transition>
      <div className="p-4 sm:p-28 xl:p-42 bg-black">
        <section className="bg-black dark:bg-black">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1
                className="text-3xl font-semibold text-white lg:text-5xl mt-12 sm:mt-0"
                style={{ fontFamily: "akira" }}
              >
                RAGNAROK
              </h1>
              <p className="mt-6 text-white">GAMING MAYHEM</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className="flex sm:flex-row justify-center items-center  flex-col mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class VIII-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Agrim Gupta
                <br />
                Pratham Dhyani
                <br />
                Abhinav Kumar
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Theme
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Gaming
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
                Ragnarok is a 2-day event. The dates will be shared on the
                Discord Server.
                <br />
                Day 1: Round 1 (Online)
                <br />
                Day 2: Round 2 & 3 (Offline)
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                The game for round 1 is Valorant. The details for Round 1 i.e.
                the game mode and the timings will be shared on the Ragnarok
                Server itself.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                Rounds 2 & 3 will be held offline in the school premises on 26th
                October. Details regarding the same will be shared with the
                qualifiers of Round 1 through Discord only. Only team-based
                participation is permitted. No solo players are allowed in the
                competition.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Details regarding Round 2 will be declared on the discord server
                after Round 1 is finished. The usage of cheats, hacks, or any
                other third-party applications that give one an unfair advantage
                over their opponents will result in immediate disqualification.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Participants must use an acceptable username in the Tournament.
                If they fail to do it, the administration reserves the right to
                disqualify them.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                NOTE: All the participants are requested to join the WARTEX
                Event discord server for updates: https://discord.gg/BKE3CH5sMe
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default Ragnarok;
