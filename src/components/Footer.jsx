export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Eric Chan</span>
        <span>Built with care, React & Three.js.</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  )
}
