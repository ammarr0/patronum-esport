import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            This chapter does not exist.
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold text-base hover:shadow-glow transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound