import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Mizero<span className="text-sky-700">.</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="transition-colors hover:text-slate-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow-md"
        >
          Let’s talk
        </Link>
      </nav>
    </header>
  )
}

export default Navigation