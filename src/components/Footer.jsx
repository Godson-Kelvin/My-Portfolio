import { ArrowUp } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell mx-auto w-full max-w-[1200px] px-6 max-[600px]:px-[18px] footer-inner">
        <p>© 2023 Frimpong Kelvin. Built with care.</p>
        <a className="footer-top" href="#top">Back to top <ArrowUp size={14} /></a>
      </div>
    </footer>
  )
}

export default Footer