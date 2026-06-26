import { useEffect, useRef } from 'react'

export function useReveal(className = 'reveal') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Staggered children
    const items = el.querySelectorAll('.reveal-item')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        items.forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 80)
        })
        observer.unobserve(el)
      }
    }, { threshold: 0.06 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
