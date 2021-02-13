import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'

function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Estimados Docentes</Alert.Heading>
        <p style={{ color: "#000" }}>Se informa que <strong>continúa la recopilación de datos de Aulas Virtuales</strong>. Por ello se solicita a los docentes responsables de aulas virtuales implementadas, o por implementar, que tengan a bien enviar un correo electrónico a la dirección <a href="mailto:luisluquecarot@gmail.com" style={{ color: "#721c24", fontWeight: "bold" }}>luisluquecarot@gmail.com</a>, con copia a <a href="mailto:comunicacionfaya@gmail.com" style={{ color: "#721c24", fontWeight: "bold" }}>comunicacionfaya@gmail.com</a>, con el asunto “Aula Virtual (nombre de cátedra)”, consignando en el cuerpo del mail los siguientes datos: carrera, cátedra, docente responsable AV, mail, teléfono, plataforma AV (Moodle, Google Classroom, EIE, etc.).</p>
      </Alert>
    );
  }
  return <></>
}

export default AlertDismissible
