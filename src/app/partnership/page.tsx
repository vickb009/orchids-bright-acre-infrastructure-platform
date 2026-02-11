"use client";

import Image from "next/image";
import { useState } from "react";

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "partnership" }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0B3C89] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/developer-hero.jpg"
            alt="Energy infrastructure partnership"
            fill
            className="object-cover object-center opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              Partnership
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Partnership Model
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Bright Acre operates as a co-development partner, not a consultant or
              broker. Our model aligns directly with project outcomes through
              structured participation in early-stage development, site origination,
              and strategic coordination.
            </p>
          </div>
        </div>
        <div className="h-1 bg-[#D9A441]" />
      </section>

      {/* We Contribute / We Participate */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-1 bg-[#D9A441] mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                We Contribute
              </h2>
              <div className="mt-8 space-y-5">
                {[
                  "Land origination",
                  "Interconnection intelligence",
                  "Early feasibility structuring",
                  "Long-term site control",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#F28C28] rounded-full mt-2 shrink-0" />
                    <p className="text-base text-[#4A5568] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="w-12 h-1 bg-[#0B3C89] mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                We Participate In Value Creation
              </h2>
              <p className="mt-6 text-[#4A5568] leading-relaxed">
                We participate in value creation, not advisory fees. Our engagement
                is structured through joint development agreements, equity or profit
                participation, and long-term advisory roles aligned with project
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Image */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src="/developer-hero.jpg"
              alt="Energy infrastructure development partnership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-12 h-1 bg-[#D9A441] mx-auto mb-6" />
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                Partnership Inquiry
              </h2>
              <p className="mt-4 text-[#4A5568]">
                For co-development and joint venture discussions.
              </p>
            </div>

            {status === "sent" ? (
              <div className="bg-white border border-[#E2E8F0] p-10 text-center">
                <div className="w-12 h-1 bg-[#D9A441] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#0B3C89] mb-3">
                  Inquiry Received
                </h3>
                <p className="text-[#4A5568]">
                  Our origination team will review your inquiry and respond
                  accordingly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] p-10 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0B3C89] mb-2">
                    Name <span className="text-[#F28C28]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B3C89] mb-2">
                    Email <span className="text-[#F28C28]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B3C89] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    placeholder="Phone number (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0B3C89] mb-2">
                    Message <span className="text-[#F28C28]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input resize-none"
                    placeholder="Describe your partnership interest"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full"
                >
                  {status === "sending" ? "Sending..." : "Submit Inquiry"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
