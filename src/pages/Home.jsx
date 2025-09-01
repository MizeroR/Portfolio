import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Mizero Reine</h1>
        <p className="text-xl mb-6">
          Software Engineer | React & Flutter | Machine Learning Enthusiast
        </p>
        <div className="flex gap-4">
          <a 
            href="/resume2025.pdf" 
            download="Mizero_Reine_CV.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download CV
          </a>
          <Link 
            to="/contact" 
            className="px-6 py-3 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home