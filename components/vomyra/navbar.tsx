"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E4E1F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#6C47FF] flex items-center justify-center">
              <span className="text-white text-sm font-bold">V</span>
            </div>
            <span className="text-lg font-semibold text-[#1A1630]">Vomyra</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#6B7285] hover:text-[#1A1630] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-sm text-[#6B7285] hover:text-[#1A1630] transition-colors"
            >
              Sign in
            </a>
            <a
              href="/dashboard"
              className="px-4 py-2 bg-[#6C47FF] text-white text-sm font-medium rounded-lg hover:bg-[#5a3ad9] transition-colors"
            >
              Start for free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#1A1630]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1A1630]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E4E1F0]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#6B7285] hover:text-[#1A1630] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E4E1F0] flex flex-col gap-3">
                <a
                  href="/dashboard"
                  className="text-sm text-[#6B7285] hover:text-[#1A1630] transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="/dashboard"
                  className="px-4 py-2 bg-[#6C47FF] text-white text-sm font-medium rounded-lg hover:bg-[#5a3ad9] transition-colors text-center"
                >
                  Start for free
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
