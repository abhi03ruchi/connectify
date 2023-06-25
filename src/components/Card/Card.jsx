import { React, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const GigCard = ({ item }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
      const currentCard = e.target.closest(".card");
      const targetSection = e.target.getAttribute("data-section");
      const section = currentCard.querySelector(targetSection);
      const buttons = currentCard.querySelectorAll(".card-buttons button");

      targetSection !== "#about"
        ? currentCard.classList.add("is-active")
        : currentCard.classList.remove("is-active");
      currentCard.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");

      // Remove is-active class from other cards
      const allCards = document.querySelectorAll(".card");
      allCards.forEach((card) => {
        if (card !== currentCard) {
          card.classList.remove("is-active");
          const mainSection = card.querySelector(".card-main");
          const headerSection = card.querySelector(".card-header");
          mainSection.classList.add("is-active");
          headerSection.classList.add("is-active");
        }
      });
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    // Cleanup the event listener on component unmount
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleButtonClick);
      });
    };
  }, []);

  return (
    <Link to="./" className="link">
      <div className="card-container">
        <div
          class="card"
          data-state="#about"
          style={{ borderLeftColor: item.bColor }} // Set border color
        >
          <div class="card-header">
            <div class="card-cover"></div>
            <img class="card-avatar" src={item.pp} alt="avatar" />
            <h1 class="card-fullname">{item.username}</h1>
            <h2 class="card-jobtitle">{item.jobtitle}</h2>
          </div>
          <div class="card-main">
            <div class="card-section is-active" id="about">
              <div class="card-content">
                <div class="card-subtitle">ABOUT</div>
                <p class="card-desc">{item.desc}</p>
              </div>
              <div class="card-social">
                <a href="#">
                  {" "}
                  <LinkedIn />
                </a>
                <a href="#">
                  {" "}
                  <GitHub />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Instagram />
                </a>
              </div>
            </div>
            <div class="card-section" id="experience">
              <div class="card-content">
                <div class="card-subtitle">WORK EXPERIENCE</div>
                <div class="card-timeline">
                  <div class="card-item" data-year="2014">
                    <div class="card-item-title">{item.post1}</div>
                    <div class="card-item-desc">{item.post1desc}</div>
                  </div>
                  <div class="card-item" data-year="2016">
                    <div class="card-item-title">{item.post2}</div>
                    <div class="card-item-desc">{item.post2desc}</div>
                  </div>
                  <div class="card-item" data-year="2018">
                    <div class="card-item-title">{item.post3}</div>
                    <div class="card-item-desc">{item.post3desc}</div>
                  </div>
                  <div class="card-item" data-year="2020">
                    <div class="card-item-title">{item.post4}</div>
                    <div class="card-item-desc">{item.post4desc}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-section" id="contact">
              <div class="card-content">
                <div class="card-subtitle">CONTACT</div>
                <div class="card-contact-wrapper">
                  <div class="card-contact">
                    <LocationOnIcon />
                    Algonquin Rd, Three Oaks Vintage, MI, 49128
                  </div>
                  <div class="card-contact">
                    <PhoneIcon />
                    (269) 756-9809
                  </div>
                  <div class="card-contact">
                    <EmailIcon />
                    william@rocheald.com
                  </div>
                  <button class="contact-me">MESSAGE</button>
                </div>
              </div>
            </div>
            <div class="card-buttons">
              <button data-section="#about" class="is-active">
                ABOUT
              </button>
              <button data-section="#experience">EXPERIENCE</button>
              <button data-section="#contact">CONTACT</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
