import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "./../assets/bg-contact.webp";
import Transition from "../transition";

const cardData = [
  {
    email: "example@gmail.com",
    phoneNum: "+91 XXXXXXXXXX",
    Name: "Neeru Mittal",
    Post: "Teacher In Charge",
  },
  {
    email: "example@gmail.com",
    phoneNum: "+91 XXXXXXXXXX",
    Name: "Vineeta Garg",
    Post: "Teacher In Charge",
  },
  {
    email: "example@gmail.com",
    phoneNum: "+91 XXXXXXXXXX",
    Name: "Yash Mehra",
    Post: "President",
  },
  {
    email: "example@gmail.com",
    phoneNum: "+91 XXXXXXXXXX",
    Name: "Riddhi Goyal",
    Post: "Vice President",
  },
];
const Contact = () => {
  const form = useRef();

  const notify = () => toast("Message Sent successfully");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tebw94i",
        "template_f5lfdwb",
        form.current,
        "3kpq8ZHC87KmobjRV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <>
    <Transition>

    
      <div className="bg-black ">
        <section className="sm:p-40 ContactDiv pt-12 pr-4 pl-4 pb-12 height-[100vh]">
          <div className="py-8 lg:py-16  px-4 mx-auto max-w-screen bg-[#ffffff0e] backdrop-blur-lg rounded-xl">
            <h2
              className="mb-4 pt-10 sm:pt-0 sm:text-6xl text-4xl tracking-tight font-extrabold text-center text-white"
              style={{ fontFamily: "Akira" }}
            >
              Contact Us
            </h2>
            <section className="text-white body-font relative">
              <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-[#ffffff70] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder={0}
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.929961744988!2d77.29232734027771!3d28.645793002629635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb46915ef451%3A0xbc8560131a567aaf!2sShaheed%20Rajpal%20DAV%20Public%20School!5e0!3m2!1sen!2sin!4v1689915668566!5m2!1sen!2sin"
                    style={{
                      filter: " grayscale(0.2) contrast(0.9)",
                    }}
                  />
                  <div className="bg-white sm:relative justify-center items-center flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                      <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        ADDRESS
                      </h2>
                      <p className="mt-1 text-black">
                        Shaheed Rajpal D.A.V school, Dayanand Vihar,
                        Delhi-110051
                      </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                      <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        EMAIL
                      </h2>
                      <a className="text-indigo-500 leading-relaxed">
                        wartexsrdav@gmail.com
                      </a>
                      <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                        PHONE
                      </h2>
                      <p className="leading-relaxed text-black ">
                        123-456-7890
                      </p>
                    </div>
                  </div>
                
                </div>
                <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                  {/* <h2 className="text-white text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2> */}
                  <form onSubmit={sendEmail} ref={form} className="space-y-8">
                    <div className="relative mb-4">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-white "
                      >
                        Name
                      </label>
                      <input
                        autoComplete="true"
                        type="text"
                        id="name"
                        placeholder="Arnav Verma"
                        name="user_name"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="relative mb-4">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-white "
                      >
                        Email
                      </label>
                      <input
                        autoComplete="true"
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                        name="user_email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="relative mb-4">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-white "
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={""}
                        placeholder="Leave a comment..."
                        name="message"
                      />
                    </div>
                   
                    <button
                      type="submit"
                      className="mx-3 transition duration-500 dark:text-black block rounded-3xl px-5 py-1 text-base font-semibold leading-7 text-white text-center uppercase border-[2px] hover:bg-gray-50 hover:text-black "
                      value="Send"
                      onClick={notify}
                    >
                      SEND
                    </button>
                  </form>
                </div>
              </div>
            </section>{" "}
          
          </div>{" "}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </section>
        <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
      <h1 data-aos="fade-up" data-aos-duration="750" className="drop-shadow-[0_0px_35px_#007bc4] text-center text-[#007bc4] mb-14 text-4xl heading">
        MORE WAYS TO CONTACT
      </h1>
      <ol className="relative">
       
       {cardData.map((data, key) => (
         <li className="mb-10 ml-4" key={key}>
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf mb-4 text-base font-normal text-gray-300 dark:text-black">
       {data.phoneNum} , {data.email} | {data.Name} - {data.Post}
          </p>
        </li>
       ))}
      </ol>
    </div>
      </div></Transition>
    </>
  );
};

export default Contact;
