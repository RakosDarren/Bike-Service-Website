import './Navbar.css'

function Navbar({ onServicesClick, onScheduleClick }) {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-brand">
          <div className="nav-logo">TB</div>
          <div className="nav-brand-text">
            <span className="nav-name">Trailside Bicycle Works</span>
            <span className="nav-est">EST. 1998</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#" onClick={e => { e.preventDefault(); onServicesClick('home') }}>Home</a>
          <a href="#services" onClick={e => { e.preventDefault(); onServicesClick('services') }}>Services</a>
          <a href="#walkin" onClick={e => { e.preventDefault(); onServicesClick('walkin') }}>Walk-In Services</a>
          <button onClick={onScheduleClick}>Schedule Service</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
