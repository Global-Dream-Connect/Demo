import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  disabled?: boolean;
};

export default function SignupShell({ disabled = false }: Props) {
  return (
    <div className={`flex-1 grid grid-cols-1 lg:grid-cols-2 ${disabled ? "opacity-60 pointer-events-none" : ""}`}>
      
      {/* LEFT */}
      <div className="flex items-center justify-center px-6 lg:px-12">
        <div className="w-full max-w-md space-y-6">
          <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium">
            Step 1/3
          </span>

          <h1 className="text-2xl font-semibold text-gray-900">
            Let’s get you started
          </h1>

          <Input placeholder="Enter your full name" disabled={disabled} />
          <Input placeholder="Enter your email address" disabled={disabled} />
          <Input placeholder="Enter a strong password" disabled={disabled} />

          <Button disabled className="w-full h-11 bg-[#070750]">
            Sign up with your e-mail
          </Button>
        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div className="hidden lg:flex items-center justify-center p-6">
        <div className="w-full h-[520px] max-w-[520px] rounded-2xl overflow-hidden">
          <Carousel className="h-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[520px]">
                  <Image
                    src="/Images/how-it-works.jpg"
                    alt="Mentorship"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="relative h-[520px]">
                  <Image
                    src="/Images/How I became a Rhodes Scholar.png"
                    alt="Global Network"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
