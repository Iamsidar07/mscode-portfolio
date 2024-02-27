import { flash } from "@/assets";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FFFFFF] p-2 relative  pt-24">
      <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto">
        <h2 className="text-2xl lg:text-7xl font-semibold">Why Choose Us</h2>
        <p className="max-w-md text-center text-sm lg:text-lg mt-6">
          So good you will never need to go anywhere else for your Javascript
          tasks. Seriously.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 7xl:grid-cols-4 gap-8 mt-24 p-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                className="flex flex-col items-center justify-center gap-2 my-6"
                key={i}
              >
                <Image
                  src={flash}
                  alt={""}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <h3 className="font-semibold text-lg mt-6">
                  Predictable Pricing
                </h3>
                <p className="text-center">
                  No surprises here! Choose a plan that works for you and pay
                  the same amount every month.
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

