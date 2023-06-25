import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";

import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import f1 from "./f1.png";
import f2 from "./f2.png";
import f3 from "./f3.png";

import t1 from "./pooja_gera.jpg";
import t2 from "./abhiruchi.png";
import t3 from "./kirti.jpg";
import t4 from "./nisha.jpg";
import t5 from "./Karan-Taneja.jpg";

// import Button from "./Button";

const About = () => {
  const nav = useNavigate();
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);


  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={pic1} alt="" />
          </div>
          <div className="home__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h1 className="home__title">Introducting Connectify</h1>
            <p className="home__description"> The ultimate team-building and collaboration platform designed to empower individuals from marginalized genders in the tech community.  From ideation to execution, Connectify streamlines the team-building process, ensuring that no one is left behind and that every voice is heard.
 </p>
          </div>
        </div>
      </section>

      <section className="share section bd-container" id="learn_more">
        <div className="share__container bd-grid">
          <div className="share__img"
            data-aos="fade-right"
            data-aos-duration="500">
            <img src={pic2} alt="" />
          </div>
          <div className="share__data"
            data-aos="fade-left"
            data-aos-duration="500">
            <h2 className="section-title-center"> How it Helps?</h2>
            <p className="share__description"> With Connectify, you can seamlessly connect with like-minded individuals, build diverse teams, and amplify your impact in hackathons.</p>
          </div>
        </div>
      </section>

      <section className="decoration section bd-container" id="features">
        <h2 className="section-title">Features</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={f1} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Select TeamMates</h3>
            <p>Swipe left or right to show interest in potential teammates, effortlessly forming alliances that foster creativity, innovation, & inclusivity. </p>
            <div className="button"><Link to="/FindMate" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={f2} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">Design Portfolio</h3>
            <p>Showcase your unique skills & experiences on your personalized portfolio page, highlighting your past projects, social media links, & involvement as a speaker, organizer, or volunteer in community events.
</p>
            <div className="button"><Link to="./" className="button-link" style={{ color: 'white' }}>Explore</Link>
            </div>
          </div>
          <div className="decoration__data">
            <img src={f3} alt="" className="decoration__img" id="render" />
            <h3 className="decoration__title">User DashBoard</h3>
            <p>Stay organized and focused with the user dashboard, where you can manage your hackathons in a calendar, add teammates from your matches, and track your achievements along the way</p>
            <div className="button"><Link to="/dashboard" className="button-link" style={{ color: 'white' }}>Explore</Link></div>
          </div>
        </div>
      </section>

      <section className="decoration section bd-contain" id="team">
        <h2 className="section-title">Our Team</h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img src={t1} alt="" className="decoration__img" id="apple_render" />
            <h3 className="decoration__title">Pooja Gera</h3>
            {/* <div className="button"><a href="./view/designsolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
          <div className="decoration__data">
            <img src={t2} alt="" className="decoration__img" id="burger_render" />
            <h3 className="decoration__title">Abhiruchi Sarswat</h3>
            {/* <div className="button"><a href="./view/ideatesolve.html" className="button-link" style={{ color: 'white' }}>Details</a>
            </div> */}
          </div>
          <div className="decoration__data">
            <img src={t3} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title">Kirti Aggrawal</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
          <div className="decoration__data">
            <img src={t4} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title"> Nisha Laur</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
          <div className="decoration__data">
            <img src={t5} alt="" className="decoration__img" id="milk_render" />
            <h3 className="decoration__title">Karan Taneja</h3>
            {/* <div className="button"><a href="./view/hacksolve.html" className="button-link" style={{ color: 'white' }}>Details</a></div> */}
          </div>
        </div>
      </section>


    </>
  );
};

export default About;

