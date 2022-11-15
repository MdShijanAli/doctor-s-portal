import React from 'react';

const review = ({ review }) => {
    const { name, img, location, description } = review;
    return (
        <div className="card bg-base-100 shadow-xl my-5 ">
            <div className="card-body">
                <div>
                    <p>{description}</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className='mt-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img src={img} alt="Shoes" />
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default review;