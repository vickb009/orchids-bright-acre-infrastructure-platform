import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Bright Acre",
  description:
    "Bright Acre is a privately held energy infrastructure origination firm focused on the early development of grid-connected energy assets.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero with background */}
      <section className="relative bg-[#0B3C89] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-support.jpg"
            alt="Infrastructure landscape"
            fill
            className="object-cover object-center opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              About Bright Acre
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Bright Acre is a privately held energy infrastructure origination
              firm focused on the early development of grid-connected energy assets.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D9A441]" />
      </section>

      {/* Mission statement */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              We operate at the intersection of land, capital, and power systems,
              enabling the creation of long-term infrastructure platforms supporting
              the next generation of energy networks.
            </p>
          </div>
        </div>
      </section>

      {/* Core areas */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Our Work Centers On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                title: "Strategic Site Control",
                desc: "Securing grid-adjacent land positions that form the foundation of long-term energy infrastructure platforms.",
                icon: (
                  <svg width="32" height="32" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                title: "Developer Partnerships",
                desc: "Structured co-development agreements with utility-scale developers and institutional capital partners.",
                icon: (
                  <svg width="32" height="32" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Multi-Use Energy Platforms",
                desc: "Originating sites capable of supporting solar, storage, and hybrid energy configurations.",
                icon: (
                  <svg width="32" height="32" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                title: "Institutional-Grade Origination",
                desc: "Building project pipelines that meet the standards of infrastructure funds and institutional investors.",
                icon: (
                  <svg width="32" height="32" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-white p-10 border border-[#E2E8F0] ${
                  i % 2 === 0 ? "md:border-r-0" : ""
                } ${i < 2 ? "md:border-b-0" : ""}`}
              >
                <div className="mb-5">{item.icon}</div>
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

      {/* Bottom statement */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-1 bg-[#D9A441] mx-auto mb-6" />
            <p className="text-xl text-[#0B3C89] font-semibold leading-relaxed">
              Bright Acre does not install or sell equipment.
            </p>
            <p className="mt-4 text-xl text-[#0B3C89] font-semibold leading-relaxed">
              We build the foundations of infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
