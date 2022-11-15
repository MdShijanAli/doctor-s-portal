import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import appoinment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section className='md:mt-52 my-20'
            style={{
                background: `url(${appoinment})`
            }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='doctor' className="md:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-36 " />
                    <div className='text-white'>
                        <h3 className='text-primary font-bold'>Appointment</h3>
                        <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Make Appoinment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;