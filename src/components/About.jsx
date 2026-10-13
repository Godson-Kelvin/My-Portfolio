const skills = ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Accessibility']

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] about-grid">
        <div>
          <p className="eyebrow">A bit about me</p>
          <h2 className="section-title">Good interfaces make the complex feel simple.</h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m a frontend developer who cares about how things work and how they feel. I enjoy partnering with people to shape useful ideas into polished, dependable web experiences.</p>
          <p>From the first responsive layout to the final interaction, I bring a detail-focused approach to every part of the build. My goal is always to make the web feel a little more welcoming and a lot easier to use.</p>
          <div className="skill-list" aria-label="Skills">
            {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About