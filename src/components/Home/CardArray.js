import React from 'react'

const CardArray = () => {

  const docentes1 = [{
    nombre: 'Ing. Érica Raña',
    rol: 'Directora Escuela de Agronomía',
    email: 'mailto:eriran@unse.edu.ar',
    carrera: 'Ing. Agronómica'
  },
  {
    nombre: 'Dra. Nora Pece',
    rol: 'Directora Escuela de Alimentos',
    email: 'mailto:norapece@unse.edu.ar',
    carrera: 'Ing. en Alimentos'
  },
  {
    nombre: 'Dr. Luis Dorado',
    rol: 'Coordinador Lic. en Biotecnología',
    email: 'mailto:luisdorado79@hotmail.com',
    carrera: 'Lic. en Biotecnología'
  }
  ]

  const docentes2 = [
    {
      nombre: 'Dr. Héctor Boggetti',
      rol: 'Director Escuela de Química',
      email: 'mailto:boggetti@unse.edu.ar',
      carrera: 'Lic. y Prof. en Química'
    },
    {
      nombre: 'Dr. José Maidana',
      rol: 'Coordinador Tec. Univ. en Apicultura',
      email: 'mailto:jmai@unse.edu.ar',
      carrera: 'Tec. Univ. en Apicultura'
    }
  ]

  const docentes3 = [
    {
      nombre: 'Ing. Érica Raña',
      rol: 'Directora Escuela de Agronomía',
      email: 'mailto:eriran@unse.edu.ar',
      carrera: 'Ing. Agronómica'
    },
    {
      nombre: 'Dra. Nora Pece',
      rol: 'Directora Escuela de Alimentos',
      email: 'mailto:norapece@unse.edu.ar',
      carrera: 'Ing. en Alimentos'
    },
    {
      nombre: 'Dr. Luis Dorado',
      rol: 'Coordinador Lic. en Biotecnología',
      email: 'mailto:luisdorado79@hotmail.com',
      carrera: 'Lic. en Biotecnología'
    },
    {
      nombre: 'Dr. Héctor Boggetti',
      rol: 'Director Escuela de Química',
      email: 'mailto:boggetti@unse.edu.ar',
      carrera: 'Lic. y Prof. en Química'
    },
    {
      nombre: 'Dr. José Maidana',
      rol: 'Coordinador Tec. Univ. en Apicultura',
      email: 'mailto:jmai@unse.edu.ar',
      carrera: 'Tec. Univ. en Apicultura'
    }
  ]

  return (
    <>
      <div className="mx-5">
      <hr className="mx-5"/>
      </div>

      <div className="container text-center my-5">
        <h1 className="h-2 text-center">
          <span>Consultas</span><br />
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <div className="hidden-mobile card-deck col-10">

          {docentes1.map(docente => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{docente.nombre}</h5>
                <p className="card-text">{docente.rol}</p>
                <a className="btn-av" href={docente.email}>Contactar</a>
              </div>
              <div className="card-footer">
                {docente.carrera}
              </div>
            </div>
          ))}

        </div>

      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="hidden-mobile card-deck col-8">

          {docentes2.map(docente => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{docente.nombre}</h5>
                <p className="card-text">{docente.rol}</p>
                <a className="btn-av" href={docente.email}>Contactar</a>
              </div>
              <div className="card-footer">
                {docente.carrera}
              </div>
            </div>
          ))}

        </div>

      </div>

      <div className="hidden-desktop justify-content-center">
        <div className="card-deck col-11">

          {docentes3.map(docente => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{docente.nombre}</h5>
                <p className="card-text">{docente.rol}</p>
                <a className="btn-av" href={docente.email}>Contactar</a>
              </div>
              <div className="card-footer">
                {docente.carrera}
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default CardArray
