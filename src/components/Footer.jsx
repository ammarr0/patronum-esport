import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-primary/20 bg-brand-card/50 backdrop-blur-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Patronum Esports"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                Patronum Esports
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A next-generation esports organization under the PatronumX ecosystem, built to redefine how gaming talent, technology, and global tournaments connect.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/competitive-esports"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Teams (Competitive)
                </Link>
              </li>
              <li>
                <Link
                  to="/creators-partners"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  to="/media-coverage"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-4">
              Divisions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/competitive-esports"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Competitive Esports
                </Link>
              </li>
              <li>
                <Link
                  to="/creators-partners"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Creator Partnerships
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-anti-cheat"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  Gaming Tech & Anti-Cheat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@patronumesports.com"
                  className="text-sm text-slate-400 hover:text-brand-primary transition-colors"
                >
                  contact@patronumesports.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/join-us"
                className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-sm hover:shadow-glow transition-all duration-300"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © {currentYear} Patronum Esports. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Powered by{' '}
              <span className="text-brand-primary font-semibold">PatronumX</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer