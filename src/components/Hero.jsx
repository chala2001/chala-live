import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon, DownloadIcon, LocationIcon } from './Icons.jsx'

// Small typewriter for the cycling role line.
function useTypewriter(words, { type = 70, del = 38, hold = 1500 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), hold)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      t = setTimeout(
        () => {
          setText((cur) =>
            deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
          )
        },
        deleting ? del : type
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, type, del, hold])

  return text
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.p className="hero__hi" variants={item}>
            <span className="prompt">$</span> whoami
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            {profile.name}
          </motion.h1>

          <motion.div className="hero__role" variants={item}>
            <span className="hero__role-arrow">&gt;</span>
            <span className="hero__role-text">{role}</span>
            <span className="hero__caret" aria-hidden>▊</span>
          </motion.div>

          <motion.p className="hero__tag" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.div className="hero__meta" variants={item}>
            <span className="hero__meta-item">
              <LocationIcon /> {profile.location}
            </span>
            <span className="hero__status">
              <span className="hero__status-dot" /> {profile.status}
            </span>
          </motion.div>

          <motion.div className="hero__actions" variants={item}>
            <Link to="projects" smooth offset={-60} duration={600} className="btn btn-primary">
              View my work <ArrowIcon />
            </Link>
            <a href={profile.resume} className="btn btn-ghost" download>
              <DownloadIcon /> Résumé
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={profile.socials.email} aria-label="Email"><MailIcon /></a>
          </motion.div>
        </motion.div>

        {/* Terminal window card */}
        <motion.div
          className="hero__window"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="term__bar">
            <span className="term__dot term__dot--r" />
            <span className="term__dot term__dot--y" />
            <span className="term__dot term__dot--g" />
            <span className="term__title">chalaka@peradeniya: ~/portfolio</span>
          </div>

          <div className="term__body">
            <div className="term__photo">
              {/* Replace /public/profile.webp with your own photo. Falls back to GitHub avatar. */}
              <img
                src={profile.photo}
                alt={profile.name}
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = profile.githubAvatar
                }}
              />
              <span className="term__photo-ring" aria-hidden />
            </div>

            <pre className="term__code">
{`> const engineer = {
    name:   "${profile.name}",
    focus:  ["SWE", "DevOps", "SRE"],
    stack:  ["React", "Spring", "K8s"],
    cloud:  ["AWS", "Terraform"],
    ai:     "Agentic + RAG",
    coffee: true,
  };`}
            </pre>
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth offset={-60} duration={600} className="hero__scroll" aria-label="Scroll to about">
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </Link>
    </section>
  )
}
