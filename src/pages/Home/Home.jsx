import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Icon from '../../components/Icon/Icon'
import { premiumServices, quickServices } from '../../data/services'
import heroImg from '../../assets/Hero.png'
import './Home.css'

function Home({ onBookService, onWalkIn }) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="container">
              <div className="hero-rating">
                <span className="hero-stars">★★★★★</span>
                <span>4.9/5 · 328 Reviews</span>
              </div>
              <h1>Expert Care for<br />Performance Bikes</h1>
              <p>Specialized in mountain bikes and high-performance builds. Precision service by certified mechanics with 15+ years experience.</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={scrollToServices}>
                  Book Premium Service
                </button>
                <button className="btn-outline" onClick={onWalkIn}>
                  Walk-In Services
                </button>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImg} alt="Bike mechanic working in workshop" />
          </div>
        </div>
      </section>

      <section className="info-strip">
        <div className="container">
          <div className="info-cards">
            <div className="info-card info-card--hours">
              <div className="info-card-icon-wrap">
                <Icon name="clock" size={26} />
              </div>
              <h3>We're Open Now!</h3>
              <ul>
                <li><span>Mon – Fri</span><span>8 AM – 7 PM</span></li>
                <li><span>Saturday</span><span>9 AM – 5 PM</span></li>
                <li><span>Sunday</span><span>10 AM – 4 PM</span></li>
              </ul>
            </div>
            <div className="info-card info-card--location">
              <div className="info-card-icon-wrap">
                <Icon name="pin" size={26} />
              </div>
              <h3>Find Us</h3>
              <address>
                <p><strong>468 Mountain View Rd</strong></p>
                <p>Boulder, CO 80302</p>
                <p className="info-note">Near bike trail access · free parking</p>
              </address>
            </div>
            <div className="info-card info-card--walkin">
              <div className="info-card-icon-wrap">
                <Icon name="bolt" size={26} />
              </div>
              <h3>Walk-Ins Welcome</h3>
              <p>No appointment needed for:</p>
              <ul>
                <li>Gear adjustments</li>
                <li>Brake checks</li>
                <li>Flat tire fixes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Premium Services</h2>
            <p>Professional service for your high-performance bike — appointment required</p>
          </div>
          <div className="service-cards-grid">
            {premiumServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={onBookService}
                featured={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="walkin-section" id="walkin">
        <div className="container">
          <div className="section-header">
            <h2>Quick Walk-In Services</h2>
            <p>Most repairs done in under 30 minutes · No appointment needed</p>
          </div>
          <div className="quick-grid">
            {quickServices.map(service => (
              <div key={service.id} className="quick-card">
                <div className="quick-card-top">
                  <h4>{service.name}</h4>
                  <span className="quick-card-duration">{service.duration}</span>
                </div>
                <p>{service.description}</p>
                <div className="quick-card-footer">
                  <span className="quick-card-price">${service.price}</span>
                  <span className="walkin-tag">Walk-In</span>
                </div>
              </div>
            ))}
          </div>
          <div className="walkin-cta">
            <button className="btn-primary btn-large" onClick={onWalkIn}>
              Check Walk-In Availability →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
