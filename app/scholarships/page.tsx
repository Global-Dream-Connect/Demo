import Footer from '@/components/fellowship/Footer';
import Navbar from '@/components/fellowship/Navbar';
import AvailableScholarshipsBeforeLogin from '@/components/scholarships/AvailableScholarshipsBeforeLogin';
import HowToApply from '@/components/scholarships/HowToApply';
import ScholarshipsFilter from '@/components/scholarships/scholarshipsFilter';
import React from 'react';

const Scholarships = () => {
    return (
        <div>
            <Navbar/> {/* Post-Login Navbar */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <ScholarshipsFilter/>
                <HowToApply/>
                <AvailableScholarshipsBeforeLogin/>
            </div>
            <Footer/>
        </div>
    );
};

export default Scholarships;














