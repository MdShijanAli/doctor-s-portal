import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selected, setSelected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-20'>
            <p className='text-center text-secondary font-bold'>Available Appointments on: {format(selected, 'PP')}</p>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}

                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;