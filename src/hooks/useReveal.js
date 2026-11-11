import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (
      !('IntersectionObserver' in window) ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.04 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return ref
}
