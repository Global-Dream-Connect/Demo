
import FellowshipFilters from '@/components/fellowship/FellowshipFilters';
import SuccessStories from '@/components/fellowship/SuccessStories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Fellowships = () => {
    return (
        <div>
        <Header></Header>
        <div className='container mx-auto px-2'>
            <FellowshipFilters/>
            <SuccessStories/>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Fellowships;

