import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const CardSection = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 AM to 5.00 PM Everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Newtown 7no, Dinajpur Sadar, Dinajpur',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '+880 157126 1165',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },

    ]
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default CardSection;