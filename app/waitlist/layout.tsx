
import ResearchPaper from '@/components/waitlist/ResearchPaper';
import WaitlistFooter from '@/components/waitlist/WaitlistFooter';
import React from 'react';

const WaitlistLayout = () => {
    return (
        <div>
            <div className='grid grid-cols-12 justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <ResearchPaper/>


                {/* From Section  */}
                <div className='col-span-12 md:col-span-5'>
                    form secion
                </div>

            </div>






            <WaitlistFooter />
        </div>
    );
};

export default WaitlistLayout;