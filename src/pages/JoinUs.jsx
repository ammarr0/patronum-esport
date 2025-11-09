import { useState } from 'react'
import PageHeader from '../components/PageHeader'

function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    role: 'player',
    region: '',
    links: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will get back to you soon.')
    setFormData({
      name: '',
      role: 'player',
      region: '',
      links: '',
      message: ''
    })
  }

  return (
    <div>
      <PageHeader
        eyebrow="Join Us"
        title="Be part of the next chapter."
        subtitle="Whether you are a player, creator, or brand, there is a way to plug into the Patronum ecosystem."
      />

      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Players</h3>
              <p className="text-slate-300 leading-relaxed">
                For competitive players or teams who want to trial or scrim with Patronum Esports.
              </p>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Creators</h3>
              <p className="text-slate-300 leading-relaxed">
                For streamers, editors, and storytellers who want a structured ecosystem to grow with.
              </p>
            </div>

            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 hover:border-brand-primary/40 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brands</h3>
              <p className="text-slate-300 leading-relaxed">
                For brands seeking long-term, data-driven partnerships in the gaming and esports space.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-primary/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">
                    I am a... *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-primary/30 rounded-lg text-white focus:outline-none focus:border-brand-primary transition-colors"
                  >
                    <option value="player">Player / Team</option>
                    <option value="creator">Creator / Streamer</option>
                    <option value="brand">Brand Representative</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-slate-300 mb-2">
                    Region *
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-primary/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="e.g., Pakistan, Asia, Global"
                  />
                </div>

                <div>
                  <label htmlFor="links" className="block text-sm font-medium text-slate-300 mb-2">
                    Links (Social Media, Portfolio, etc.)
                  </label>
                  <input
                    type="text"
                    id="links"
                    name="links"
                    value={formData.links}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-primary/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-primary/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    placeholder="Tell us about yourself and why you want to join Patronum Esports..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-base hover:shadow-glow transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs