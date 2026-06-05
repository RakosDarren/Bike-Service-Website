export const premiumServices = [
  {
    id: 'full-suspension',
    name: 'Full Suspension Tune-up',
    duration: '2 hours',
    durationMins: 120,
    price: 180,
    popular: true,
    description:
      'Complete service: fork & shock teardown, damper oil replacement, seal inspection, compression & rebound adjustment, nitrogen charge verification.',
    type: 'appointment',
  },
  {
    id: 'drivetrain',
    name: 'Drivetrain Overhaul',
    duration: '90 min',
    durationMins: 90,
    price: 95,
    popular: false,
    description:
      'Chain, cassette & derailleur deep clean, cable replacement, limit screw tuning, precision indexing.',
    type: 'appointment',
  },
  {
    id: 'wheel-rebuild',
    name: 'Wheel Rebuild',
    duration: '3 hours',
    durationMins: 180,
    price: 220,
    popular: false,
    description:
      'Full spoke replacement, hub service, precision truing, tension balancing, tubeless setup.',
    type: 'appointment',
  },
];

export const quickServices = [
  {
    id: 'gear-adjust',
    name: 'Gear Adjustment',
    duration: '~15 min',
    durationMins: 15,
    price: 25,
    description: 'Precision derailleur adjustment for smooth, reliable shifting.',
    type: 'walkin',
  },
  {
    id: 'brake-check',
    name: 'Brake Check',
    duration: '~20 min',
    durationMins: 20,
    price: 30,
    description: 'Pad inspection, cable tension adjustment, lever reach optimization.',
    type: 'walkin',
  },
  {
    id: 'flat-tire',
    name: 'Flat Tire Fix',
    duration: '~25 min',
    durationMins: 25,
    price: 20,
    description: 'Tube replacement or patch, rim inspection, inflation to spec.',
    type: 'walkin',
  },
  {
    id: 'chain-repair',
    name: 'Chain Repair',
    duration: '~30 min',
    durationMins: 30,
    price: 35,
    description: 'Chain cleaning, link replacement, drivetrain lubrication.',
    type: 'walkin',
  },
];

export const allServices = [...premiumServices, ...quickServices];
