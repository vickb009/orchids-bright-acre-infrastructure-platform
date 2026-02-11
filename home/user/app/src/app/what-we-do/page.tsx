import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | Bright Acre",
  description:
    "Energy infrastructure origination and co-development partnerships. Bright Acre identifies grid-adjacent sites and structures early-stage development.",
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#D9A441] mb-8" />
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0B3C89] leading-tight tracking-tight">
              What We Do
            </h1>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              Bright Acre focuses on two core disciplines that define the
              earliest and most valuable stages of energy infrastructure
              development.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-[#D9A441] via-[#D9A441]/20 to-transparent" />

      {/* Origination */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-1 bg-[#D9A441] mb-8" />
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3C89] tracking-tight">
                Energy Infrastructure Origination
              </h2>
              <p className="mt-6 text-[#4A5568] leading-relaxed">
                We identify and evaluate sites where energy infrastructure can
                deliver maximum value to the grid and project stakeholders.
              </p>
            </div>
            <div className="space-y-6">
              {[
                "Identify grid-adjacent sites with development potential",
                "Evaluate interconnection potential and capacity",
                "Structure early-stage development for long-term viability",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#D9A441] rounded-full mt-2 shrink-0" />
                  <p className="text-base text-[#4A5568] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Development */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-1 bg-[#D9A441] mb-8" />
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3C89] tracking-tight">
                Co-Development & Partnership
              </h2>
              <p className="mt-6 text-[#4A5568] leading-relaxed">
                We structure partnerships that align interests across land,
                development, and capital — ensuring long-term project success.
              </p>
            </div>
            <div className="space-y-6">
              {[
                "Joint development agreements with aligned incentives",
                "Revenue participation structures",
                "Long-term project involvement through maturity",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#D9A441] rounded-full mt-2 shrink-0" />
                  <p className="text-base text-[#4A5568] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
