import { useEffect, useRef } from 'react'

// Adds a `.visible` class when the element scrolls into view, driving the
// fade-up reveal animation defined in styles.css.
export function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
