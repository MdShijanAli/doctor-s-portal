import React from 'react';
import appointment from '../../../../assets/images/appointment.png'

const ContactSection = () => {
    return (
        <div className="hero p-5 pb-20 my-20" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="md:w-1/3 text-center text-neutral-content">
                <div className='my-10'>
                    <h4 className='text-xl text-primary font-bold'> Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>

                <div className="shadow-2xl">

                    <div className="form-control my-3">

                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control my-3">

                        <input type="text" placeholder="Subject" className="input input-bordered" />

                    </div>
                    <div className="form-control my-3">
                        <textarea className="textarea textarea-info " rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactSection;