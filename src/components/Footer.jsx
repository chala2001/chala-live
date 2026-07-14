import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__prompt prompt">$</span> built by {profile.name} — React ·
          Vite · Framer Motion
        </div>
        <div className="footer__right">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon width="18" height="18" /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon width="18" height="18" /></a>
          <a href={profile.socials.email} aria-label="Email"><MailIcon width="18" height="18" /></a>
        </div>
      </div>
    </footer>
  )
}
