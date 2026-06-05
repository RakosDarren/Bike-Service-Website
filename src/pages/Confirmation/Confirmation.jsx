import Icon from '../../components/Icon/Icon'
import './Confirmation.css'

const DAY_NAMES = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
]
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function parseMinutes(timeStr) {
  const [timePart, period] = timeStr.split(' ')
  let [h, m] = timePart.split(':').map(Number)
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return h * 60 + m
}

function formatTime(totalMins) {
  const h = Math.floor(totalMins / 60)
  const m = totalMins % 60
  const period = h >= 12 ? 'PM' : 'AM'
  const displayH = h % 12 || 12
  return `${displayH}:${String(m).padStart(2, '0')} ${period}`
}

function Confirmation({ isWalkIn, bookingData, onReturnHome }) {
  if (isWalkIn) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-top">
          <div className="container">
            <div className="confirmation-top-inner">
              <h1>Walk-In Available Now</h1>
            </div>
          </div>
        </div>
        <div className="confirmation-body">
          <div className="container">
            <div className="confirmation-layout">
              <div className="confirmation-card">
                <div className="wait-time-box">
                  <p className="wait-time-label">Current Wait Time</p>
                  <p className="wait-time-value">5–10 minutes</p>
                </div>
                <div className="walkin-details">
                  <div className="walkin-detail-item">
                    <div className="detail-icon-wrap">
                      <Icon name="pin" size={18} />
                    </div>
                    <div className="walkin-detail-text">
                      <strong>Location</strong>
                      <p>468 Mountain View Rd, Boulder, CO 80302</p>
                    </div>
                  </div>
                  <div className="walkin-detail-item">
                    <div className="detail-icon-wrap">
                      <Icon name="clock" size={18} />
                    </div>
                    <div className="walkin-detail-text">
                      <strong>Open Until</strong>
                      <p>6:00 PM Today</p>
                    </div>
                  </div>
                </div>
                <div className="confirmation-actions">
                  <button>
                    <Icon name="directions" size={15} />
                    Get Directions
                  </button>
                  <button>
                    <Icon name="phone" size={15} />
                    Call Shop
                  </button>
                </div>
              </div>
              <button className="return-link" onClick={onReturnHome}>
                ← Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { service, date, time, mechanic } = bookingData
  const startMins = parseMinutes(time)
  const endMins = startMins + service.durationMins
  const endTimeStr = formatTime(endMins)
  const fullDateStr = `${DAY_NAMES[date.getDay()]}, ${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`

  return (
    <div className="confirmation-page">
      <div className="confirmation-top">
        <div className="container">
          <div className="confirmation-top-inner">
            <div className="confirmation-check-icon">
              <Icon name="check" size={26} />
            </div>
            <h1>Your Appointment is Confirmed</h1>
            <p className="confirmation-sub">Confirmation sent to your email</p>
          </div>
        </div>
      </div>
      <div className="confirmation-body">
        <div className="container">
          <div className="confirmation-layout">
            <div className="confirmation-card">
              <div className="confirmation-details">
                <div className="confirmation-detail">
                  <div className="detail-icon-wrap">
                    <Icon name="calendar" size={18} />
                  </div>
                  <div className="confirmation-detail-text">
                    <small>Date &amp; Time</small>
                    <strong>{fullDateStr}</strong>
                    <span>{time} – {endTimeStr}</span>
                  </div>
                </div>
                <div className="confirmation-detail">
                  <div className="detail-icon-wrap">
                    <Icon name="person" size={18} />
                  </div>
                  <div className="confirmation-detail-text">
                    <small>Mechanic</small>
                    <strong>{mechanic.fullName}</strong>
                    <span>{mechanic.title} · {mechanic.years} yrs</span>
                  </div>
                </div>
                <div className="confirmation-detail">
                  <div className="detail-icon-wrap">
                    <Icon name="wrench" size={18} />
                  </div>
                  <div className="confirmation-detail-text">
                    <small>Service</small>
                    <strong>{service.name}</strong>
                    <span>{service.duration} · ${service.price}</span>
                  </div>
                </div>
              </div>

              <div className="bring-note">
                <div className="detail-icon-wrap detail-icon-wrap--info">
                  <Icon name="info" size={16} />
                </div>
                <p>What to bring: Your bike, any specific concerns, previous service records if available.</p>
              </div>

              <div className="confirmation-actions">
                <button>
                  <Icon name="calendar" size={15} />
                  Add to Calendar
                </button>
                <button>
                  <Icon name="directions" size={15} />
                  Directions
                </button>
                <button>
                  <Icon name="phone" size={15} />
                  Call
                </button>
              </div>
            </div>
            <button className="return-link" onClick={onReturnHome}>
              ← Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
