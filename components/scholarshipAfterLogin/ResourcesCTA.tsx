import { Button } from "@/components/ui/button";

export default function ResourcesCTA() {
  return (
    <section className="py-20">
      <div className="bg-[#070750] rounded-2xl px-6 py-16 text-center text-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Get the best of our resources
        </h2>

        <Button className="mt-6 bg-white text-[#070750] hover:bg-gray-200">
          Sign up now →
        </Button>
      </div>
    </section>
  );
}
