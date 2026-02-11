import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section — full-width image background */}
      <section className="relative bg-[#0B3C89] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/developer-hero.jpg"
            alt="Energy infrastructure landscape"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              Empowering a Solar Prosperity
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Energy Infrastructure
              <br />
              Origination &amp; Co-Development
            </h1>
            <p className="mt-8 text-lg text-blue-100 leading-relaxed max-w-2xl">
              We identify and develop grid-connected energy sites for solar,
              storage, and next-generation power infrastructure.
            </p>
            <p className="mt-4 text-lg text-blue-200 leading-relaxed max-w-2xl">
              We partner with developers, utilities, and capital providers to
              originate high-quality energy assets across the Southeast United
              States.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/partnership"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-[#0B3C89] bg-white hover:bg-gray-100 transition-colors tracking-wide"
              >
                Partnership Model
              </Link>
              <Link
                href="/focus-areas"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/10 transition-colors tracking-wide"
              >
                Our Focus Areas
              </Link>
            </div>
          </div>
        </div>
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D9A441]" />
      </section>

      {/* What Makes Us Different */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              What Makes Us Different
            </h2>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              Most firms either own land or build projects. Bright Acre
              specializes in origination — the most critical and valuable stage
              of energy development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                title: "Strategic Site Identification",
                desc: "Identifying high-value sites with grid proximity and development potential.",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                title: "Grid Relevance",
                desc: "Evaluating interconnection capacity and transmission infrastructure alignment.",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
              },
              {
                title: "Early-Stage Structuring",
                desc: "Structuring projects for long-term viability from the earliest development stages.",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                title: "Long-Term Partnerships",
                desc: "Building co-development partnerships that extend through project maturity.",
                icon: (
                  <svg width="28" height="28" fill="none" stroke="#F28C28" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-white p-8 border border-[#E2E8F0] ${i > 0 ? "lg:border-l-0" : ""}`}
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-base font-semibold text-[#0B3C89] mb-3">
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

      {/* Our Role — split layout with image */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-1 bg-[#D9A441] mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Our Role
              </h2>
              <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
                Bright Acre operates as a development partner, not a broker.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "Originate strategic sites aligned with grid infrastructure",
                  "Structure early-stage development for long-term value",
                  "Remain involved through project maturity",
                  "Participate in long-term project value",
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
                src="/contact-support.jpg"
                alt="Grid infrastructure development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-4 border-[#D9A441]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — two columns */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-16">
            <div className="w-12 h-1 bg-[#D9A441] mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              What We Do
            </h2>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              Bright Acre focuses on two core disciplines that define the earliest
              and most valuable stages of energy infrastructure development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 border-l-4 border-[#0B3C89]">
              <h3 className="text-xl font-bold text-[#0B3C89] mb-4">
                Strategic Land Origination
              </h3>
              <p className="text-[#4A5568] leading-relaxed">
                We identify and secure grid-adjacent land capable of supporting
                long-term infrastructure deployment, including solar, storage, and
                transmission-related assets.
              </p>
            </div>
            <div className="bg-white p-10 border-l-4 border-[#D9A441]">
              <h3 className="text-xl font-bold text-[#0B3C89] mb-4">
                Development Structuring
              </h3>
              <p className="text-[#4A5568] leading-relaxed">
                We coordinate technical partners, regulatory pathways, and
                development frameworks that allow projects to advance from concept
                to bankable infrastructure platforms.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[#4A5568] leading-relaxed max-w-3xl">
            This positions Bright Acre at the front of the value chain — before
            construction, before financing, and before competition.
          </p>
        </div>
      </section>


    </div>
  );
}
