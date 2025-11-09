import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Competitive', path: '/competitive-esports' },
    { label: 'Creators & Brands', path: '/creators-partners' },
    { label: 'Tech & Anti-Cheat', path: '/tech-anti-cheat' },
    { label: 'Media', path: '/media-coverage' },
    { label: 'Join Us', path: '/join-us' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/90 backdrop-blur-lg border-b border-brand-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Patronum Esports"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              Patronum Esports
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-slate-300 hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/join-us"
            className="hidden lg:block px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-sm hover:shadow-glow transition-all duration-300"
          >
            Join The Movement
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-primary/20 bg-brand-bg/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-slate-300 hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/join-us"
              className="block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-sm text-center hover:shadow-glow transition-all duration-300"
            >
              Join The Movement
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar