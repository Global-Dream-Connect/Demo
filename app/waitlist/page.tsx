import Waitlist from '@/components/waitlist/Waitlist';
import WaitlistNavbar from '@/components/waitlist/WaitlistNavbar';
import React from 'react';

const waitlist = () => {
    return (
        <div>
            <WaitlistNavbar/>
            <Waitlist/>
           
        </div>
    );
};

export default waitlist;
