import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Booking from './pages/Booking/Booking'
import Confirmation from './pages/Confirmation/Confirmation'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [selectedService, setSelectedService] = useState(null)
  const [bookingData, setBookingData] = useState(null)
  const [isWalkIn, setIsWalkIn] = useState(false)

  const goTo = (target) => {
    if (target === 'home') {
      setPage('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (target === 'services') {
      if (page !== 'home') {
        setPage('home')
        setTimeout(() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      } else {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (target === 'walkin') {
      if (page !== 'home') {
        setPage('home')
        setTimeout(() => {
          document.getElementById('walkin')?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      } else {
        document.getElementById('walkin')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleBookService = (service) => {
    setSelectedService(service)
    setIsWalkIn(false)
    setPage('booking')
    window.scrollTo({ top: 0 })
  }

  const handleWalkIn = () => {
    setIsWalkIn(true)
    setBookingData(null)
    setPage('confirmation')
    window.scrollTo({ top: 0 })
  }

  const handleScheduleClick = () => {
    setSelectedService(null)
    setIsWalkIn(false)
    setPage('booking')
    window.scrollTo({ top: 0 })
  }

  const handleConfirmBooking = (data) => {
    setBookingData(data)
    setIsWalkIn(false)
    setPage('confirmation')
    window.scrollTo({ top: 0 })
  }

  const handleReturnHome = () => {
    setPage('home')
    setSelectedService(null)
    setBookingData(null)
    setIsWalkIn(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      <Navbar onServicesClick={goTo} onScheduleClick={handleScheduleClick} />
      <main>
        {page === 'home' && (
          <Home onBookService={handleBookService} onWalkIn={handleWalkIn} />
        )}
        {page === 'booking' && (
          <Booking
            selectedService={selectedService}
            onConfirm={handleConfirmBooking}
            onBack={() => { setPage('home'); window.scrollTo({ top: 0 }) }}
          />
        )}
        {page === 'confirmation' && (
          <Confirmation
            isWalkIn={isWalkIn}
            bookingData={bookingData}
            onReturnHome={handleReturnHome}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
