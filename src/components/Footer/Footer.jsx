import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="footer-logo">TB</div>
              <span>Trailside Bicycle Works</span>
            </div>
            <p>Expert care for performance bikes since 1998.</p>
            <small>Designed by Darren R.</small>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <address>
              <p>468 Mountain View Rd</p>
              <p>Boulder, CO 80302</p>
              <p>(970) 555-2847</p>
            </address>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li><span>Mon–Fri</span><span>8AM – 7PM</span></li>
              <li><span>Saturday</span><span>9AM – 5PM</span></li>
              <li><span>Sunday</span><span>10AM – 4PM</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
