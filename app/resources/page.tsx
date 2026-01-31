import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';
import SignUpCTA from '@/components/resources/SignUpCTA';
import { Users, User, Circle } from 'lucide-react'; // Added Lucide icons

const Resources = () => {
  // Toggle for testing: false = Pre-Signup View, true = Post-Signup View
  const isLoggedIn = true; 

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="w-full max-w-[100vw] container mx-auto px-4 md:px-8 py-6 md:py-12 flex-grow">
        
        {/* Header Section */}
        <header className="mb-8 md:mb-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 tracking-tight">
                <span className="text-blue-600">Resources</span> For You
              </h1>
              <p className="text-gray-500 mt-3 pt-5 text-base md:text-lg">Everything you need to go through this journey</p>
            </div>
            <div className="w-full md:w-auto ml-auto -mt-2">
            <div className="w-full md:w-auto">
              {!isLoggedIn ? (
                <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium text-slate-600 whitespace-nowrap">
                  Sign in to contribute
                </button>
              ) : (
                <button className="w-full md:w-auto border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium text-slate-600">
                  Contribute
                </button>
              )}
            </div>
            </div>
          </div>
          
          <div className="relative w-full border-b border-gray-100">
            <div className="flex gap-8 md:gap-10 text-xs md:text-sm font-medium text-gray-400 pb-4 pt-5 overflow-x-auto scrollbar-hide items-center">
              <span className="text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[18px] cursor-pointer whitespace-nowrap">All</span>
              <span className="hover:text-slate-600 cursor-pointer whitespace-nowrap">Blogs</span>
              <span className="hover:text-slate-600 cursor-pointer whitespace-nowrap">Videos</span>
              <span className="hover:text-slate-600 cursor-pointer whitespace-nowrap">Study guides</span>
              <span className="hover:text-slate-600 cursor-pointer whitespace-nowrap">Templates</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Section */}
        <section className={`mb-16 md:mb-24 w-full ${!isLoggedIn ? 'border-2 md:border-4 border-blue-50 p-4 md:p-6 rounded-3xl' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-sm">
              <img src="/images/How I became a Rhodes Scholar.png" alt="Student" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800">How to ace your interview</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-blue-900 transition-colors">Read Full Article →</button>
                <button className="border border-blue-950 text-blue-950 px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">Download PDF</button>
              </div>
            </div>
          </div>
        </section>

        {/* What Resources we Provide */}
        <section className="mb-20">
          <h3 className="text-base md:text-lg font-semibold mb-8 text-slate-600">What resources we provide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ResourceCard title="University Roadmaps" description="Step-by-step pathways..." buttonText="Download Roadmap" />
            <ResourceCard title="Skill-Building Toolkits" description="Essential tools..." buttonText="Explore Toolkits" />
            <ResourceCard title="Study Guides" description="Comprehensive guides..." buttonText="View Study Guide" />
          </div>
        </section>

        {/* Overlay Section: Top picks by students */}
        <section className="relative w-full overflow-visible mb-20">
          <h3 className="text-base md:text-lg font-semibold mb-8 text-slate-400">Top picks by students</h3>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${!isLoggedIn ? 'opacity-40 blur-[2px] pointer-events-none' : ''}`}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`relative group ${!isLoggedIn && i > 1 ? 'hidden sm:block' : ''}`}>
                <div className={`relative bottom-0 w-full overflow-hidden mb-5 rounded-2xl ${!isLoggedIn ? 'h-10 md:h-20' : 'h-56 md:h-64 shadow-sm'}`}>
                  <img 
                    src={i === 2 ? "/images/how-it-works.jpg" : "/images/How I became a Rhodes Scholar.png"} 
                    className="w-full h-full object-cover" 
                  />
                  {!isLoggedIn && (
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                  )}
                </div>

                {/* Post-login Content with Lucide Icons */}
                {isLoggedIn && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-slate-800 leading-tight">
                      {i === 2 ? "How to write your application e..." : "Your university projects are mo..."}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {i === 2 ? "Step-by-step pathways for your dream universities" : "If you can solve problems in class - you can prove your skills to employers..."}
                    </p>
                    
                    {/* Overlapping Lucide Icons and View Count */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center">
                          <User size={12} className="text-white" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center">
                          <Circle size={10} className="text-white fill-white" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
                          <Users size={12} className="text-slate-600" />
                        </div>
                      </div>
                      <span className="text-[10px] md:text-xs text-gray-400 font-medium">156 views • 10 mins read</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!isLoggedIn && (
            <div className="relative top-26 left-0 w-full h-[calc(100%+80px)] md:h-[calc(100%+120px)] z-20 flex flex-col justify-end">
              <SignUpCTA />
            </div>
          )}
        </section>

        {/* Post-Login Exclusive Sections */}
        {isLoggedIn && (
          <>
            {/* Video Resources Section */}
            <section className="mb-24">
              <h3 className="text-base md:text-lg font-semibold mb-10 text-slate-400">Video Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative h-64 md:h-[400px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                  <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-800">How to ace your interview</h2>
                  <p className="text-gray-500 text-lg leading-relaxed">Get a taste of what GDC has to offer with our free resources.</p>
                  <div className="flex gap-4">
                    <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-bold">Watch video →</button>
                    <button className="border border-gray-200 text-slate-600 px-8 py-3 rounded-lg font-bold">Read the blog</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Contribution Banner */}
            <section className="mb-24 bg-purple-50/50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-purple-100">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contribute to our resources</h2>
                <p className="text-gray-500 text-lg">Write an article or post on our platform for free and get published online at one of the best student mentorship platforms.</p>
              </div>
              <button className="bg-blue-950 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2">
                Add a post <span className="text-xl">→</span>
              </button>
            </section>

            {/* Opportunity Banner */}
            <section className="mb-10 bg-blue-950 rounded-[40px] py-16 md:py-24 px-6 text-center text-white">
              <h2 className="text-2xl md:text-5xl font-bold mb-10 max-w-3xl mx-auto leading-tight">
                We have various opportunities lined up you do not want to miss out on
              </h2>
              <button className="bg-white text-blue-950 px-10 py-4 rounded-xl font-bold">Explore our fellowships ↓</button>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Resources;