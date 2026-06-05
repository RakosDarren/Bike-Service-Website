import './ServiceCard.css'

function ServiceCard({ service, onBook, featured }) {
  return (
    <article className={`service-card${featured ? ' service-card--featured' : ''}`}>
      {featured && <span className="service-card-badge">BEST POPULAR</span>}
      <div className="service-card-meta">
        <span className="service-card-duration">{service.duration}</span>
        <span className="service-card-price">${service.price}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button onClick={() => onBook(service)}>Book This Service</button>
    </article>
  )
}

export default ServiceCard
