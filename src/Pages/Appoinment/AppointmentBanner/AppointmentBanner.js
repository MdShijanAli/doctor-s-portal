import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <header>
            <div className="hero">
                <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                    <img src={chair} alt='banner' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}

                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;