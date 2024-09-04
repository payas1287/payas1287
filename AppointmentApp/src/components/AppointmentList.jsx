import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import img1 from '../assets/appointment.jpg'

export const AppointmentList = ({ appointments, handleDelete, handleDoubleClick }) => {
    console.log(appointments);
  //   console.log(new Date());
  return (
    <Container>
      <h3>Appointment List</h3>
      {appointments.length === 0 && (
        <img width="70%" src={img1} alt="appointment" />
      )}
      {appointments.map(({ id, patient, day, consulted, doctor }) => (
        <div key={id} className={consulted ? "consultedTrue" : "consultedFalse"}>
          <Row onDoubleClick={() => handleDoubleClick(id)}>
            <Col xs={3} md={6} lg={1}>
              <h3>{patient}</h3>
              <h4>{doctor}</h4>
            </Col>

            <Col>
              {/* zamanı parçalayarak istediğimiz formatta aldık */}
              <h3>Date : {new Date(day).toLocaleDateString("tr")}</h3>
              <h4>Time : {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col>
              <TiDelete
                type="button"
                className="text-danger fs-1"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};
