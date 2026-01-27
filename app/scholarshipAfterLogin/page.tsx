import Footer from "@/components/fellowship/Footer";
import Navbar from "@/components/fellowship/Navbar"; // replace with post-login navbar if different
import HowToApply from "@/components/scholarships/HowToApply";
import ResourcesCTA from "@/components/scholarshipAfterLogin/ResourcesCTA";
import AllAvailableScholarships from "@/components/scholarshipAfterLogin/AllAvailableScholarships";
import ScholarshipsFilter from "@/components/scholarships/scholarshipsFilter";

export default function ScholarshipAfterLoginPage() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScholarshipsFilter />
        <HowToApply />
        <AllAvailableScholarships />
        <ResourcesCTA />
      </main>

      <Footer />
    </div>
  );
}
