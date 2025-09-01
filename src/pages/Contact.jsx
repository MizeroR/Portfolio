import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    // 1. Send main contact email (guest -> you)
    await emailjs.send(
      'service_5mzyxuk',
      'template_j172fzq', // 👈 ID of the template for YOU
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'reinemizero5@gmail.com' // fixed recipient (you)
      },
      '024pb39ECrIg1Ni_b'
    )

    // 2. Send auto-reply (you -> guest)
    await emailjs.send(
      'service_5mzyxuk',
      'template_3g1nvfr', // 👈 ID of the template for auto-reply
      {
        from_name: formData.name,
        subject: formData.subject,
        message: formData.message,
        to_email: formData.email // send to guest
      },
      '024pb39ECrIg1Ni_b'
    )

    setMessage('Message sent successfully! Check your inbox for confirmation.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    console.error('EmailJS error details:', error)
    setMessage(`Failed to send message: ${error.text || error.message || 'Unknown error'}`)
  } finally {
    setIsLoading(false)
  }
}


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">I'll get back to you within 24 hours</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-blue-500">📧</span>
                <span><email>reinemizero5@gmail.com</email></span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-green-500">📱</span>
                <span>+250784911041</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-red-500">📍</span>
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/reine-mizero" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
              <a href="https://github.com/MizeroR" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-600">GitHub</a>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Available For</h3>
            <ul className="space-y-2 text-sm">
              <li>• Freelance projects</li>
              <li>• Full-time opportunities</li>
              <li>• Collaboration</li>
              <li>• Consulting</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Subject</option>
                <option value="freelance">Freelance Project</option>
                <option value="job">Job Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              ></textarea>
            </div>
            
            {message && (
              <div className={`p-3 rounded-lg text-center ${
                message.includes('successfully') 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
              }`}>
                {message}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact