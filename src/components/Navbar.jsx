import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile, navLinks } from '../data/profile.js'
import { SunIcon, MoonIcon } from './Icons.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <Link to="home" smooth duration={500} className="nav__brand" tabIndex={0}>
          <span className="nav__brand-bracket">[</span>
          <span className="nav__brand-name">{profile.name.split(' ')[0].toLowerCase()}</span>
          <span className="nav__brand-cursor">_</span>
          <span className="nav__brand-bracket">]</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l, i) => (
            <Link
              key={l.id}
              to={l.id}
              smooth
              spy
              offset={-72}
              duration={500}
              activeClass="nav__link--active"
              className="nav__link"
            >
              <span className="nav__link-idx">0{i + 1}.</span> {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__right">
          <button
            className="nav__theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -40, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 40, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'flex' }}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn btn-ghost nav__cta">
            GitHub
          </a>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile"
          >
            {navLinks.map((l, i) => (
              <Link
                key={l.id}
                to={l.id}
                smooth
                offset={-60}
                duration={500}
                className="nav__mobile-link"
                onClick={() => setOpen(false)}
              >
                <span className="nav__link-idx">0{i + 1}.</span> {l.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
