import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Landowners | Bright Acre",
  description:
    "Bright Acre partners with landowners near grid infrastructure to develop long-term energy assets. Learn how your land can support solar, storage, and grid infrastructure projects.",
};

export default function LandownersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B3C89] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-support.jpg"
            alt="Rural land near grid infrastructure"
            fill
            className="object-cover object-center opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              Landowners
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Your Land. Our Infrastructure Expertise.
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Bright Acre works directly with landowners to evaluate, structure,
              and develop energy infrastructure platforms on strategically positioned
              properties.
            </p>
          </div>
        </div>
        <div className="h-1 bg-[#D9A441]" />
      </section>

      {/* What We Look For */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              What We Look For
            </h2>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              Not every site is suitable for energy development. We evaluate
              properties based on specific infrastructure and grid criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grid Proximity",
                desc: "Properties near substations, transmission lines, or distribution infrastructure with available capacity.",
                color: "border-[#0B3C89]",
              },
              {
                title: "Site Characteristics",
                desc: "Flat or gently rolling terrain, minimal environmental constraints, and appropriate zoning classifications.",
                color: "border-[#D9A441]",
              },
              {
                title: "Scale & Access",
                desc: "Parcels of sufficient acreage with road access and proximity to existing utility corridors.",
                color: "border-[#F28C28]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white p-10 border-l-4 ${item.color}`}
              >
                <h3 className="text-lg font-semibold text-[#0B3C89] mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work With Landowners */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-[#D9A441] mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                How We Work With Landowners
              </h2>
              <p className="mt-6 text-[#4A5568] leading-relaxed">
                We approach landowner relationships with transparency, long-term
                commitment, and respect for your property and goals.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "We evaluate your property's grid and infrastructure potential",
                  "We structure agreements that provide long-term income and flexibility",
                  "We manage the development process — permitting, engineering, utility coordination",
                  "We remain your partner throughout the life of the project",
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/developer-hero.jpg"
                alt="Land development for energy infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-4 border-[#D9A441]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* What Landowners Receive */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              What Landowners Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                title: "Competitive Lease Income",
                desc: "Structured lease payments that reflect the true infrastructure value of your property.",
              },
              {
                title: "Property Retention",
                desc: "You retain ownership of your land. Energy projects coexist with existing land use where possible.",
              },
              {
                title: "Professional Management",
                desc: "Bright Acre handles all development coordination — you benefit without the operational burden.",
              },
              {
                title: "Long-Term Stability",
                desc: "Energy infrastructure leases provide decades of predictable, stable income.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-white p-10 border border-[#E2E8F0] ${
                  i % 2 === 0 ? "md:border-r-0" : ""
                } ${i < 2 ? "md:border-b-0" : ""}`}
              >
                <h3 className="text-lg font-semibold text-[#0B3C89] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
