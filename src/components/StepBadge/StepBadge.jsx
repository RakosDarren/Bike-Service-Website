import './StepBadge.css'

function StepBadge({ step, label, light }) {
  return (
    <div className={`step-badge${light ? ' step-badge--light' : ''}`}>
      <span>STEP {step}</span>
      <span className="step-badge-dot">•</span>
      <span>{label}</span>
    </div>
  )
}

export default StepBadge
