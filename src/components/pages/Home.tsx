import { RefObject, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import About from "../sections/About";
import BottomCTA from "../sections/BottomCTA";
import Hero from "../sections/Hero";
import Photos from "../sections/PhotographyMosaic";
import PhotoScroller from "../sections/PhotoScroller";
import Projects from "../sections/Projects";

const Home = ({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) => {
  const [devMode, setDevMode] = useState(true);

  return (
    <div className={devMode ? "bg-base-200" : "bg-base-100"}>
      <div id="home"></div>
      <Header pageRef={scrollRef} devMode={devMode} setDevMode={setDevMode} />
      <main>
        <div className="splash-wrapper h-dvh max-h-175 lg:max-h-182.5 pt-28 lg:pt-10">
          <Hero devPortfolio={devMode} />
        </div>
        {devMode ? (
          <>
            <PhotoScroller />
            <About />
            <Projects />
            <BottomCTA />
          </>
        ) : (
          <Photos />
        )}
      </main>
      <Footer devPortfolio={devMode} />
    </div>
  );
};

export default Home;
