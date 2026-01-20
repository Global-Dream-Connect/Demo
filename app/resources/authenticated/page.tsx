import Navbar from '@/components/fellowship/Navbar';
import Footer from '@/components/fellowship/Footer';
import ResourceCard from '@/components/resources/ResourceCard';

export default function AuthResources() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">Resources <span className="text-slate-900">For You</span></h1>
          <button className="border border-gray-300 px-6 py-2 rounded-lg text-sm">Add a post</button>
        </div>

        {/* Top Picks Section */}
        <section className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-slate-500">Top picks by students</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={i === 2 ? "/Images/How to write your application e.png" : "/images/How I became a Rhodes Scholar.png"} 
                    alt="Article" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="text-xl font-bold">Your university projects are mo...</h4>
                <p className="text-sm text-gray-500">95k views • 10 mins read</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Resources */}
        <section className="mb-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 bg-gray-100 rounded-3xl overflow-hidden">
             <img src="/images/How I became a Rhodes Scholar.png" className="w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full border border-white flex items-center justify-center">▶</div>
             </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">How to ace your interview</h2>
            <button className="bg-blue-950 text-white px-8 py-3 rounded-lg">Watch video →</button>
          </div>
        </section>

        {/* Various Opportunities Banner */}
        <section className="bg-blue-950 rounded-[40px] py-16 text-center text-white mb-20">
          <h2 className="text-4xl font-bold mb-8">We have various opportunities lined up...</h2>
          <button className="bg-white text-blue-950 px-8 py-3 rounded-lg font-bold">Explore our fellowships</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}