import React from 'react';
import dentalBanner from '../../../../assets/images/treatment.png'

const DentalBanner = () => {
    return (
        <div className=" md:mx-40 mx-auto">
            <div className="hero-content gap-20 flex-col lg:flex-row">
                <img src={dentalBanner} alt='treate' className=" md:h-[576px] rounded-lg shadow-2xl" />
                <div className='md:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="text-white btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalBanner;