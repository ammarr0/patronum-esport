import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/907239/pexels-photo-907239.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Esports Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/80 to-brand-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-blue/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xs sm:text-sm font-semibold text-brand-accent uppercase tracking-widest">
              Patronum Esports • Pakistan → World
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Forged at the intersection of{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                competition, innovation, and community.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Patronum Esports is a next-generation esports organization under the PatronumX ecosystem, built to redefine how gaming talent, technology, and global tournaments connect. More than just a team, it is a movement shaping the future of esports in Pakistan and beyond.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/competitive-esports"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-base hover:shadow-glow transition-all duration-300"
              >
                Explore Our Teams
              </Link>
              <Link
                to="/creators-partners"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-brand-primary text-brand-primary font-semibold text-base hover:bg-brand-primary/10 transition-all duration-300"
              >
                For Creators & Brands
              </Link>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-5">
            <div className="bg-brand-card/80 backdrop-blur-lg border border-brand-primary/30 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Chapters</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-brand-primarySoft/20 rounded-xl border border-brand-primary/20">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">EWC 2025</h4>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Riyadh
                    </span>
                  </div>
                  <p className="text-sm text-brand-accent font-medium">Chapter complete.</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-brand-primary/20 to-brand-blue/20 rounded-xl border border-brand-primary/40 shadow-glow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">PMGC</h4>
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                      Global stage
                    </span>
                  </div>
                  <p className="text-sm text-white font-medium">Next chapter begins.</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed border-t border-brand-primary/20 pt-6">
                From local scrims to world championships, every map, round, and clutch is part of our announcement to the world:{' '}
                <span className="text-brand-primary font-semibold">Patronum is here.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero