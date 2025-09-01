import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        My Portfolio
      </h1>

      <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <DarkModeToggle />
    </nav>
  )
}

export default Navigation