import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence } from "framer-motion";
//  Importing all the sections of the page
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Sponsors from "./components/Sponsors";
// import Schedule from "./components/Schedule";
import Guidelines from "./components/Guidelines";
import Events from "./components/Events";
import { ApexTeam } from "./components/ApexTeam";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import About from "./components/About";
// Importing browser router

import { Routes, Route, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Lines } from "react-preloaders";
import { useEffect } from "react";

// Importing All the events page

import GameAThon from "./../src/components/events/GameAThon";
import Contact from "./components/Contact";
// import Event2 from "./components/events/BrainWars";
import BrainWars from "./components/events/BrainWars";
import GroupDiscussion from "./components/events/GroupDiscussion";
import Upvento from "./components/events/Upvento";
import RaiseARap from "./components/events/RaiseARap";
import Equinox from "./components/events/Equinox";
import ReworkRender from "./components/events/ReworkRender";
import Minecraft from "./components/events/Minecraft";
import Kubrikism from "./components/events/Kubrikism";
import Memeology from "./components/events/Memology";
import Dexterity from "./components/events/Dexterity";
import Aperture from "./components/events/Aperture";
import Ragnarok from "./components/events/Ragnarok";
import AsimovWars from "./components/events/AsimovWars";
import TeamPage from "./components/TeamPage";
import EventPage from "./components/eventPage";
import TypingMonkey from "./components/events/TypingMonkey";
import SchedulePage from "./components/SchedulePage";
import Marquee from "./components/Marquee";

// Scroll to top function

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <>
      <div className="appDiv">
        <AnimatePresence mode="wait">
          {/* <Lines color={"#fff"} background="linear-gradient(180deg, #007bc2 0%, #009bc2 100%)" time={1800}/>; */}
          <div className="hidden lg:block" key={2}>
            <AnimatedCursor
              innerSize={0}
              outerSize={35}
              innerAlpha={2}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              showSystemCursor={false}
              outerStyle={{
                mixBlendMode: "exclusion",
                backgroundColor: "#fff",
                zIndex: 10000000000,
              }}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            />
          </div>
          {/**/}
          <Navbar key={3} />
          {ScrollToTop()}
          <Routes key={1}>
            {/* ROUTING THE HOME PAGE */}

            <Route
              path="/"
              key="route1"
              element={
                <>
                  {/* <Lines color="#fff" duration="1250" /> */}
                  <div className="landingPage">
                    <Hero />
                  </div>{" "}

                  <Marquee/>
              
                  <About />
                  <Guidelines />
                  <Events />
                  {/* <ApexTeam /> */}
                  <Faq />
                </>
              }
            />
            {/* Routing the Navbar pages */}

            <Route
              path="/team"
              element={
                <>
                  <div className="landingPage mb-20">
                    <TeamPage />
                  </div>
                </>
              }
            />
            <Route
              path="/Events"
              element={
                <>
                  <div className="landingPage mb-20">
                    <EventPage />
                  </div>
                </>
              }
            />

            <Route
              path="/About"
              element={
                <>
                  <div className="landingPage">
                    <About />
                  </div>
                </>
              }
            />
            <Route
              path="/Contact"
              element={
                <>
                  <div className="landingPage">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route
              path="/Schedule"
              element={
                <>
                  <div className="landingPage">
                    <SchedulePage />
                  </div>
                </>
              }
            />
            <Route
              path="/Contact"
              element={
                <>
                  <div className="landingPage">
                    <Contact />
                  </div>
                </>
              }
            />

            {/* ROUTING THE EVENTS  */}

            <Route
              path="/Events/Game-A-Thon"
              element={
                <>
                  <GameAThon />
                </>
              }
            />
            <Route
              path="/Events/BrainWars"
              element={
                <>
                  <BrainWars />
                </>
              }
            />
            <Route
              path="/Events/GroupDiscussion"
              element={
                <>
                  <GroupDiscussion />
                </>
              }
            />
            <Route
              path="/Events/Upvento"
              element={
                <>
                  <Upvento />
                </>
              }
            />
            <Route
              path="/Events/RaiseARap"
              element={
                <>
                  <RaiseARap />
                </>
              }
            />
            <Route
              path="/Events/Equinox"
              element={
                <>
                  <Equinox />
                </>
              }
            />
            <Route
              path="/Events/ReworkRender"
              element={
                <>
                  <ReworkRender />
                </>
              }
            />
            <Route
              path="/Events/Minecraft"
              element={
                <>
                  <Minecraft />
                </>
              }
            />
            <Route
              path="/Events/Kubrikism"
              element={
                <>
                  <Kubrikism />
                </>
              }
            />
            <Route
              path="/Events/Memeology"
              element={
                <>
                  <Memeology />
                </>
              }
            />
            <Route
              path="/Events/Dexterity"
              element={
                <>
                  <Dexterity />
                </>
              }
            />
            <Route
              path="/Events/Aperture"
              element={
                <>
                  <Aperture />
                </>
              }
            />
            <Route
              path="/Events/Ragnarok"
              element={
                <>
                  <Ragnarok />
                </>
              }
            />
            <Route
              path="/Events/AsimovWars"
              element={
                <>
                  <AsimovWars />
                </>
              }
            />
            <Route
              path="/Events/Typestry"
              element={
                <>
                  <TypingMonkey />
                </>
              }
            />
          </Routes>
          <Footer />{" "}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
