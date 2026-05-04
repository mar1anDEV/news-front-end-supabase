import {
  faCar,
  faHouse,
  faMobileScreen,
  faCouch,
  faWrench,
  faBriefcase,
  faShirt,
  faBicycle,
  faEllipsis,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'

export const fakeClassifiedsDataListing = [
  {
  id: "0",
  name: 'All Categories',
  icon: faLayerGroup
},
  
  {
    id: "1",
    name: 'Vehicles',
    icon: faCar,
    description: 'Cars, motorcycles, and other vehicles for sale',
    count: 128
  },
  {
    id: "2",
    name: 'Real Estate',
    icon: faHouse,
    description: 'Apartments, houses, and land listings',
    count: 86
  },
  {
    id: "3",
    name: 'Electronics',
    icon: faMobileScreen,
    description: 'Phones, laptops, and gadgets',
    count: 74
  },
  {
    id: "4",
    name: 'Home & Furniture',
    icon: faCouch,
    description: 'Furniture and home appliances',
    count: 63
  },
  {
    id: "5",
    name: 'Services',
    icon: faWrench,
    description: 'Professional and local services',
    count: 52
  },
  {
    id: "6",
    name: 'Jobs',
    icon: faBriefcase,
    description: 'Find jobs or post job listings',
    count: 41
  },
  {
    id: "7",
    name: 'Fashion',
    icon: faShirt,
    description: 'Clothing, shoes, and accessories',
    count: 23
  },
  {
    id: "8",
    name: 'Sports & Hobbies',
    icon: faBicycle,
    description: 'Sports gear and hobby items',
    count: 19
  },
  {
    id: "9",
    name: 'Others',
    icon: faEllipsis,
    description: 'Miscellaneous listings',
    count: 31
  }
]