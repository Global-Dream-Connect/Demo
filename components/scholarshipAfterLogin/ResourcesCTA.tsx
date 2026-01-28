import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResourcesCTA() {
  return (
    <section className="py-20">
      <div className="bg-[#070750] rounded-xl py-12 text-center text-white">
        <h2 className="text-2xl font-semibold">
          Get the best of our resources
        </h2>

        <Link href="/signup">
          <Button className="mt-6 bg-white text-[#070750] hover:bg-gray-100">
            Sign up now →
          </Button>
        </Link>
      </div>
    </section>
  );
}
