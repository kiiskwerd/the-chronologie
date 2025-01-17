import React, { useState } from "react";
import { ModalGallery } from "./ModalGallery";
import "../assets/styles/main.css";

export const Landing = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <div className="base">
      <main className="parallax">
        <section className="section parallax bg1">
          <div className="content">
            <h1 className="title">karen key</h1>
            <div className="ls_container">
              <p className="ls">
                software developer / designer / qa engineer / aspiring artist
              </p>
            </div>
          </div>
        </section>
        <section className="section parallax static">
          <div className="container">
            <div className="content_box">
              <div className="expertise-container">
                <h2 className="heading">expertise</h2>
                
                <div className="expertise-flex-container">
                  <p className="expertise-container_text">frontend web development</p>
                  <p className="progress">-------</p>
                </div>

                  <p className="expertise-container_text">web design</p>
                  <p className="progress">--------</p>   

                  <p className="expertise-container_text">graphic design</p>
                  <p className="progress">---------</p>

                  <p className="expertise-container_text">ui/ux</p>
                  <p className="progress">---------</p>

                  <p className="expertise-container_text">qa testing</p>
                  <p className="progress">---------</p>


                  <p className="expertise-container_text">music production</p>
                  <p className="progress">------</p>

              </div>
            </div>
          </div>
        </section>
        <section className="section parallax static">
          <div className="container">
            <div className="content_box">
              <h2 className="heading">works</h2>
              <div className="box-1">
                <div className="testimonial-container">
                  <div className="testimonial-1">
                    <div>
                      <h3>joint projects</h3>
                      <p className="description text-dark">
                        the projects I get to work with in a team
                      </p>
                    </div>
                    <div className="link-container">
                      <button className="btn-more" onClick={showModal}>
                        show more
                      </button>
                      <ModalGallery show={show} handleClose={hideModal} />
                    </div>
                  </div>

                  <div className="testimonial-2">
                    <div>
                      <h3>personal</h3>
                      <p className="description text-dark">
                        these are some of my sideline projects
                      </p>
                    </div>
                    <div className="link-container">
                      {/* <Button className="btn-more">view gallery</Button> */}
                      <a
                        className="btn-more"
                        href="https://www.behance.net/karencabingatan"
                        target="_blank"
                        rel="noreferrer"
                      >
                        view more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="placeholder">
          © Copyright 2021 | All rights reserved | karencabingatan@gmail.com
        </footer>
      </main>
    </div>
  );
};
