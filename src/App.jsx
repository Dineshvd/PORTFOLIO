import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Expo } from "gsap";

import "../css/style.css";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      // Model and Page headings
      t1.from("#modelheading", {
        x: 900,
        duration: 1.5,
      })
        .from("#pageheading", {
          x: -800,
          duration: 1.5,
          delay: -1.5,
        })

        // Logo
        .from(".logo span", {
          scale: 0,
          duration: 0.5,
          ease: "ease.out",
        })

        // Navbar items
        .from("nav ul li", {
          y: -250,
          duration: 0.5,
          ease: "Expo.easeOut",
          stagger: 0.2,
        })

        // Main content headings
        .from(".h1 h1", {
          y: 250,
          skewY: 20,
          duration: 1.4,
          stagger: 0.4,
        })

        // Paragraph and Explore Now link
        .from(".content p", {
          y: -30,
          opacity: 0,
          duration: 0.5,
        })
        .from(".content > a", {
          ease: Expo.easeOut,
          duration: 0.5,
          stagger: 0.3,
          x: -10,
        })

        // Social media links
        .from(".social ul li a", {
          ease: Expo.easeOut,
          duration: 0.5,
          stagger: 0.3,
          x: -10,
        })

        // Image section: faster animation with reduced delay
        .from(
          ".img",
          {
            duration: 0.1,
            opacity: 0,
            delay: 1,
          },
          "<0.3"
        )

        // Image animations: shortened duration for faster appearance
        .from(
          ".one",
          {
            x: innerWidth * 1,
            duration: 0.3,
          },
          "<0.2"
        )
        .from(
          ".two",
          {
            y: -100,
            opacity: 0,
            duration: 0.3,
          },
          "<0.5"
        )
        .from(
          ".three",
          {
            y: 100,
            opacity: 0,
            duration: 0.3,
          },
          "<0.7"
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container" ref={comp}>
      {/* <!-- LOADER --> */}
      <div className="loader">
        <h1 id="modelheading">DEVELOPER</h1>
        <h2 id="pageheading">PORTFOLIO</h2>
      </div>
      {/* <!-- navbar --> */}
      <nav>
        <div className="logo">
          <span>DINESH V</span>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- wrapper --> */}
      <div className="wrapper">
        {/* <!-- content --> */}
        <div className="content">
          <div className="h1">
            <h1>SOFTWARE</h1>
          </div>
          <div className="h1">
            <h1>DEVELOPER</h1>
          </div>
          <p>
            Innovative Software Engineer with 1 year of experience and
            proficient in crafting captivating user interface for web
            applications. Expertise in seamless front-end development, ensuring
            optimal user experiences and driving technological excellence.
          </p>
          <a href="#">Explore now</a>
          <div className="social">
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- img section --> */}
        <div className="img">
          <div className="subimg one">
            <img
              src="https://res.cloudinary.com/dineshvd/image/upload/v1657290153/My%20pictures/background_nuklpw.jpg"
              alt=""
            />
            <div className="bg"></div>
          </div>
          <div className="subimg two">
            <img
              src="https://res.cloudinary.com/dineshvd/image/upload/v1657290153/My%20pictures/background_nuklpw.jpg"
              alt=""
            />{" "}
            <div className="bg2"></div>
          </div>
          <div className="subimg three">
            <img
              src="https://res.cloudinary.com/dineshvd/image/upload/v1657290153/My%20pictures/background_nuklpw.jpg"
              alt=""
            />{" "}
            <div className="bg3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
