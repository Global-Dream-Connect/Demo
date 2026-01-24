import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';

const AuthenticatedResources = () => {
  return (
    /* Added w-full and overflow-x-hidden to prevent the left-side blank glitch */
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Main container: ensure mx-auto is set and width is full */}
      <main className="w-full max-w-[100vw] container mx-auto px-4 md:px-8 py-6 md:py-12">
        
        {/* Header Section */}
        <header className="mb-8 md:mb-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            <div className="w-full">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
                Resources <span className="text-slate-900">For You</span>
              </h1>
              <p className="text-gray-500 mt-2 text-base md:text-lg">Everything you need to go through this journey</p>
            </div>
            <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium">
              Contribute
            </button>
          </div>
          
          {/* Scrollable Nav: Ensure it doesn't break the container width */}
          <div className="flex gap-6 md:gap-8 text-sm text-gray-400 border-b border-gray-100 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <span className="text-blue-900 font-bold border-b-2 border-blue-900 pb-4 -mb-[18px] cursor-pointer">All</span>
            <span className="hover:text-gray-600 cursor-pointer">Blogs</span>
            <span className="hover:text-gray-600 cursor-pointer">Videos</span>
            <span className="hover:text-gray-600 cursor-pointer">Study guides</span>
            <span className="hover:text-gray-600 cursor-pointer">Templates</span>
          </div>
        </header>

        {/* Featured Section */}
        <section className="mb-12 md:mb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white rounded-3xl overflow-hidden">
            <div className="relative h-64 md:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden">
              <img 
                src="/images/How I became a Rhodes Scholar.png" 
                alt="Interview prep" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800">How to ace your interview</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Get a taste of what GDC has to offer with our free resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-medium text-center">Read Full Article →</button>
                <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium text-center">Download PDF</button>
              </div>
            </div>
          </div>
        </section>

        {/* University Roadmap / Skill Grid */}
        <section className="mb-16 md:mb-20 w-full">
          <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ResourceCard title="University Roadmaps" description="Step-by-step pathways..." buttonText="Download Roadmap" />
            <ResourceCard title="Skill-Building Toolkits" description="Essential tools..." buttonText="Explore Toolkits" />
            <ResourceCard title="Study Guides" description="Comprehensive guides..." buttonText="View Study Guide" />
          </div>
        </section>

        {/* Article Grid */}
        <section className="mb-16 md:mb-20 w-full">
          <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Your university projects are mo...</h4>
              <p className="text-sm text-gray-400">95k views • 10 mins read</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img src="/images/how-it-works.jpg" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2">How to write your application...</h4>
              <p className="text-sm text-gray-400">95k views • 10 mins read</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2">Your university projects are mo...</h4>
              <p className="text-sm text-gray-400">95k views • 10 mins read</p>
            </div>
          </div>
        </section>

        {/* Video Resources */}
        <section className="mb-16 md:mb-20 w-full">
          <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Video Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-60 md:h-80 w-full rounded-2xl md:rounded-3xl overflow-hidden">
                <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">How to ace your interview</h2>
              <button className="w-full md:w-auto bg-blue-950 text-white px-8 py-3 rounded-lg">Watch video →</button>
            </div>
          </div>
        </section>

        {/* CTA Banners */}
        <section className="mb-10 md:mb-20 bg-blue-950 rounded-2xl md:rounded-[40px] py-10 md:py-16 px-6 md:px-12 text-center text-white w-full">
          <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto">We have various opportunities lined up...</h2>
          <button className="w-full md:w-auto bg-white text-blue-950 px-8 py-3 rounded-lg font-bold">Explore our fellowships ↓</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthenticatedResources;