import React from "react";
import image from "/code.png";
import { Link } from "react-router-dom";
import Transition from "../../transition";

const Equinox = () => {
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
                EQUINOX
              </h1>
              <p className="mt-6 text-white">
                WEBSITE DEVELOPMENT USING VARIOUS LANGUAGES
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src={image}
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className="flex sm:flex-row justify-center items-center flex-col mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class VI-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Soumya Pandey
                <br />
                Riddhi Goyal
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Theme
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Artificial Intelligence
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
                All the teams will be invited to showcase their websites in the
                offline finals followed by an interview.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                The theme is AI. Now, this is a bit hazy ? However, we want you
                to think beyond the box and come up with something you truly
                would preach for. Something you would use, buy, or live if you
                were in the position to do so.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                For each deliverable, the following are strictly permissible:{" "}
                <br />
                <br />
                Development: <br /> I.Create a website based on the prompt and
                deploy it on the web. <br /> II.Only Google typefaces are
                permitted. <br /> III.Premade templates are not allowed. <br />{" "}
                IV.You are free to use any language such as HTML, CSS, python,{" "}
                or JavaScript but giving credit is compulsory
                <br /> V.You can use standard libraries like Bootstrap and{" "}
                tensorflow.js.
                <span>
                  <br />
                  <br />
                  Pitch Deck:
                  <br />
                  I.Create a synopsis of your concept and features.
                  <br />
                  <br />
                  Design: <br /> I. Create a video displaying your website.
                  II.Addition of Logos, branding, and color schemes will be
                  appreciated.
                </span>
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Submit your entries till 23th October 2023 on
                Wartexdata@gmail.com for prelims. No entries will be accepted
                after the said date.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                For queries & updates on the event, join our Discord server by
                clicking on the link below:{" "}
                <Link to=" https://discord.gg/WTpx4uJhSg">
                  https://discord.gg/WTpx4uJhSg
                </Link>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default Equinox;
