import { useTheme } from '../contexts/ThemeContext'

function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  )
}

export default DarkModeToggle;
