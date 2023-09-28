import { useState } from "react";
// import bgImage from "./../assets/images/bg-about.webp";
// import { ScrollParallax } from "react-just-parallax";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import MadhavImage from "./../assets/chandrayaan.jpg";
import Transition from "../transition";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Transition>
        <div className="h-[auto] text-white bg-black backdrop-blur-sm">
          <section className=" sm:mt-0 mt-20 AboutDiv ">
            <div className="AboutContainer ">
              {" "}
             
              <div className="sm:px-12">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:py-16 lg:px-6">
                  <div className="font-light text-white sm:text-lg ">
                    <h2 className="uppercase mb-12 sm:text-4xl text-3xl tracking-tight font-extrabold  z-[1000]  text-white">
                      A programme to transform India into a digitally empowered
                      society and knowledge economy.
                    </h2>
                    <p className="mb-4 text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae officia sapiente magnam quis, ipsam cum. Error
                      voluptates soluta consectetur quos consequatur tenetur?
                      Quis rerum exercitationem consequuntur voluptate
                      praesentium impedit, ducimus eveniet odit architecto illum
                      quae ipsum, pariatur quasi sint quisquam enim blanditiis
                      voluptatibus. Enim dolorum provident dolore excepturi
                      nihil. Modi reiciendis dolorum aut, ab totam illo quaerat
                      quam fugiat adipisci! Dolore atque ratione maxime soluta
                      architecto possimus? Illo ullam sint consectetur,
                      molestiae pariatur sunt totam impedit, atque itaque neque
                      aperiam, omnis hic optio culpa libero ipsum. Eaque aperiam
                      excepturi obcaecati pariatur quis quidem nam officiis
                      voluptatem velit culpa? Non velit corporis dicta eius at
                      ipsam vero harum, dolores repudiandae quidem fugiat
                      necessitatibus deleniti odit similique natus. Beatae, vel
                      deleniti error temporibus similique quidem natus rerum
                      tempore vero minima nobis molestias?
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mt-8  z-10">
                    <img
                      className="w-full rounded-lg brightness-[60%]"
                      src={MadhavImage}
                      alt="office content 1"
                    />{" "}
                    <div className="absolute z-10 lg:bg-gradient-to-l bg-gradient-to-t from-[#005fc4] from-20% via-15% via-[#005fc4] h-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default About;
