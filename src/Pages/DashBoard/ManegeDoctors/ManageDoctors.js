import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl font-semibold'>My Appointment</h3>
            <div className="overflow-x-auto my-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img className='' src={doctor.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor?.speciality}</td>
                                <td><button className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;