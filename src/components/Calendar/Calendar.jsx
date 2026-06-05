import { useState } from 'react'
import './Calendar.css'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function Calendar({ selectedDate, onSelect }) {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstDayOfMonth; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const todayDate = today.getDate()
  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()

  const isPast = (d) => {
    const date = new Date(year, month, d)
    const start = new Date(todayYear, todayMonth, todayDate)
    return date < start
  }

  const isSelected = (d) => {
    if (!selectedDate || !d) return false
    return (
      selectedDate.getDate() === d &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    )
  }

  const isToday = (d) => {
    return d === todayDate && month === todayMonth && year === todayYear
  }

  const isAtMinMonth = month === todayMonth && year === todayYear

  const prevMonth = () => {
    if (isAtMinMonth) return
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const handleSelect = (d) => {
    if (!d || isPast(d)) return
    onSelect(new Date(year, month, d))
  }

  const formattedDate = selectedDate
    ? `${DAY_NAMES[selectedDate.getDay()]}, ${MONTH_NAMES[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : null

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          className="calendar-nav"
          onClick={prevMonth}
          disabled={isAtMinMonth}
          aria-label="Previous month"
        >
          ‹
        </button>
        <strong>{MONTH_NAMES[month]} {year}</strong>
        <button
          className="calendar-nav"
          onClick={nextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="calendar-grid">
        {WEEKDAYS.map((d, i) => (
          <div key={i} className="calendar-weekday">{d}</div>
        ))}
        {cells.map((d, i) => (
          <button
            key={i}
            className={[
              'calendar-day',
              !d ? 'calendar-day--empty' : '',
              d && isPast(d) ? 'calendar-day--past' : '',
              d && isToday(d) ? 'calendar-day--today' : '',
              d && isSelected(d) ? 'calendar-day--selected' : '',
            ].join(' ')}
            onClick={() => handleSelect(d)}
            disabled={!d || isPast(d)}
            aria-label={d ? `${MONTH_NAMES[month]} ${d}` : undefined}
            aria-pressed={d && isSelected(d) ? true : undefined}
          >
            {d}
          </button>
        ))}
      </div>

      {formattedDate && (
        <p className="calendar-selected-label">{formattedDate}</p>
      )}
    </div>
  )
}

export default Calendar
