import React, { useState } from "react";
import { doctorData } from "../helpers/data";
import { appointmentData } from "../helpers/data";
import { Doctors } from "../components/Doctors";
import { AppointmentList } from "../components/AppointmentList";

export const Home = () => {
  const [appointments , setAppointments] = useState(appointmentData)
  
  const handleAddApp = (newAppointment) => {
    setAppointments([...appointments, newAppointment])
  }

//   event yakaladığımız içine uniq bir ifadeyi yakalamamız gerekiyor o yüzden id gerekli
  const handleDoubleClick = (id) => {
    const updateList = appointments.map((item) => item.id == id ? {...item,consulted:!item.consulted} : item)
    setAppointments(updateList)
  }
//   console.log(appointments);
  
  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id)
    setAppointments(filteredList)
  };
  return (
    <main className="text-center mt-2">
      <h1 className="text-danger display-5 fw-bold">CLARUS HOSPITAL</h1>
      <Doctors doctorData={doctorData} handleAddApp={handleAddApp} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete} 
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};
