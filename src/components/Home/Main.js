import React from "react";

const Main = () => {
  return (
    <div className="pt-5 pt-md-11">
      <div className="container">
        <div className="row align-items-center m-3">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src="clases-virtuales-faya-unse-2021.png"
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
              alt="..."
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div
            className="col-12 col-md-7 col-lg-6 order-md-1"
            data-aos="fade-up">
            <h1 className="h-2 text-center text-md-left">
              <span className="av-text-main">Clases Virtuales</span>
              <br />
              FAyA-UNSE
            </h1>
            <p className="lead text-center text-md-left mb-6 mb-lg-8">
              Enlaces Zoom para el desarrollo de las Clases Virtuales de las
              diferentes cátedras de nuestra Facultad.
            </p>
            <div className="text-center text-md-left">
              <a href="#agronomia" className="btn-av">
                Ver Enlaces
              </a>
              <a href="#consultas" className="btn-av-soft ml-2">
                Consultas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
