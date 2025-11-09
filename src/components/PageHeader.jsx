function PageHeader({ eyebrow, title, subtitle }) {
    return (
      <div className="relative bg-gradient-to-b from-brand-primarySoft/30 to-transparent border-b border-brand-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default PageHeader