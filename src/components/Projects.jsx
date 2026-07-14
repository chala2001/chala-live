import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { projects, projectCategories, profile } from '../data/profile.js'
import { GitHubIcon, ArrowIcon } from './Icons.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">// 05. projects</span>
          <h2 className="section-title">Things I've shipped.</h2>
          <p className="section-intro">
            A curated selection. Everything here is on my GitHub, with the source open to read.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="projects__filters">
          {projectCategories.map((c) => (
            <button
              key={c}
              className={`projects__filter ${filter === c ? 'is-active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.name}
                className={`project ${p.featured ? 'project--featured' : ''}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="project__top">
                  <span className="project__cat">{p.category}</span>
                  <div className="project__badges">
                    {p.openSource && <span className="project__oss">◇ open source</span>}
                    {p.featured && <span className="project__star">★ featured</span>}
                  </div>
                </div>

                <h3 className="project__name">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      {p.name} <ArrowIcon className="project__name-arrow" />
                    </a>
                  ) : (
                    <span>{p.name}</span>
                  )}
                </h3>

                <p className="project__desc">{p.description}</p>

                <div className="project__tags">
                  {p.tags.map((t) => (
                    <span className="project__tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project__footer">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="project__repo">
                      <GitHubIcon width="17" height="17" /> {p.openSource ? 'View source' : 'Source'}
                    </a>
                  ) : (
                    <span className="project__note">{p.note || 'Private repository'}</span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="projects__more">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GitHubIcon width="18" height="18" /> See all repositories
          </a>
        </Reveal>
      </div>
    </section>
  )
}
