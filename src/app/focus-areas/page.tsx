import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Areas | Bright Acre",
  description:
    "Bright Acre originates projects across three core infrastructure categories: solar generation, energy storage, and grid infrastructure.",
};

export default function FocusAreasPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B3C89]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              Focus Areas
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Core Infrastructure Categories
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Bright Acre originates projects across three core infrastructure
              categories that are fundamental to grid modernization.
            </p>
          </div>
        </div>
        <div className="h-1 bg-[#D9A441]" />
      </section>

      {/* Three focus areas — large cards */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="space-y-0">
            {/* Solar Generation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E2E8F0]">
              <div className="lg:col-span-2 bg-[#0B3C89] flex items-center justify-center p-8">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              </div>
              <div className="lg:col-span-10 bg-white p-10">
                <h3 className="text-2xl font-bold text-[#0B3C89] mb-4">
                  Solar Generation
                </h3>
                <p className="text-[#4A5568] leading-relaxed text-base">
                  We structure utility-grade solar assets designed for long-term
                  grid integration, focusing on sites with strategic interconnection
                  potential and institutional scalability.
                </p>
              </div>
            </div>

            {/* Energy Storage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E2E8F0] border-t-0">
              <div className="lg:col-span-2 bg-[#D9A441] flex items-center justify-center p-8">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="12" height="16" rx="1" />
                  <path d="M10 1h4M9 8h6M9 12h6" />
                </svg>
              </div>
              <div className="lg:col-span-10 bg-white p-10">
                <h3 className="text-2xl font-bold text-[#0B3C89] mb-4">
                  Energy Storage
                </h3>
                <p className="text-[#4A5568] leading-relaxed text-base">
                  We develop battery energy storage platforms that enhance grid
                  reliability, load balancing, and renewable integration across
                  high-growth energy markets.
                </p>
              </div>
            </div>

            {/* Grid Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E2E8F0] border-t-0">
              <div className="lg:col-span-2 bg-[#F28C28] flex items-center justify-center p-8">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="lg:col-span-10 bg-white p-10">
                <h3 className="text-2xl font-bold text-[#0B3C89] mb-4">
                  Grid Infrastructure
                </h3>
                <p className="text-[#4A5568] leading-relaxed text-base">
                  We originate land-based platforms positioned for substations,
                  transmission adjacency, and future capacity expansion supporting
                  electrification and industrial demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value chain positioning */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-1 bg-[#D9A441] mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
              Front of the Value Chain
            </h2>
            <p className="mt-6 text-lg text-[#4A5568] leading-relaxed">
              Bright Acre positions at the front of the energy value chain — before
              construction, before financing, and before competition. Our origination
              discipline creates the foundation for every project that follows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
