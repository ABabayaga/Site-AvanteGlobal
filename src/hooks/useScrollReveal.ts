import { useRef, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Fades and slides up every element carrying `data-reveal` inside the
 * returned ref's subtree as it scrolls into view. Attach the returned
 * ref to the section's outermost element.
 *
 * An element marked `data-reveal-immediate` instead plays the same
 * animation right away on mount (no ScrollTrigger) — for content that
 * sits above the fold and should open with the section, not wait for
 * a scroll. Its order among other immediate elements sets a small
 * cascading delay.
 */
function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T | null> {
  const scope = useRef<T>(null)

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 80%',
              once: true,
            },
          },
        )
      })

      const immediateTargets = gsap.utils.toArray<HTMLElement>('[data-reveal-immediate]')
      immediateTargets.forEach((target, index) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.15,
          },
        )
      })
    },
    { scope },
  )

  return scope
}

export default useScrollReveal
