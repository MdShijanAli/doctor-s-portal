import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selected, setSelected }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP')
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;

        }


    })


    if (isLoading) {
        return <Loading></Loading>
    }



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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;