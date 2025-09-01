import React from 'react'

function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Flutter', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Node.js', level: 82 }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          I'm a passionate software engineer from Rwanda, dedicated to creating innovative solutions 
          that make a difference. With expertise in mobile and web development, I love turning ideas into reality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Personal Info */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Personal Info</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>Mizero Reine</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Location:</span>
              <span>Kigali, Rwanda</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Experience:</span>
              <span>2+ Years</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Languages:</span>
              <span>English, French, Kinyarwanda</span>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mobile Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flutter & React apps</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400">Web Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Node.js, Full-stack solutions</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-600 dark:text-purple-400">Machine Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">AI models & data analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-12">
        

        <div>
          <h2 className="text-2xl font-semibold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-semibold">Software Engineering</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">African Leadership University • 2023 - today</p>
              <p className="text-sm mt-2">Focus on software engineering and machine learning</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-semibold">Certifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Various Online Platforms</p>
              <p className="text-sm mt-2">React, Flutter, Machine Learning certifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About