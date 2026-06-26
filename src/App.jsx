import { useState, useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  // Sync dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.backgroundColor = dark ? '#060D1A' : '#F8FAFC'
  }, [dark])

  // System preference on mount
  useEffect(() => {
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  // Cursor glow effect
  useEffect(() => {
    const el = document.getElementById('cursor-glow')
    if (!el) return
    const move = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, ${dark ? 'rgba(96,165,250,0.06)' : 'rgba(59,130,246,0.04)'}, transparent 50%)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [dark])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Cursor glow layer */}
      <div id="cursor-glow" />

      <Nav dark={dark} setDark={setDark} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="divider" />
        <Highlights />
        <div className="divider" />
        <Projects or Works />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
        <div className="divider" />
      </main>
      <Footer />
    </div>
  )
}
