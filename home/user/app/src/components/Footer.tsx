import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B3C89] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Bright Acre</h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              Energy Infrastructure Origination & Co-Development
            </p>
            <p className="text-xs text-blue-300 mt-4">
              Empowering a Solar Prosperity
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About" },
                { href: "/focus-areas", label: "Focus Areas" },
                { href: "/partnership", label: "Partnership" },
                { href: "/landowners", label: "Landowners" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Inquiries
            </h4>
            <p className="text-sm text-blue-200 leading-relaxed">
              For partnership and co-development discussions, reach us through our{" "}
              <Link href="/contact" className="text-[#D9A441] hover:text-white transition-colors underline">
                contact page
              </Link>.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8">
          <p className="text-sm text-blue-300 text-center">
            &copy; {new Date().getFullYear()} Bright Acre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
