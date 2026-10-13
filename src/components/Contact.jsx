import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'

const phoneNumbers = ['0509049971', '0546759959']

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] contact-grid">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 className="contact-title">Let&apos;s make something <span>meaningful.</span></h2>
          <p className="contact-copy">Have a project, a question, or just want to say hello? I&apos;d love to hear from you.</p>
        </div>
        <div className="contact-actions">
          <a className="button-primary" href="mailto:frimponkrlvin500@gmail.com">frimponkelvin500@gmail.com <ArrowUpRight size={16} /></a>
          <div className="phone-links" aria-label="Telephone numbers">
            <a className="phone-link whatsapp-link" href="https://wa.me/233509049971" target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> WhatsApp 0509049971 <ArrowUpRight size={14} />
            </a>
            {phoneNumbers.map((number) => <a className="phone-link" href={`tel:${number}`} key={number}><Phone size={14} />{number}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact