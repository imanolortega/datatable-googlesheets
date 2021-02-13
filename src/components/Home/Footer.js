import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="mx-5">
      <hr className="mx-5" id="consultas"/>
      </div>
      <div className="container">
        <div className="row align-items-center no-gutters py-2">
            
            <div className="col-md-6 col-12 footer-av">
                <span>© 2021 FAyA-UNSE. Sitio web creado por Área de Comunicación FAyA.</span>
            </div>
              
            <div className="col-12 col-md-6">
                <nav className="nav justify-content-center justify-content-md-end footer-av-links">
                    
                    <a className="nav-link nav-link-footer" href="#agronomia">Carreras </a>
                    <a className="nav-link nav-link-footer" href="#consultas">Consultas</a>
                    <a className="nav-link nav-link-footer" href="http://faya.unse.edu.ar/">Web FAyA</a>

                </nav>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
