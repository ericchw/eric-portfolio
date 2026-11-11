import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function savedPreference(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved === null ? fallback : saved === 'true'
  } catch {
    return fallback
  }
}

export default function App() {
  const [dark, setDark] = useState(() =>
    savedPreference('portfolio-dark', false),
  )
  const [motion, setMotion] = useState(() =>
    savedPreference(
      'portfolio-motion',
      !matchMedia('(prefers-reduced-motion: reduce)').matches,
    ),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.dataset.motion = motion ? 'running' : 'paused'
    try {
      localStorage.setItem('portfolio-dark', String(dark))
      localStorage.setItem('portfolio-motion', String(motion))
    } catch {
      /* Preferences remain usable when storage is unavailable. */
    }
  }, [dark, motion])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav
        dark={dark}
        setDark={setDark}
        motion={motion}
        setMotion={setMotion}
      />
      <main id="main">
        <Hero motion={motion} dark={dark} />
        <Projects motion={motion} />
        <Highlights />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
