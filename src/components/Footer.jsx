import React from "react";
import bgImage from "./../assets/footer-img.webp";
import { Link } from "react-router-dom";
import logo from "/wartex-logo.webp";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#c640ff] lg:grid lg:grid-cols-5 Footer">
        <div className="relative block h-96 lg:col-span-2 lg:h-full">
          <img
            src={bgImage}
            alt=""
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
           
            contrast-[1.1]
          "
          />
          <div className="absolute z-10 lg:bg-gradient-to-l bg-gradient-to-t from-[#c640ff] from-20% via-15% via-[#c640ff]  h-full w-full" />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              {/* <span className="text-xs uppercase tracking-wide text-white">
            Call us
          </span> */}

              <img src={logo} height="60px" width="60px" />

              <div>
                <p className="text-white text-justify  md:mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium iure quidem saepe? Quibusdam doloribus eaque
                  laudantium. Maiores sit eos provident, soluta minus aut
                  veritatis eligendi dicta ipsum vitae vero quibusdam.
                </p>
              </div>

              {/* <p
            href="#"
            className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
          >
             +91 9810868089 
          </p>
      
        <ul className=" space-y-1 text-sm text-[#ffffff8b]">
          <li>(Ms. Vineeta Garg - Teacher Incharge)</li>

        </ul> */}

              <ul className="mt-16 mb-8 sm:mb-0 flex gap-6">
                {/* <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li> */}

                {/* <li>
                  <Link
                    to="https://www.instagram.com/wartex_srdav/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="flex  flex-col gap-4  ">
              <h1 className="integral tracking-widest  text-center text-white">
                Contact
              </h1>

              <div className="flex md:mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="white"
                  className="w-10 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <p className="text-white ml-4">
                  {" "}
                  Shaheed Rajpal D.A.V. Public School, Dayanand Vihar, Delhi-92
                </p>
              </div>
              <div className="flex md:mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-white ml-4">
                  {" "}
                  +91 9810868089 <br /> (Ms. Vineeta Garg - Teacher Incharge)
                </p>
              </div>
              
              
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-8 text-md text-white sm:mt-0">
                &copy; {new Date().getFullYear()} ADOBE | WEBSITE MADE BY
                <Link
                  className="underline underline-offset-4"
                  to="https://www.youtube.com/shorts/gAOLrRPMfos"
                >
                  {" "}
                  ARNAV VERMA
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
