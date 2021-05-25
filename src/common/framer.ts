import type { Variants } from 'framer-motion'

export const ease = [0.48, 0.15, 0.25, 0.96]

export const DefaultRouterPageVariants: Variants = {
  exit: { opacity: 0, x: -10, transition: { duration: 0.15, ease } },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
      ease,
    },
  },
}
