import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AOS from "aos";

AOS.init();

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="p-4 sm:p-28 xl:p-42 mb-20 sm:mb-0 bg-black dark:bg-[#ebe2e2] dark:text-black">
      <h1 className="sf text-center drop-shadow-[0_0px_35px_#c640ff] text-[#c640ff] mb-14 text-4xl heading">
        FREQUENTLY ASKED QUES
      </h1>
      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            data-aos="fade-up"
            style={{ fontFamily: "akira", transition: "all 500ms" }}
            onClick={() => handleOpen(1)}
            className=" text-white dark:text-black hover:text-[#c640ff] hover:drop-shadow-[0_0px_35px_#c640ff]"
          >
            What is DIGITAL INDIA ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "sf", transition: "all 500ms" }}
            className="text-white dark:text-black text-[15px]"
          >
            Digital India is a flagship programme of the Government of India
            with a vision to transform India into a digitally empowered society
            and knowledge economy.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "akira", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(2)}
            className="text-white hover:text-[#c640ff]  hover:drop-shadow-[0_0px_35px_#c640ff]"
          >
            WHAT ARE THE INITIATIVES ?
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "sf", transition: "all 500ms" }}
            className=" text-white text-[15px] dark:text-black"
          >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti rem quasi ea amet obcaecati? Expedita culpa dolor fugiat totam porro corrupti dignissimos voluptate provident odio at, id nesciunt obcaecati!
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "akira", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(3)}
            className="text-white dark:text-black hover:text-[#c640ff]  hover:drop-shadow-[0_0px_35px_#c640ff]"
          >
            WHAT ARE THE PILLARS OF DIGITAL INDIA
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat repellat ab excepturi reiciendis perspiciatis aperiam nisi eaque dicta fugit magni sequi ullam doloremque officiis eligendi consequatur recusandae temporibus, praesentium iusto?
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "akira", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(4)}
            className="text-white dark:text-black hover:text-[#c640ff]  hover:drop-shadow-[0_0px_35px_#c640ff]"
          >
            WHAT IS OUR TARGET DATE
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black"
          >
            2023
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            style={{ fontFamily: "akira", transition: "all 500ms" }}
            data-aos="fade-up"
            onClick={() => handleOpen(5)}
            className="text-white dark:text-black hover:text-[#c640ff]  hover:drop-shadow-[0_0px_35px_#c640ff]"
          >
            CHALLENGES IN THE PROGRAM
          </AccordionHeader>
          <AccordionBody
            style={{ fontFamily: "Sf", transition: "all 500ms" }}
            className="text-white text-[15px] dark:text-black  "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos dolorem exercitationem veritatis numquam, nesciunt, dolores asperiores illum ipsum, quasi nihil fugit accusamus dicta perspiciatis soluta facere laboriosam cupiditate cumque.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
