import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';
import SignUpCTA from '@/components/resources/SignUpCTA';

const Resources = () => {
  // Toggle this to true/false to switch views
  const isLoggedIn = true; 

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />

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
            {isLoggedIn && (
              <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Contribute
              </button>
            )}
          </div>
          
          {/* Navigation Tabs (Only visible when logged in) */}
          {isLoggedIn && (
            <div className="flex gap-6 md:gap-8 text-sm text-gray-400 border-b border-gray-100 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <span className="text-blue-900 font-bold border-b-2 border-blue-900 pb-4 -mb-[18px] cursor-pointer">All</span>
              <span className="hover:text-gray-600 cursor-pointer">Blogs</span>
              <span className="hover:text-gray-600 cursor-pointer">Videos</span>
              <span className="hover:text-gray-600 cursor-pointer">Study guides</span>
              <span className="hover:text-gray-600 cursor-pointer">Templates</span>
            </div>
          )}
        </header>

        {/* Featured Section (Different styling based on Login) */}
        <section className={`mb-12 md:mb-16 w-full ${!isLoggedIn ? 'border-4 border-blue-50 p-4 md:p-6 rounded-3xl' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white overflow-hidden">
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
                Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.
              </p>
              {isLoggedIn && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-[10px] text-white">G</div>
                  <span className="text-sm font-semibold">Global Dreams Connect Team</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-medium text-center">Read Full Article →</button>
                {isLoggedIn && (
                   <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium text-center">Download PDF</button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Top Picks: Category Grid (University Roadmap etc.) */}
        <section className="mb-16 md:mb-20 w-full">
          <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ResourceCard title="University Roadmaps" description="Step-by-step pathways to your dream universities" buttonText="Download Roadmap" />
            <ResourceCard title="Skill-Building Toolkits" description="Essential tools to develop leadership and communication" buttonText="Explore Toolkits" />
            <ResourceCard title="Study Guides" description="Comprehensive guides for standardized tests and essays" buttonText="View Study Guide" />
          </div>
        </section>

        {/* --- AUTHENTICATED ONLY CONTENT --- */}
        {isLoggedIn ? (
          <>
            {/* Article Grid */}
            <section className="mb-16 md:mb-20 w-full">
              <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Top picks by students</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="group cursor-pointer">
                  <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4">
                    <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Your university projects are mo...</h4>
                  <p className="text-xs text-gray-400">95k views • 10 mins read</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4">
                    <img src="/images/how-it-works.jpg" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">How to write your application...</h4>
                  <p className="text-xs text-gray-400">95k views • 10 mins read</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-4">
                    <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Your university projects are mo...</h4>
                  <p className="text-xs text-gray-400">95k views • 10 mins read</p>
                </div>
              </div>
            </section>

            {/* Video Resources */}
            <section className="mb-16 md:mb-20 w-full">
              <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-slate-500">Video Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-60 md:h-80 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
                    <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">How to ace your interview</h2>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">Get a taste of what GDC has to offer with our free resources.</p>
                  <button className="w-full md:w-auto bg-blue-950 text-white px-8 py-3 rounded-lg font-medium">Watch video →</button>
                </div>
              </div>
            </section>

            {/* Contribute Banner */}
            <section className="mb-16 md:mb-20 bg-purple-50 rounded-2xl md:rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Contribute to our resources</h2>
                <p className="text-gray-600 text-sm md:text-base">Write an article or post on our platform for free and get published online.</p>
              </div>
              <button className="w-full md:w-auto bg-blue-950 text-white px-10 py-4 rounded-xl font-bold">Add a post →</button>
            </section>
          </>
        ) : (
          /* --- GUEST ONLY CONTENT --- */
          <SignUpCTA />
        )}

        {/* Opportunity Banner (Visible to All) */}
        <section className="mb-10 md:mb-20 bg-blue-950 rounded-2xl md:rounded-[40px] py-10 md:py-16 px-6 md:px-12 text-center text-white w-full">
          <h2 className="text-xl md:text-4xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto">We have various opportunities lined up you do not want to miss out on</h2>
          <button className="w-full md:w-auto bg-white text-blue-950 px-8 py-3 rounded-lg font-bold">Explore our fellowships ↓</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;