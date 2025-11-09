function SectionCard({ eyebrow, title, body, bodyList, imageUrl, children }) {
    return (
      <div className="bg-brand-card border border-brand-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-brand-primary/40 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {eyebrow && (
              <p className="text-xs sm:text-sm font-semibold text-brand-accent uppercase tracking-widest">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            {body && (
              <div className="space-y-4">
                {Array.isArray(body) ? (
                  body.map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-300 leading-relaxed">{body}</p>
                )}
              </div>
            )}
            {bodyList && (
              <ul className="space-y-3">
                {bodyList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-primary mt-2"></span>
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {children}
          </div>
  
          {/* Image */}
          {imageUrl && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-blue rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={imageUrl}
                alt={title}
                className="relative rounded-2xl w-full h-64 lg:h-80 object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    )
  }
  
  export default SectionCard