export const INITIAL_ITEMS = [
  {
    id: 'rec-001',
    name: 'Black Keychain',
    category: 'Accessories',
    location: 'Library',
    status: 'Found',
    date: '2026-10-08',
    description: 'Black leather keychain with 3 metal keys and a small blue carabiner attached. Found near the 2nd floor study desks.',
    image: '/images/black-keychain.jpg',
    alt: 'Black leather keychain with metal keys',
    safeNotes: 'Stored safely at the Main Library Reception counter.',
    isDemoData: true
  },
  {
    id: 'rec-002',
    name: 'Blue Water Bottle',
    category: 'Bottles',
    location: 'Classroom Block',
    status: 'Found',
    date: '2026-10-09',
    description: 'Stainless steel blue Hydroflask style water bottle (750ml) with subtle scratches near the base.',
    image: '/images/blue-water-bottle.jpg',
    alt: 'Blue stainless steel water bottle',
    safeNotes: 'Kept with the Classroom Block B security supervisor.',
    isDemoData: true
  },
  {
    id: 'rec-003',
    name: 'Grey Backpack',
    category: 'Bags',
    location: 'Cafeteria',
    status: 'Lost',
    date: '2026-10-07',
    description: 'Dark grey laptop backpack with brown leather accents. Contains course folders and a pencil case.',
    image: '/images/grey-backpack.jpg',
    alt: 'Grey laptop backpack',
    safeNotes: 'Owner can be verified via matching course folder details.',
    isDemoData: true
  },
  {
    id: 'rec-004',
    name: 'Engineering Notebook',
    category: 'Books',
    location: 'Study Hall',
    status: 'Found',
    date: '2026-10-06',
    description: 'A5 grid notebook titled "Mechanical Systems II" on the front cover. Left behind near window table 4.',
    image: '/images/engineering-notebook.jpg',
    alt: 'Grid paper engineering notebook',
    safeNotes: 'Handed to the Student Union Info Desk.',
    isDemoData: true
  },
  {
    id: 'rec-005',
    name: 'Wired Earphones',
    category: 'Electronics',
    location: 'Laboratory Block',
    status: 'Found',
    date: '2026-10-09',
    description: 'White 3.5mm wired earphones in a small clear zipper pouch. Found on Lab Bench 12.',
    image: '/images/wired-earphones.jpg',
    alt: 'White 3.5mm wired earphones',
    safeNotes: 'Stored in Lab 2 Attendant Office.',
    isDemoData: true
  },
  {
    id: 'rec-006',
    name: 'Black Umbrella',
    category: 'Accessories',
    location: 'Main Entrance',
    status: 'Lost',
    date: '2026-10-05',
    description: 'Compact automatic black umbrella with a wooden curved handle. Left near the umbrella rack near gate 1.',
    image: '/images/black-umbrella.jpg',
    alt: 'Compact automatic black umbrella',
    safeNotes: 'Verification required by specifying handle shape and brand tag.',
    isDemoData: true
  },
  {
    id: 'rec-007',
    name: 'Student ID Card',
    category: 'IDs',
    location: 'Student Union',
    status: 'Found',
    date: '2026-10-10',
    description: 'Campus ID card in a transparent plastic holder with a blue lanyard. Found near the dining hall entrance.',
    image: null,
    alt: 'Campus student ID card holder',
    safeNotes: 'Handed over directly to Campus Security Office for immediate identity verification.',
    isDemoData: true
  },
  {
    id: 'rec-008',
    name: 'Brown Leather Wallet',
    category: 'Wallets',
    location: 'Sports Complex',
    status: 'Lost',
    date: '2026-10-04',
    description: 'Foldable brown leather wallet lost near the outdoor basketball courts. Contains transit card.',
    image: '/images/brown-leather-wallet.jpg',
    alt: 'Foldable brown leather wallet',
    safeNotes: 'Contains no cash disclosure. Owner must verify internal transit card ID.',
    isDemoData: true
  }
];

export const CATEGORIES = [
  'All Categories',
  'Accessories',
  'Bags',
  'Bottles',
  'Books',
  'Electronics',
  'IDs',
  'Wallets'
];

export const LOCATIONS = [
  'All Locations',
  'Library',
  'Classroom Block',
  'Cafeteria',
  'Study Hall',
  'Laboratory Block',
  'Main Entrance',
  'Student Union',
  'Sports Complex'
];

export const getCategoryDefaultImage = (category) => {
  switch (category) {
    case 'Accessories':
      return '/images/black-keychain.jpg';
    case 'Bags':
      return '/images/grey-backpack.jpg';
    case 'Bottles':
      return '/images/blue-water-bottle.jpg';
    case 'Books':
      return '/images/engineering-notebook.jpg';
    case 'Electronics':
      return '/images/wired-earphones.jpg';
    case 'IDs':
      return '/images/student-id-card.jpg';
    case 'Wallets':
      return '/images/brown-leather-wallet.jpg';
    default:
      return null;
  }
};
