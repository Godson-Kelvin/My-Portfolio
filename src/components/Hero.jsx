import { ArrowDown, ArrowDownRight, Code2 } from 'lucide-react'
import portrait from '../assets/me.jpg'

function Hero() {
  return (
    <section className="hero-section">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] hero-grid">
        <div className="hero-copy">
          <div className="availability"><span /> Available for select projects</div>
          <p className="eyebrow">Frontend developer · Accra, Ghana</p>
          <h1 className="hero-title">I build thoughtful <em>digital</em> experiences.</h1>
          <p className="hero-description">
            I&apos;m Frimpong Kelvin. I turn ideas into fast, accessible websites with
            clear design and careful frontend engineering.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a>
            <a className="text-link" href="#about">A little about me <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Frimpong Kelvin">
          <div className="hero-photo-wrap">
            <img src={portrait} alt="Frimpong Kelvin smiling in a black shirt" fetchPriority="high" />
          </div>
          <div className="hero-stamp"><strong>FK</strong><span>Build with care</span></div>
          <div className="hero-caption">
            <span className="caption-icon"><Code2 size={18} /></span>
            <span><strong>Design-minded code</strong><small>Thoughtful down to the detail</small></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero