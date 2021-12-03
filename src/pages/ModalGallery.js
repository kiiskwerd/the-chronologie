import React from "react";
import "../assets/styles/modal.css";
import img1 from "../assets/images/logo00.png";
import img2 from "../assets/images/logo01.png";
import img3 from "../assets/images/logo02.png";
import img4 from "../assets/images/logo03.png";
import img5 from "../assets/images/logo04.png";
import img6 from "../assets/images/logo05.png";
import img7 from "../assets/images/logo06.png";
import img8 from "../assets/images/logo07.png";
import { Button } from "react-bootstrap";

export const ModalGallery = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <Button
            className="btn-modal-close"
            type="button"
            onClick={handleClose}
          >
            X
          </Button>
        </div>
        <div className="modal-body">
          <div className="logo-container">
            <div className="logo-container__1">
              <img height="30" src={img3} alt="Auditions" />
            </div>
            <div className="logo-container__1">
              <img height="30" src={img4} alt="Cebu Modeling" />
            </div>
            <div className="logo-container__1">
              <img height="30" src={img5} alt="Manila Modeling" />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-container__1">
              <img
                height="40"
                src={img1}
                alt="Explore Talent: Casting Director Module"
              />
            </div>
            <div className="logo-container__1">
              <img height="30" src={img6} alt="Tracki: GPS Tracking App" />
            </div>
            <div className="logo-container__1">
              <img
                height="40"
                src={img2}
                alt="Explore Talent: Where Talent and Jobs Connect"
              />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-container__1">
              <img height="40" src={img8} alt="Cockpit Project" />
            </div>
            <div className="logo-container__1">
              <img height="70" src={img7} alt="nIMS" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
