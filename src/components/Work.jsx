import React from "react";
import ButtonLink from "./ButtonLink";
// import Slider from "react-slick";
import "./work.css";
import anywaremarket from "../Assets/anywaremarket.png";
import notekeeper from "../Assets/notekeeper.png";
import tindog from "../Assets/tindog.png";
import lipser from "../Assets/lipser.png";


export default function Work() {
  return (
    <div className="works-main">
      <div className="works-inner">
        <div className="works-heading">
          <h2>Recent Works</h2>
        </div>
        <div className="works-container">
          <div className="container-inner">
          <div className="cardsss">
              <img src={anywaremarket} alt="ecommerce website" />
              <div className="cards-in">
                <p>
                Built a responsive e-commerce site using MERN stack for a seamless online shopping experience.
                </p>
                <ButtonLink lin="https://anywaremarket.onrender.com/" />
              </div>
            </div>
            <div className="cardsss">
              <img src={notekeeper} alt="Keeper website" />
              <div className="cards-in">
                <p>  Crafted 'Note Keeper,' a responsive React website using JSX, JavaScript, CSS, and HTML to facilitate seamless note organization and management.</p>
                <ButtonLink lin="https://notes-keeperwebsite.netlify.app/" />
              </div>
            </div>
            <div className="cardsss">
              <img src={tindog} alt="Tindog website" />
              <div className="cards-in">
                <p>
                  Animated static webpage using HTML, CSS and BootStrap.
                </p>
                <ButtonLink lin="https://abubakar545.github.io/TinDog_Project/" />
              </div>
            </div>
            <div className="cardsss">
              <img src={lipser} alt="Api calling website" />
              <div className="cards-in">
                <p>  SecretAPI Explorer - Securely interacts with external APIs through seamless, animated requests on page reload.</p>
                <ButtonLink lin="https://secrets-6fhm.onrender.com/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
