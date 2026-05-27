import { Navbar } from "@/components/vomyra/navbar"
import { HeroSection } from "@/components/vomyra/hero-section"
import { FeaturesSection } from "@/components/vomyra/features-section"
import { UseCasesSection } from "@/components/vomyra/use-cases-section"
import { PricingSection } from "@/components/vomyra/pricing-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-16">
        <HeroSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
        
        <div id="use-cases">
          <UseCasesSection />
        </div>
        
        <div id="pricing">
          <PricingSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#1A1630] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#6C47FF] flex items-center justify-center">
                <span className="text-white text-sm font-bold">V</span>
              </div>
              <span className="text-lg font-semibold">Vomyra</span>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-sm text-white/40">
            <p>© 2026 Vomyra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
