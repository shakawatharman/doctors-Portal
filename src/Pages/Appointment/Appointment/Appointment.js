import React from 'react';
import Header from '../../Home/Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
      <div>
            <Header></Header>
        <AppointmentHeader></AppointmentHeader>
        <AvailableAppointment></AvailableAppointment>
      </div>
    );
};

export default Appointment;