import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';
import SignUpCTA from '@/components/resources/SignUpCTA';

const Resources = () => {
  // Set to false for the "Before Signup" view with overlay
  // Set to true for the "After Signup" view
  const isLoggedIn = false; 

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-[100vw] container mx-auto px-4 md:px-8 py-6 md:py-12">
        
        {/* Header Section */}
        <header className="w-full mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 pr-4">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 pl-5 tracking-tight">
                <span className="text-blue-600">Resources</span> For You
              </h1>
              <p className="text-gray-500 mt-3 pt-10 pl-5 text-base md:text-lg">Everything you need to go through this journey</p>
            </div>
            
            {/* Conditional Button: Sign in to contribute vs Contribute */}
            <div className="w-full md:w-1/2 flex md:justify-start items-start">
              <div className="w-full md:w-auto mt-4 md:-mt-2 md:-translate-y-2 md:ml-auto">
              {!isLoggedIn ? (
                <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50 transition-all">
                  Sign in to contribute
                </button>
                ) : (
                <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-gray-50 transition-all">
                  Contribute
                </button>
                )}
              </div>
            </div>
          </div>
          {/* Sub-navigation */}
          <div className="flex gap-50 md:gap-10 text-xs md:text-sm font-medium text-gray-400 border-b border-gray-200 pt-10 pb-4 pl-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <span className="text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[18px] cursor-pointer">All</span>
            <span className="hover:text-slate-600 cursor-pointer">Blogs</span>
            <span className="hover:text-slate-600 cursor-pointer">Videos</span>
            <span className="hover:text-slate-600 cursor-pointer">Study guides</span>
            <span className="hover:text-slate-600 cursor-pointer">Templates</span>
          </div>
        </header>

        {/* Featured Hero: Interview Section */}
        <section className="mb-16 md:mb-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="/images/How I became a Rhodes Scholar.png" 
                alt="Student on laptop" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-5 md:space-y-7">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-800">How to ace your interview</h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
                  Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-[10px] text-white font-bold">G</div>
                <span className="text-sm font-bold text-slate-800">Global Dreams Connect Team</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-blue-900 transition flex items-center justify-center gap-2">
                  Read Full Article <span className="text-lg">→</span>
                </button>
                <button className="border border-blue-950 text-blue-950 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-20 md:mb-28">
          <h3 className="text-base md:text-lg font-semibold mb-8 text-slate-600">What resources we provide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ResourceCard title="University Roadmaps" description="Step-by-step pathways to your dream universities" buttonText="Download Roadmap" />
            <ResourceCard title="Skill-Building Toolkits" description="Essential tools to develop leadership, communication, and critical thinking" buttonText="Explore Toolkits" />
            <ResourceCard title="Study Guides" description="Comprehensive guides for standardized tests, essays, and applications" buttonText="View Study Guide" />
          </div>
        </section>

        {/* Top Picks Section with Conditional Overlay */}
        <section className="relative w-full mb-20 md:mb-32">
          <h3 className="text-base md:text-lg font-semibold mb-8 text-slate-400">Top picks by students</h3>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${!isLoggedIn ? 'opacity-20 blur-[2px] pointer-events-none select-none' : ''}`}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden mb-5 shadow-sm">
                  <img 
                    src={i === 2 ? "/images/how-it-works.jpg" : "/images/How I became a Rhodes Scholar.png"} 
                    alt="Resource thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2 leading-tight">Your university projects are mo...</h4>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-200 rounded-full inline-block"></span> 95k views • 10 mins read
                </p>
              </div>
            ))}
          </div>

          {/* Sign Up Overlay (Only shows when NOT logged in) */}
          {!isLoggedIn && (
            <div className="absolute top-12 left-0 w-full z-20">
              <SignUpCTA />
            </div>
          )}
        </section>

        {/* Authenticated-Only Sections */}
        {isLoggedIn && (
          <>
            {/* Video Resources */}
            <section className="mb-24 md:mb-32">
              <h3 className="text-base md:text-lg font-semibold mb-10 text-slate-400">Video Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="relative h-64 md:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                  <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:scale-110 transition">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">How to ace your interview</h2>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">Get a taste of what GDC has to offer with our free resources.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-950 text-white px-10 py-4 rounded-xl font-bold text-sm shadow-lg hover:bg-blue-900 transition">Watch video →</button>
                    <button className="border border-gray-200 text-slate-600 px-10 py-4 rounded-xl font-bold text-sm hover:bg-gray-50 transition">Read the blog</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Contribute Banner */}
            <section className="mb-24 md:mb-32 bg-purple-50/50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-purple-100">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contribute to our resources</h2>
                <p className="text-gray-500 text-base md:text-lg">Write an article or post on our platform for free and get published online at one of the best student mentorship platforms.</p>
              </div>
              <button className="whitespace-nowrap bg-blue-950 text-white px-12 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition flex items-center gap-2">
                Add a post <span className="text-xl">→</span>
              </button>
            </section>
          </>
        )}

        {/* Bottom Fellowship Banner */}
        <section className="mb-10 md:mb-20 bg-blue-950 rounded-[40px] py-16 md:py-24 px-6 md:px-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-10 max-w-3xl mx-auto leading-tight">
              We have various opportunities lined up you do not want to miss out on
            </h2>
            <button className="bg-white text-blue-950 px-10 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition shadow-lg inline-flex items-center gap-3">
              Explore our fellowships <span className="text-lg">↓</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;