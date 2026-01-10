
import FellowshipFilters from '@/components/fellowship/FellowshipFilters';
import Footer from '@/components/fellowship/Footer';
import Navbar from '@/components/fellowship/Navbar';
import Navbar2 from '@/components/fellowship/Navbar2';
import ResourceBanner from '@/components/fellowship/ResourceBanner';
import RhodesScholar from '@/components/fellowship/RhodesScholar';
import SuccessStories from '@/components/fellowship/SuccessStories';
import SuccessStoriesStatic from '@/components/fellowship/SuccessStoriesStatic';


const Fellowships = () => {
    return (
        <div>
        
            <Navbar/> {/* Post-Login Navbar */}
            {/* <Navbar2/>  */}
            {/* please uncomment if needed (Navbar2)*/}
        <div className='container mx-auto px-2'>

            <FellowshipFilters/>
            {/* <SuccessStories/> */}
            <SuccessStoriesStatic/>
            <RhodesScholar/>
            <ResourceBanner/>

        </div>
            <Footer/>
        
        </div>
    );
};

export default Fellowships;

