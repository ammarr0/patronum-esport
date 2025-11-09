import Hero from '../components/Hero'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mission, Vision, Ethos */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mission, Vision, Ethos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To empower players, creators, and brands through a unified esports ecosystem that merges competitive excellence with cutting-edge technology and innovation.
              </p>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-4">
                Our Vision
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To build a globally recognized esports powerhouse from Pakistan that competes at the highest level, cultivates creators who inspire millions, and leads the evolution of fair, tech-driven gaming worldwide.
              </p>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-accent mb-4">
                Our Ethos
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Integrity. Innovation. Inclusion. Esports is not just about playing; it is about building communities, pioneering technology, and representing a generation that thrives on excellence and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-brand-primarySoft/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-brand-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Competitive Esports
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Elite rosters for PMGC, PGC, and PDC 2025 built on discipline, data, and mental resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-brand-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Creator & Brand Partnerships
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    A creator wing dedicated to pairing authentic gaming voices with tech and lifestyle brands, with structured campaigns and long-term growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-brand-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Gaming Technology & Anti-Cheat
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    An AI-driven tech unit focused on integrity, anti-cheat systems, and performance analytics, protecting competitive environments and improving player insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home