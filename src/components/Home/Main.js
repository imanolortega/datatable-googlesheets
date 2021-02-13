import React from 'react'
import AlertDismissible from '../Alert'
import './Home.css'

const Main = () => {
    return (
        <div className="pt-5 pt-md-11">
            <div className="container">
                <div className="row align-items-center m-3">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2">
                        <img src="aulas-virtuales-faya-unse-2020.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" data-aos-delay="100" />
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
                        <h1 className="h-2 text-center text-md-left">
                            <span className="av-text-main">Aulas Virtuales</span><br />FAyA-UNSE
                        </h1>
                        <p className="lead text-center text-md-left mb-6 mb-lg-8">
                            Para el desarrollo de contenidos de las diferentes cátedras de todas las carreras que se dictan en nuestra Facultad.
                        </p>
                        <div className="text-center text-md-left">
                            <a href="#agronomia" className="btn-av">Ver Nóminas</a>
                            <a href="#consultas" className="btn-av-soft ml-2">
                            Consultas
                            </a>
                        </div>
                    </div>
                </div>
                <div className="blank-container"></div>
                <AlertDismissible/>
            </div>
        </div>
    )
}

export default Main
