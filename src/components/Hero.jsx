import Transition from "../transition";
import bgImage from "./../assets/bg.jpg";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <>
      <Transition>
        <ScrollParallax isAbsolutelyPositioned>
          <div
            className="h-[100vh]"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              filter : 'brightness(0.5)'
            }}
          ></div>
        </ScrollParallax>
        <div className="hero h-[100vh] flex justify-center items-center">
          <div className="">
            <div className="relative isolate px-6  lg:px-8">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
               
              </div>
              <div className="mx-auto max-w-6xl py-20 sm:py-24 lg:py-24">
                <div className="text-center">
                  <h1 className="text-[57px] stretch sm:mb-0 mt-4 sm:mt-20 font-thin text-gray-100 sm:text-[100px]">
                      DIGITAL INDIA
                  </h1>
                  <div className=" sm:block">
                    <div className="mt-4 sm:mt-0 flex items-center justify-center ">
                     
                      <p className="akira rounded-md tracking-widest text-center  text-[25px] uppercase px-3.5 pb-2.5 md:text-[50px] font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        VISION - 2030
                      </p>
                     
                    </div>
                  </div>
                  <div className="block">
                    {/* <div className="mt-0 flex items-center justify-center ">
                      <div className="">
                        <p className="mt-2 sm:hidden flex justify-center text-[25px] rounded-md address  text-center  uppercase px-3.5 py-2.5 md:text-sm font-semibold text-white ">
                          26 OCTOBER, 2023
                        </p>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="mt-6 flex items-center justify-center sm:hidden ">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="white"
                className="w-10 h-7 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
  
      
              <p className="date sm:hidden block md:text-sm text-xs  text-left font-semibold ml-4 leading-6 text-white  uppercase">
                26 OCTOBER, 2023
              </p>
            </div> */}

                  <div className="mt-8 sm:mt-4 flex items-center justify-center gap-x-6">
                    {/* <a
                      href="#"
                      className="stretch border-2 tracking-widest line text-sm  transition ease-in-out duration-[1s]  border-[#fff] rounded-full font-semibold px-4 py-2.5  text-white cursor-pointer hover:bg-[#fff] hover:border-white hover:text-[#000] "
                    >
                      BROCHURE
                    </a> */}
                    {/* <a
                      href="#"
                      className="border-2 tracking-widest line text-sm  transition ease-in-out duration-[1s]  border-[#fff] rounded-full font-semibold px-4 py-2.5  text-white cursor-pointer hover:bg-[#ffffff] hover:border-white hover:text-[#280d47]"
                    >
                      REGISTER
                    </a> */}
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>

   
      </Transition>
    </>
  );
};

export default Hero;
