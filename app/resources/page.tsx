import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';
import Image from 'next/image';

const AuthenticatedResources = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-5xl font-bold text-blue-600">
                Resources <span className="text-slate-900">For You</span>
              </h1>
              <p className="text-gray-500 mt-2 text-lg">Everything you need to go through this journey</p>
            </div>
            <button className="border border-gray-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Add a post
            </button>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400 border-b border-gray-100 pb-4">
            <span className="text-blue-900 font-bold border-b-2 border-blue-900 pb-4 -mb-[18px] cursor-pointer">All</span>
            <span className="hover:text-gray-600 cursor-pointer">Blogs</span>
            <span className="hover:text-gray-600 cursor-pointer">Videos</span>
            <span className="hover:text-gray-600 cursor-pointer">Study guides</span>
            <span className="hover:text-gray-600 cursor-pointer">Templates</span>
          </div>
        </header>

        {/* Featured Interview Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden">
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden">
              <img 
                src="/images/How I became a Rhodes Scholar.png" 
                alt="Interview prep" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800">How to ace your interview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-[10px] text-white">G</div>
                <span className="text-sm font-semibold">Global Dreams Connect Team</span>
              </div>
              <div className="flex gap-4">
                <button className="bg-blue-950 text-white px-8 py-3 rounded-lg font-medium">Read Full Article →</button>
                <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-medium">Download PDF</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADDED SECTION: Resource Category Grid --- */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard 
                title="University Roadmaps" 
                description="Step-by-step pathways to your dream universities" 
                buttonText="Download Roadmap" 
            />
            <ResourceCard 
                title="Skill-Building Toolkits" 
                description="Essential tools to develop leadership, communication, and critical thinking" 
                buttonText="Explore Toolkits" 
            />
            <ResourceCard 
                title="Study Guides" 
                description="Comprehensive guides for standardized tests, essays, and applications" 
                buttonText="View Study Guide" 
            />
          </div>
        </section>

        {/* Top Picks Articles Grid */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                      src="/images/How I became a Rhodes Scholar.png" 
                      alt="Article" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />
              </div>
              <h4 className="text-xl font-bold mb-2">Your university projects are mo...</h4>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">If you can solve problems or ideas — you can prove your skills to employers...</p>
              <p className="text-xs text-gray-400">95k views • 10 mins read</p>
            </div>

            {/* Card 2 - Updated Image */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                      src="/images/how-it-works.jpg" 
                      alt="Students learning" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />
              </div>
              <h4 className="text-xl font-bold mb-2">How to write your application e...</h4>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">Step-by-step pathways for your dream universities...</p>
              <p className="text-xs text-gray-400">95k views • 10 mins read</p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                      src="/images/How I became a Rhodes Scholar.png" 
                      alt="Article" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />
              </div>
              <h4 className="text-xl font-bold mb-2">Your university projects are mo...</h4>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">If you can solve problems or ideas — you can prove your skills to employers...</p>
              <p className="text-xs text-gray-400">95k views • 10 mins read</p>
            </div>
          </div>
        </section>

        {/* Video Resources Section */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-slate-500">Video Resources</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/How I became a Rhodes Scholar.png" alt="Video thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">How to ace your interview</h2>
              <p className="text-gray-500 leading-relaxed">Get a taste of what GDC has to offer with our free resources, designed to help you on your college application journey.</p>
              <button className="bg-blue-950 text-white px-8 py-3 rounded-lg">Watch video →</button>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section className="mb-20 bg-purple-50 rounded-[40px] p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Contribute to our resources</h2>
            <p className="text-gray-600">Write an article or post on our platform for free and get published online at one of the best student mentorship platforms.</p>
          </div>
          <button className="bg-blue-950 text-white px-10 py-4 rounded-xl font-bold">Add a post →</button>
        </section>

        {/* Opportunity Banner */}
        <section className="mb-20 bg-blue-950 rounded-[40px] py-16 px-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">We have various opportunities lined up you do not want to miss out on</h2>
          <button className="bg-white text-blue-950 px-8 py-3 rounded-lg font-bold">Explore our fellowships ↓</button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuthenticatedResources;