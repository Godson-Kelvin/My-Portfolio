import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    number: '01',
    name: 'Market Lane',
    category: 'E-commerce',
    description: 'A considered online storefront that makes discovering independent goods feel effortless.',
    tags: ['React', 'Commerce', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Small business owner packing an online order',
  },
  {
    number: '02',
    name: 'Clarity Finance',
    category: 'Fintech dashboard',
    description: 'A clean, data-first dashboard that helps people understand their spending at a glance.',
    tags: ['React', 'Data visualization', 'Accessibility'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Analytics dashboard displayed on a laptop',
  },
  {
    number: '03',
    name: 'Wellnest',
    category: 'Health & wellness',
    description: 'A calm booking experience that connects people with the right care and support.',
    tags: ['JavaScript', 'Booking flow', 'Mobile-first'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Bright, peaceful room prepared for a wellness session',
  },
  {
    number: '04',
    name: 'Studio North',
    category: 'Creative portfolio',
    description: 'A visual-first portfolio for a creative studio, designed to let the work lead.',
    tags: ['React', 'Art direction', 'Animation'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Creative studio workspace with a large shared table',
  },
]

function Projects() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px]">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">A few things I&apos;ve made.</h2>
          </div>
          <p className="projects-note">Digital products built with a focus on usefulness, clarity, and the details in between.</p>
        </div>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
      </div>
    </section>
  )
}

export default Projects