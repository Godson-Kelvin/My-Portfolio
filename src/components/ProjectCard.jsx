import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-index">{project.number}</span>
      </div>
      <div className="project-body">
        <div>
          <p className="project-category">{project.category}</p>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <a className="project-link" href={`mailto:frimponkrlvin500@gmail.com?subject=${encodeURIComponent(`Project inquiry: ${project.name}`)}`} aria-label={`Ask about ${project.name}`}>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard