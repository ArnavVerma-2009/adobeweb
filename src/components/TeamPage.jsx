import React from "react";
import AOS from "aos";
import YashMehra from "./../assets/TeamMembers/YashMehra.webp";
import RiddhiGoel from "./../assets/TeamMembers/RiddhiGoel.webp";
import OjasAggarwal from "./../assets/TeamMembers/OjasAggarwal.webp";
import GauravKumar from "./../assets/TeamMembers/GauravKumar.webp";
import NipunSinghal from "./../assets/TeamMembers/NipunSinghal.webp";
import RishimaJhamb from "./../assets/TeamMembers/RishimaJhamb.webp";
import ArnavVerma from "./../assets/TeamMembers/ArnavVerma.webp";
import AdvikAggarwal from "./../assets/TeamMembers/AdvikAggarwal.webp";
import JhanviSingh from "./../assets/TeamMembers/JhanviSingh.webp";
import JaishreeSharma from "./../assets/TeamMembers/JaishreeSharma.webp";
import SwastikVerma from "./../assets/TeamMembers/SwastikVerma.webp";
import SiddhiMalhotra from "./../assets/TeamMembers/SiddhiMalhotra.webp";
import placeHolder from "./../assets/TeamMembers/placeholder.avif";
import Transition from "../transition";
AOS.init();
const TeamMetaData = [
  {
    id: 1,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2000,
  },
  {
    id: 2,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2400,
  },
  {
    id: 3,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 4,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 5,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 6,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 7,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 10,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2800,
  },

  {
    id: 11,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 8,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2400,
  },

  {
    id: 9,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2800,
  },

  {
    id: 12,
    Name: "XXXXXXXXX",
    Image: `${YashMehra}`,
    Designation: "XXXXXXXXX",
    InstaLink: "",
    delay: 2000,
  },
];

// EVENT HEAD META DATA

const EventHeadList = [
  {
    id: 1,
    Name: "YASH MEHRA",
    Image: `${YashMehra}`,
    Designation: "Cryptic Hunt, dexterity, asimov Wars",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2000,
  },
  {
    id: 2,
    Name: "ABHINAV MISHRA",
    Image: `${placeHolder}`,
    Designation: "Dexterity",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2400,
  },
  {
    id: 3,
    Name: "OJAS AGGARWAL",
    Image: `${OjasAggarwal}`,
    Designation: "Rework Render, Frames",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 4,
    Name: "RISHIMA ",
    Image: `${RishimaJhamb}`,
    Designation: "GROUP DISCUSSION",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 5,
    Name: "JHANVI SINGH",
    Image: `${JhanviSingh}`,
    Designation: "GROUP DISCUSSION",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 6,
    Name: "ARNAV VERMA",
    Image: `${ArnavVerma}`,
    Designation: "HACKATHON",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 7,
    Name: "ADVIK AGGARWAL",
    Image: `${AdvikAggarwal}`,
    Designation: "HACKATHON",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 8,
    Name: "PRANEEL MAITRA",
    Image: `${placeHolder}`,
    Designation: "MEMEOLOGY",
    InstaLink: "",
    delay: 2400,
  },

  {
    id: 9,
    Name: "PRIYANSHU",
    Image: `${placeHolder}`,
    Designation: "MINECRAFT",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 10,
    Name: "SHOURYA SHRIVASTVA",
    Image: `${placeHolder}`,
    Designation: "Rework Render",
    InstaLink: "",
    delay: 2800,
  },

  {
    id: 11,
    Name: "Gaurav Kumar",
    Image: `${GauravKumar}`,
    Designation: "Aperture",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 12,
    Name: "Siddhi Malhotra",
    Image: `${SiddhiMalhotra}`,
    Designation: "Aperture",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 13,
    Name: "Misha",
    Image: `${placeHolder}`,
    Designation: "game-a-thon",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2000,
  },
  {
    id: 14,
    Name: "Shreya Saxena",
    Image: `${placeHolder}`,
    Designation: "Game-a-thon",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2400,
  },
  {
    id: 15,
    Name: "Aadishree",
    Image: `${placeHolder}`,
    Designation: "Raise-A-Rap",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 16,
    Name: "Aishawarya Vats ",
    Image: `${placeHolder}`,
    Designation: "Raise-A-Rap",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 17,
    Name: "soumya pandey",
    Image: `${placeHolder}`,
    Designation: "Equinox ",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 18,
    Name: "Riddhi goel",
    Image: `${RiddhiGoel}`,
    Designation: "Kubrikism",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 19,
    Name: "Abhinav kumar",
    Image: `${placeHolder}`,
    Designation: "ragnarok",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 20,
    Name: "Agrim gupta",
    Image: `${placeHolder}`,
    Designation: "ragnarok",
    InstaLink: "",
    delay: 2400,
  },

  {
    id: 21,
    Name: "Pratham Dhyani",
    Image: `${placeHolder}`,
    Designation: "ragnarok",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 22,
    Name: "Priyanshi Jenna",
    Image: `${placeHolder}`,
    Designation: "Organising Commitee",
    InstaLink: "",
    delay: 2800,
  },

  {
    id: 23,
    Name: "Anmol Bhatt",
    Image: `${placeHolder}`,
    Designation: "Organising Commitee",
    InstaLink: "",
    delay: 2400,
  },
];

const TeamPage = () => {
  return (
    <>
      <Transition>
        {/* <Lines color="#fff" duration="1250" /> */}
        <div className="p-4 mt-28  sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2]">
          <section className="bg-black dark:bg-[#ebe2e2]">
            <div className="h-[32rem] bg-black dark:bg-[#ebe2e2]">
              <div className="container px-6 py-10 mx-auto">
                <h1
                  className="mb-2 text-4xl text-[#c640ff] drop-shadow-[0_0px_35px_#c640ff]  text-center font-semibold uppercase tracking-px heading"
                  data-aos="fade-up"
                >
                  THE APEX MEMBERS
                </h1>

                <p
                  className="mb-14 text-sm text-white dark:text-black text-center font-semibold uppercase tracking-px"
                  data-aos="fade-up"
                >
                  THE ONES WHO GIVE THEIR ALL
                </p>
              </div>
            </div>

            <div className="container relative px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                {TeamMetaData.map((data) => (
                  <div key={data.id}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration={data.delay}
                      className=" group relative block bg-black overflow-hidden drop-shadow-[0_0px_0px_#c640ff]   my-8 sm:my-0 aspect-[8/10] rounded-xl   border-[4px] border-[#c640ff] "
                    >
                      <img
                        style={{
                          // backgroundImage: `url(${data.Image})`,
                          backgroundSize: "cover",
                          aspectRatio: "8/10",
                        }}
                        alt={data.id}
                        src={placeHolder  }
                        loading="lazy"
                        fill="true"
                        sizes="(max-width : 768px) 100vw, 700px"
                        className="hover:brightness-[40%] hover:hue-rotate-90 absolute inset-0 h-full w-auto object-cover opacity-75 transition duration-2000"
                      />

                      <div className="relative flex flex-col items-start justify-end h-full  p-4 sm:p-5 lg:p-7 ">
                        <p className="sf relative text-xl font-bold text-white sm:text-2xl">
                          {data.Name}
                        </p>
                        <p className="sf relative text-sm  uppercase tracking-widest text-[#fff] font-bold poppins">
                          {data.Designation}
                        </p>
                      </div>
                    </div>
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

export default TeamPage;
