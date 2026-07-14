import { motion } from 'framer-motion'

// Subtle fade-and-rise as elements scroll into view.
// Reused across every section for one consistent motion language.
export default function Reveal({ children, delay = 0, y = 22, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
