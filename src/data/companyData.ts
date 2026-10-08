import { TeamMember, ServiceDetail, GalleryItem, PartnerInfo } from '../types';

export const COMPANY_DETAILS = {
  name: 'RSBC Trading (Pty) Ltd',
  shortName: 'RSBC Trading',
  tagline: 'One Team. Every Service.',
  subheadline: 'South Africa’s premier all-rounder partner for commercial & residential cleaning, corporate catering, and facility maintenance.',
  cipcNumber: '2024/718932/07',
  email: 'rsbctrading74@gmail.com',
  primaryPhone: '+27 62 101 3195',
  primaryPhoneDisplay: '062 101 3195',
  whatsappNumber: '27621013195',
  address: '124 Rivonia Road, Sandton, Johannesburg, 2196, South Africa',
  serviceAreas: 'Greater Johannesburg, Sandton, Midrand, Pretoria, Centurion & East Rand',
  operatingHours: 'Monday – Friday: 07:30 – 17:30 | Saturday: 08:00 – 14:00 | 24/7 SLA Emergency Support',
  googlePhotosAlbumUrl: 'https://photos.app.goo.gl/BB2hGhzwF95g9SM96',
};

// Strategic Partners
export const STRATEGIC_PARTNERS: PartnerInfo[] = [
  {
    name: 'Future Coding Corp',
    focus: 'Technology & Digital Infrastructure',
    description: 'Empowers RSBC with cloud dispatch systems, digital job-ticketing, quality audits, and digital innovation.',
    badge: 'Tech Partner',
  },
  {
    name: 'Young Investments Holding',
    focus: 'Capital & Business Development',
    description: 'Provides strategic capital advisory, fleet financing, and enterprise expansion backing across southern Africa.',
    badge: 'Investment Partner',
  },
];

// Leadership & Management Team
export const TEAM_MEMBERS: TeamMember[] = [
  {
    firstName: 'Cercineo',
    surname: 'Lukas',
    position: 'Director',
    phone: '062 101 3195',
    email: 'cercineolukas@gmail.com',
    roleDescription: 'Leads executive strategy, client contracts, and overall enterprise operations for RSBC Trading.',
  },
  {
    firstName: 'Ross',
    surname: 'Alin',
    position: 'Director',
    phone: '077 461 7280',
    roleDescription: 'Oversees high-level business governance, partner relations, and commercial asset deployment.',
  },
  {
    firstName: 'Tyroleen',
    surname: 'Winnaar',
    position: 'Portfolio Manager',
    phone: '076 447 3989',
    email: 'lekeeshstyroleen@gmail.com',
    roleDescription: 'Directs account oversight, service level agreements (SLAs), client satisfaction, and quality delivery.',
  },
  {
    firstName: 'Daline',
    surname: 'Williams',
    position: 'Human Resources',
    phone: '082 483 4454',
    email: 'williamsdaline60@gmail.com',
    roleDescription: 'Ensures stringent staff vetting, workplace safety compliance, training, and certified skills deployment.',
  },
  {
    firstName: 'Nelly',
    surname: 'Goliath',
    position: 'Cleaning Operations Manager',
    phone: '065 307 4477',
    email: 'nellywilliams012@gmail.com',
    roleDescription: 'Commands commercial and residential cleaning squads, chemical standards, and deep-clean quality inspections.',
  },
  {
    firstName: 'Alwin',
    surname: 'Bimrey',
    position: 'Maintenance Operations Manager',
    phone: '062 807 9082',
    email: 'alwinbimrey@gmail.com',
    roleDescription: 'Directs licensed trade technicians, rapid emergency repairs, preventative schedules, and facility works.',
  },
  {
    firstName: 'Sachin AD',
    surname: 'Barnes',
    position: 'IT & Systems Manager',
    phone: '076 982 4649',
    email: 'futurecodecorp@gmail.com',
    roleDescription: 'Connects digital dispatch, client quote generation, telemetry, and automated client feedback flows.',
  },
  {
    firstName: 'Viola',
    surname: 'Aguihas',
    position: 'Client Relations & Volunteer Coordinator',
    phone: '077 498 3793',
    roleDescription: 'Coordinates community engagement, customer onboarding, and special event volunteer logistics.',
  },
];

// Core Services Detailed Information
export const CORE_SERVICES: ServiceDetail[] = [
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    tagline: 'Spotless Commercial Facilities & Pristine Residential Spaces',
    description: 'From high-traffic corporate headquarters and retail stores to premium estates and post-construction handovers, our vetted teams use industrial-grade equipment and eco-certified chemicals.',
    iconName: 'Sparkles',
    image: '/src/assets/images/cleaning_service_showcase_1791449083835.jpg',
    features: [
      'Daily & Scheduled Commercial Office Cleaning',
      'Pre-Occupation & Post-Construction Deep Cleans',
      'Industrial Floor Scrubbing, Stripping & Polishing',
      'Carpet Shampooing & High-Grade Upholstery Extraction',
      'Exterior Glass, Window & Facade Sanitization',
      'Sanitary Hygiene Supply & Consumables Management',
    ],
    b2bOfferings: [
      'Corporate office blocks & financial parks',
      'Warehouses, distribution hubs & manufacturing plants',
      'Shopping malls, retail stores & showrooms',
      'Schools, colleges & medical suites',
    ],
    b2cOfferings: [
      'Private home deep spring cleaning',
      'Move-in / Move-out residential turnarounds',
      'Carpet & mattress steam extraction',
      'Post-renovation dust clearance',
    ],
    packages: [
      {
        name: 'Standard Daily / Weekly Clean',
        description: 'Ideal for small-to-medium offices or residential apartments requiring regular maintenance hygiene.',
        priceHint: 'From R 850 / session',
        included: ['Dusting & surface sanitization', 'Vacuuming & mopping', 'Kitchenette & bathroom disinfection', 'Bin clearance & waste removal'],
      },
      {
        name: 'Comprehensive Deep Scrub',
        description: 'Thorough top-to-bottom hygiene service including floor buffing, tile descaling, and high-touch sterilization.',
        priceHint: 'From R 2,400 / deep clean',
        included: ['Industrial floor buffer polish', 'Tile grout steam treatment', 'Interior window washing', 'Appliance exterior & grease trap clean', 'Full air-sanitizing mist'],
      },
      {
        name: 'Corporate Facility SLA',
        description: 'Dedicated on-site crew, supervisor oversight, consumables management, and month-to-month flexibility.',
        priceHint: 'Custom SLA Quote',
        included: ['Permanent uniformed staff', 'Supervisor weekly audits', 'Eco-friendly cleaning supplies provided', 'Guaranteed emergency response'],
      },
    ],
  },
  {
    id: 'catering',
    title: 'Catering Services',
    tagline: 'Memorable Culinary Experiences for Corporate Events & Private Gatherings',
    description: 'We deliver unforgettable corporate luncheons, conference banquets, cocktail canapés, and private celebrations. Exceptional South African hospitality crafted with fresh, local ingredients.',
    iconName: 'Utensils',
    image: '/src/assets/images/catering_service_showcase_1791449092868.jpg',
    features: [
      'Executive Boardroom Platters & Cold Cut Spreads',
      'Full Hot Buffet Stations & Traditional Carvery',
      'Gourmet Finger Foods & Elegant Cocktail Canapés',
      'Corporate Conferences, AGMs & Product Launches',
      'Private Birthdays, Anniversaries & Micro-Weddings',
      'Dietary Specializations: Halal-Friendly, Vegetarian & Vegan',
    ],
    b2bOfferings: [
      'All-day conference packages with tea/coffee breaks',
      'Executive director luncheons with silver service',
      'Year-end functions & company awards celebrations',
      'Daily staff canteen meal delivery contracts',
    ],
    b2cOfferings: [
      'Intimate private dinner parties with personal chef',
      'Milestone birthday buffets & braai stations',
      'Bridal showers, baby showers & engagement lunches',
      'Family reunion artisanal grazing tables',
    ],
    packages: [
      {
        name: 'Corporate Executive Platters',
        description: 'Fresh artisanal sandwich rolls, chicken skewers, savory pastries, and seasonal fruit kebabs.',
        priceHint: 'From R 145 / person',
        included: ['Artisanal mini rolls & wraps', 'Glazed beef/chicken kebabs', 'Vegetarian quiches', 'Seasonal fruit cuts & dips', 'Eco biodegradable cutlery/plates'],
      },
      {
        name: 'Grand Conference Buffet',
        description: 'Complete 2-course or 3-course warm buffet service with roasted meats, seasonal salads, and decadent desserts.',
        priceHint: 'From R 290 / person',
        included: ['Two hot roast meat selections', 'Two warm starches & roast vegetables', 'Two gourmet salads', 'Dessert buffet trio', 'Chafing warmers & serving team'],
      },
      {
        name: 'Cocktail & Canapé Soirée',
        description: 'Bite-sized luxury creations served by professional waiters for high-end networking and product launches.',
        priceHint: 'From R 220 / person',
        included: ['6 artisanal canapé varieties', 'Professional waitstaff', 'Styling tables & napkin service', 'Dietary-labeled trays'],
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    tagline: 'Proactive Facility Upkeep & Rapid Emergency Repairs',
    description: 'Keep your properties functioning at peak condition. Our qualified handymen, electricians, and plumbers handle everything from routine light fixture overhauls to emergency pipe bursts.',
    iconName: 'Wrench',
    image: '/src/assets/images/maintenance_service_showcase_1791449102395.jpg',
    features: [
      'Electrical Diagnostics, DB Board Repairs & LED Conversions',
      'Plumbing Maintenance, Leak Detection & Geyser Servicing',
      'Drywall Patching, Interior & Exterior Painting',
      'Ceiling Tile Replacement, Door Locks & Hardware Servicing',
      'Routine Preventative Facility Checkups (Monthly SLAs)',
      'Rapid-Response Troubleshooting for Commercial Landlords',
    ],
    b2bOfferings: [
      'Office tenant move-out reinstatement repairs',
      'Retail park preventative maintenance contracts',
      'HVAC filter replacements & distribution box checks',
      'Emergency after-hours utility fault resolution',
    ],
    b2cOfferings: [
      'Home electrical repairs & plug point installations',
      'Leaking taps, toilet mechanisms & pipe repairs',
      'Interior repaint & damp proofing touch-ups',
      'General handyman to-do list clearing',
    ],
    packages: [
      {
        name: 'Ad-Hoc Handyman Callout',
        description: 'Fast resolution for plumbing leaks, broken locks, faulty light fixtures, and wall repairs.',
        priceHint: 'From R 650 callout (incl. 1st hour)',
        included: ['Qualified technician dispatch', 'Comprehensive fault diagnosis', 'First hour labor included', 'Transparent parts billing'],
      },
      {
        name: 'Commercial Preventative SLA',
        description: 'Scheduled monthly walkthrough inspections, preventative servicing, and priority response times.',
        priceHint: 'From R 4,200 / month',
        included: ['Monthly 20-point facility audit', 'Priority 2-hour emergency dispatch', 'Discounted materials rate', 'Detailed compliance reporting'],
      },
      {
        name: 'Turnaround & Reinstatement',
        description: 'Complete property refresh between tenants: painting, electrical sign-off, plumbing check, and deep clean.',
        priceHint: 'Custom Project Quote',
        included: ['Full interior wall repaints', 'Fixtures & fittings re-alignment', 'Plumbing & sanitary test', 'Integrated handover deep-clean'],
      },
    ],
  },
];

// Real Work Gallery
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Commercial Office Atrium Floor Restored',
    category: 'cleaning',
    image: '/src/assets/images/cleaning_service_showcase_1791449083835.jpg',
    description: 'Marble deep scrubbing, high-gloss crystallization buffing, and glass rail sanitization for financial firm lobby in Sandton.',
    clientType: 'B2B Corporate',
    dateCompleted: 'October 2026',
  },
  {
    id: 'gal-2',
    title: 'Corporate Year-End Banquet & Carvery',
    category: 'catering',
    image: '/src/assets/images/catering_service_showcase_1791449092868.jpg',
    description: 'Hot buffet stations, succulent roast carvery, fresh Mediterranean salads, and canapés for 180 delegates.',
    clientType: 'B2B Corporate',
    dateCompleted: 'September 2026',
  },
  {
    id: 'gal-3',
    title: 'Commercial Distribution DB Board & Lighting Upgrade',
    category: 'maintenance',
    image: '/src/assets/images/maintenance_service_showcase_1791449102395.jpg',
    description: 'Electrical overhaul, circuit breaker load balancing, and high-bay LED efficiency replacement in Midrand.',
    clientType: 'Commercial Facility',
    dateCompleted: 'September 2026',
  },
  {
    id: 'gal-4',
    title: 'Fleet Deployment & Multi-Service Team',
    category: 'cleaning',
    image: '/src/assets/images/rsbc_hero_banner_1791449074465.jpg',
    description: 'Integrated facilities crew mobilization: cleaning technicians, catering staff, and on-call maintenance units.',
    clientType: 'B2B Corporate',
    dateCompleted: 'August 2026',
  },
  {
    id: 'gal-5',
    title: 'Executive Boardroom Canapé & Coffee Service',
    category: 'catering',
    image: '/src/assets/images/catering_service_showcase_1791449092868.jpg',
    description: 'Artisanal brioche sliders, smoked salmon blinis, and roast beef skewers for executive quarterly review.',
    clientType: 'B2B Corporate',
    dateCompleted: 'August 2026',
  },
  {
    id: 'gal-6',
    title: 'Facility Plumbing Overhaul & Pipe Relining',
    category: 'maintenance',
    image: '/src/assets/images/maintenance_service_showcase_1791449102395.jpg',
    description: 'Rapid commercial water leak repair, pipe resealing, and bathroom sanitary hardware replacements.',
    clientType: 'Commercial Facility',
    dateCompleted: 'July 2026',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: 'RSBC Trading eliminated the headache of managing three different suppliers. They handle our daily office cleaning, catered our annual shareholder luncheon flawlessly, and fixed our emergency plumbing within two hours.',
    name: 'Kagiso Mokoena',
    role: 'Facilities Director',
    company: 'Vanguard Capital Partners, Sandton',
    metric: '1 Single Invoice & 3 Services Unified',
  },
  {
    quote: 'The level of professionalism from Cercineo and his team is unmatched. As an estate manager, having a reliable CIPC-registered vendor with vetted personnel gives our residents complete peace of mind.',
    name: 'Liezel van der Merwe',
    role: 'Estate General Manager',
    company: 'Highveld Eco Estate, Centurion',
    metric: '99.4% On-Time SLA Performance',
  },
  {
    quote: 'We booked RSBC for our 200-person tech symposium in Midrand. The catering was exceptional, their post-event cleaning left the venue immaculate, and their AV maintenance crew fixed our stage power glitch instantly.',
    name: 'Thabo Ndlovu',
    role: 'Events Operations Head',
    company: 'Horizon Digital Summit',
    metric: '100% 5-Star Attendee Feedback',
  },
];

export const WHY_US_PILLARS = [
  {
    title: 'The All-Rounder Advantage',
    description: 'One company, three essential disciplines. No finger-pointing between vendors, no managing three invoices, and no coordinating different arrival times.',
    highlight: 'One point of contact for everything',
  },
  {
    title: 'CIPC Registered & Fully Compliant',
    description: 'Officially registered South African private company (Reg. 2024/718932/07) carrying comprehensive public liability insurance and COIDA compliance.',
    highlight: '100% Legal & Audited',
  },
  {
    title: 'Rigorous Staff Vetting & Training',
    description: 'All cleaning crews, catering hospitality staff, and maintenance artisans undergo thorough criminal background checks, skill certifications, and health screening.',
    highlight: 'Vetted, Uniformed & Trusted',
  },
  {
    title: 'Technology-Backed Operations',
    description: 'Backed by Future Coding Corp, our dispatching, job tracking, and quality management operate with digital efficiency and direct client communication.',
    highlight: 'Rapid response via WhatsApp & portal',
  },
];
