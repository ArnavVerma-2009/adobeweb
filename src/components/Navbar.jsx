import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { Lines } from "react-preloaders";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "TEAM", href: "/Team" },
  // { name: "EVENTS", href: "/Events" },
  { name: "ABOUT", href: "/About" },
  // { name: "Schedule", href: "/Schedule" },
  // { name: "MAP", href: "/map" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-[1000] backdrop-blur-[10px] bg-[#04102b0f] fixed">
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto"
              src="/wartex-logo.webp"
              //
              alt="ImageHai"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 h-[30px] inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="sf text-lg font-semibold leading-6 dark:text-[#000000] text-white uppercase navLinks tracking-widest  hover:drop-shadow-[0_0px_30px_#c640ff] transition duration-300 "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
         <Menu>
            <div>
              <Menu.Button className="sf inline-flex w-full justify-center items-center  gap-x-1.5 rounded-3xl text-white px-3 py-2 text-lg font-semibold shadow-sm border-[2px] border-white hover:bg-gray-50 transition duration-500 hover:text-[#007bc4]">
                TAKE QUIZ
                
              </Menu.Button>
            </div>
          </Menu>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden z-[10000000000]"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[50000000] w-full overflow-y-auto bg-transparent backdrop-blur-2xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/wartex-logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    to={item.href}
                    className="-mx-3 dark:text-black block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white uppercase  text-center hover:bg-gray-50  hover:text-black navLinks "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                onClick={() => setMobileMenuOpen(false)}
            
                className="-mx-3 dark:text-black block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white uppercase  text-center hover:bg-gray-50  hover:text-black navLinks "
              >
                TAKE QUIZ
              </Link>
             
              <div className="flex navLinks justify-center py-4 tracking-widest line leading-8 transition ease-in-out duration-[1s]  border-[#fff] rounded-full font-semibold items-center px-8 text-white cursor-pointer  hover:border-white "></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
