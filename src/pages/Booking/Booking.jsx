import { useState } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { premiumServices, quickServices } from '../../data/services'
import { mechanics } from '../../data/mechanics'
import './Booking.css'

const TIME_SLOTS = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM']
const ALL_BOOKABLE = [...premiumServices, ...quickServices]

const DAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function Booking({ selectedService, onConfirm, onBack }) {
  const initial = selectedService || premiumServices[0]
  const [serviceId, setServiceId] = useState(initial.id)
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)
  const [mechanicId, setMechanicId] = useState(mechanics[0].id)

  const service = ALL_BOOKABLE.find(s => s.id === serviceId) || initial
  const mechanic = mechanics.find(m => m.id === mechanicId)
  const canConfirm = date && time

  const formatShortDate = (d) => {
    if (!d) return '—'
    return `${DAY_SHORT[d.getDay()]}, ${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`
  }

  const handleConfirm = () => {
    if (!canConfirm) return
    onConfirm({ service, date, time, mechanic })
  }

  return (
    <div className="booking-page">
      <div className="booking-top">
        <div className="container">
          <h1>Book Your Service</h1>
        </div>
      </div>

      <div className="booking-body">
        <div className="container">
          <div className="booking-layout">
            <div className="booking-main">

              <div className="service-selector-box">
                <label htmlFor="service-select">Selected Service</label>
                <select
                  id="service-select"
                  value={serviceId}
                  onChange={e => setServiceId(e.target.value)}
                >
                  <optgroup label="Premium Services — Appointment">
                    {premiumServices.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.duration} · ${s.price}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Quick Services — Walk-In Available">
                    {quickServices.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.duration} · ${s.price}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <p className="service-selector-desc">{service.description}</p>
              </div>

              <div className="booking-section">
                <h3>Select Date</h3>
                <Calendar selectedDate={date} onSelect={setDate} />
              </div>

              <div className="booking-section">
                <h3>Available Time Slots</h3>
                <p className="booking-section-note">2-hour appointment blocks</p>
                <div className="time-slots">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      className={`time-slot${time === slot ? ' time-slot--selected' : ''}`}
                      onClick={() => setTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="booking-section">
                <h3>Select Mechanic</h3>
                <select
                  value={mechanicId}
                  onChange={e => setMechanicId(e.target.value)}
                >
                  {mechanics.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.name} — {m.title} · {m.years} yrs
                    </option>
                  ))}
                </select>
              </div>

              <div className="appt-summary">
                <p className="appt-summary-label">APPOINTMENT SUMMARY</p>
                <div className="appt-summary-row">
                  <div className="appt-summary-item">
                    <span>Date</span>
                    <strong>{formatShortDate(date)}</strong>
                  </div>
                  <div className="appt-summary-item">
                    <span>Time</span>
                    <strong>{time || '—'}</strong>
                  </div>
                  <div className="appt-summary-item">
                    <span>Mechanic</span>
                    <strong>{mechanic.name}</strong>
                  </div>
                </div>
              </div>

              <button
                className="confirm-btn"
                onClick={handleConfirm}
                disabled={!canConfirm}
              >
                Confirm Booking
              </button>

              <button className="back-link" onClick={onBack}>
                ← Back to Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
