import { useEffect, useState } from 'react'
import Intro from './components/Intro.jsx'
import Publications from './components/Publications.jsx'
import Talks from './components/Talks.jsx'
import Footer from './components/Footer.jsx'
import { SunIcon, MoonIcon } from './components/Icons.jsx'

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  return 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore storage failures (private mode, etc.) */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>

      <main className="page">
        <Intro />
        <Publications />
        <Talks />
        <Footer />
      </main>
    </>
  )
}
