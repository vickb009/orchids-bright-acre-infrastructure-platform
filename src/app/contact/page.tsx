"use client";

import { useState } from "react";

export default function ContactPage() {
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
        body: JSON.stringify({ ...formData, source: "contact" }),
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
      <section className="bg-[#0B3C89]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[#D9A441] text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              For partnership inquiries, co-development discussions, and landowner
              consultations. All inquiries are reviewed by our origination team.
            </p>
          </div>
        </div>
        <div className="h-1 bg-[#D9A441]" />
      </section>

      {/* Form Section */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info column */}
            <div className="lg:col-span-2">
              <div className="w-12 h-1 bg-[#D9A441] mb-6" />
              <h2 className="text-2xl font-bold tracking-tight">
                Bright Acre
              </h2>
              <p className="mt-4 text-[#4A5568] leading-relaxed">
                Energy Infrastructure Origination & Co-Development
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-[#0B3C89] uppercase tracking-wider mb-2">
                    For Developers
                  </h3>
                  <p className="text-sm text-[#4A5568]">
                    Co-development partnerships, joint ventures, and site origination
                    opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0B3C89] uppercase tracking-wider mb-2">
                    For Landowners
                  </h3>
                  <p className="text-sm text-[#4A5568]">
                    Property evaluation for energy infrastructure potential and
                    lease structuring.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0B3C89] uppercase tracking-wider mb-2">
                    For Capital Partners
                  </h3>
                  <p className="text-sm text-[#4A5568]">
                    Institutional-grade origination pipeline and project
                    participation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-3">
              {status === "sent" ? (
                <div className="bg-white border border-[#E2E8F0] p-12 text-center">
                  <div className="w-12 h-1 bg-[#D9A441] mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-[#0B3C89] mb-3">
                    Message Received
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
                      placeholder="How can we help?"
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
        </div>
      </section>
    </div>
  );
}
