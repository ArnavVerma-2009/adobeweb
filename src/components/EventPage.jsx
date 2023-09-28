import React, { useEffect } from "react";
import styles from "./../components/styles/EventPage.css";

import Aperture from "./../assets/eventThumbnails/Aperture.webp";
import CrypticHunt from "./../assets/eventThumbnails/crypticHunt.webp";
import BrainWars from "./../assets/eventThumbnails/BrainWars.webp";
import Illuminati from "./../assets/eventThumbnails/GroupDiscussion.webp";
import Upvento from "./../assets/eventThumbnails/Upvento.webp";
import GameAThon from "./../assets/eventThumbnails/gameAThonEventPage.jpg";
import RaiseARap from "./../assets/eventThumbnails/raiseARapEventPage.jpg";
import Equinox from "./../assets/eventThumbnails/EquinoxEventPage.webp";
import ReworkRender from "./../assets/eventThumbnails/ReworkRender.webp";
import Minecraft from "./../assets/eventThumbnails/Minecraft.webp";
import Kubrikism from "./../assets/eventThumbnails/KubrikismEventPage.jpg";
import Memeology from "./../assets/eventThumbnails/MemeologyEventPage.webp";
import Dexterity from "./../assets/eventThumbnails/Dexterity.webp";
import Ragnarok from "./../assets/eventThumbnails/Ragnarok.webp";
import AsimovWars from "./../assets/eventThumbnails/AsimovWars.jpg";
import Typestry from "./../assets/eventThumbnails/Typestry.webp";
import Transition from "../transition";
import { Link } from "react-router-dom";

import Aos from "aos";

Aos.init();
const EventPage = () => {
  const EventsMetaData = [
    {
      Name: "Cryptic Hunt",
      id: 1,
      href: "https://cryptichunt.wartex.co.in",
      imageLink: `${CrypticHunt}`,
    },
    {
      Name: "Ragnarok",
      id: 14,
      href: "/Events/Ragnarok",
      imageLink: `${Ragnarok}`,
    },
    {
      Name: "Minecraft",
      id: 9,
      href: "/Events/Minecraft",
      imageLink: `${Minecraft}`,
    },
    {
      Name: "Memology",
      id: 11,
      href: "/Events/Memeology",
      imageLink: `${Memeology}`,
    },
    {
      Name: "Game-A-Thon",
      id: 5,
      href: "/Events/Game-A-thon",
      imageLink: `${GameAThon}`,
    },
    {
      Name: "Group discussion",
      id: 3,
      href: "/Events/GroupDiscussion",
      imageLink: `${Illuminati}`,
    },
    {
      Name: "Upvento",
      id: 4,
      href: "/Events/Upvento",
      imageLink: `${Upvento}`,
    },
    {
      Name: "Aperture",
      id: 13,
      href: "/Events/Aperture",
      imageLink: `${Aperture}`,
    },

    {
      Name: "Brain Wars",
      id: 2,
      href: "/Events/BrainWars",
      imageLink: `${BrainWars}`,
    },
    {
      Name: "Typing Monkey",
      id: 16,
      href: "/Events/Typestry",
      imageLink: `${Typestry}`,
    },

    {
      Name: "Raise-A-Rap",
      id: 6,
      href: "/Events/RaiseARap",
      imageLink: `${RaiseARap}`,
    },

    {
      Name: "Rework Render",
      id: 8,
      href: "/Events/ReworkRender",
      imageLink: `${ReworkRender}`,
    },

    {
      Name: "Kubrikism",
      id: 10,
      href: "/Events/Kubrikism",
      imageLink: `${Kubrikism}`,
    },

    {
      Name: "Dexterity",
      id: 12,
      href: "/Events/Dexterity",
      imageLink: `${Dexterity}`,
    },

    {
      Name: "Asimov Wars",
      id: 15,
      href: "/Events/AsimovWars",
      imageLink: `${AsimovWars}`,
    },
    {
      Name: "Equinox",
      id: 7,
      href: "/Events/Equinox",
      imageLink: `${Equinox}`,
    },
  ];

  return (
    <>
      <Transition>
        <div className="p-4 pt-40  bg-[#000] ">
          <section className="bg-black ">
            <div className="h-[32rem] bg-black ">
              <div className="container px-6 py-10 mx-auto">
                <h1
                  className="mb-2 text-4xl text-[#007bc4] drop-shadow-[0_0px_35px_#007bc4]  text-center font-semibold uppercase tracking-px heading"
                  data-aos="fade-up"
                >
                  THE LEGENDARY EVENTS
                </h1>

                <p
                  className="mb-14 text-sm text-white dark:text-black text-center font-semibold uppercase tracking-px"
                  data-aos="fade-up"
                >
                  THE ULTIMATE CHALLENGES
                </p>
              </div>
            </div>

            <div className=" relative px-6 py-10 -mt-72 sm:-mt-80 md:-mt-96">
              <div className="flex flex-wrap gap-8 justify-center  flex-row mt-8 xl:mt-16">
                {EventsMetaData.map((data) => (
                  <div
                    key={data.id}
                    className="relative z-[1] parent group EventMainCard"
                  >
                    <Link
                      to={data.href}
                      data-aos="fade-up"
                      data-aos-duration={data.delay}
                      style={{
                        backgroundImage: `url(${data.imageLink})`,
                        backgroundSize: "cover",
                      }}
                      className=" group h-[350px] sm:h-[550px] sm:w-[550px] w-[350px] relative block bg-[#ffffff04] overflow-hidden drop-shadow-[0_0px_0px_#007bc4]   my-8 sm:my-0 aspect-[1/1] rounded-xl   sm:border-[4px] border-[2px] border-[#007bc4] "
                    >
                      <div className="screen-overlay"></div>

                      {/* <div className="relative flex flex-row  h-full text-white items-end bg-[#00000051] ">
                      <p className="text-justify contentEventCard p-4 sm:p-5 lg:p-7 ">
                        aspernatur rem eveniet! Ullam aliquid, dicta corrupti ut
                        tenetur quibusdam odit tempore, iure quo voluptatum
                        ducimus alias. Eligendi deserunt, voluptatum incidunt
                        quidem nihil iste totam numquam praesentium ullam minus
                        in similique rem veritatis?
                      </p>
                    </div> */}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default EventPage;
