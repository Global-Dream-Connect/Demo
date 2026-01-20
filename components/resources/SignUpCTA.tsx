// inside components/resources/SignUpCTA.tsx
import Image from 'next/image';

export default function SignUpCTA() {
  return (
    <section className="mt-32 relative bg-white py-24 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-slate-900">Sign up to unlock 50+ resources</h2>
        <p className="text-gray-500 text-lg mb-10">Get a taste of what GDC has to offer...</p>
        <button className="bg-blue-950 text-white px-10 py-4 rounded-lg font-bold">Create an account →</button>
      </div>

      {/* Left Student Image */}
      <div className="absolute left-0 bottom-0 hidden lg:block w-64 h-80">
        <Image 
          src="/images/student-left.png" 
          alt="student-lef" 
          fill 
          className="object-contain object-bottom" 
        />
      </div>

      {/* Right Student Image */}
      <div className="absolute right-0 bottom-0 hidden lg:block w-64 h-80">
        <Image 
          src="/Images/joyful-young-schoolgirl-wearing-backpack-holding-notebook-points-himself 1.png" 
          alt="joyful-young-schoolgirl" 
          fill 
          className="object-contain object-bottom" 
        />
      </div>
    </section>
  );
}