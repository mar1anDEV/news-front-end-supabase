import hondaCivic from "../assets/imagesClassifieds/honda-civic.jpeg"
import apartament2 from "../assets/imagesClassifieds/apartament.jpeg"
import iphone13 from "../assets/imagesClassifieds/iphone13.jpeg"

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
  type IconDefinition
} from '@fortawesome/free-solid-svg-icons'

export type AdCondition = 'new' | 'used' | 'refurbished'

export interface ClassifiedAd {
  id: string
  title: string
  price: number
  location: string
  category: string
  condition: AdCondition
  image: string
  date: string
  description: string
  seller: string
  featured: boolean
  icon: IconDefinition
}

const categoryIcons: Record<string, IconDefinition> = {
  'Vehicles': faCar,
  'Real Estate': faHouse,
  'Electronics': faMobileScreen,
  'Home & Furniture': faCouch,
  'Services': faWrench,
  'Fashion': faShirt,
  'Sports & Hobbies': faBicycle,
  'Kids & Baby': faEllipsis
}

export const classifiedAds: ClassifiedAd[] = [
  {
    id: "1",
    title: '2018 Honda Civic – Excellent Condition',
    price: 8500,
    location: 'Kyiv',
    category: 'Vehicles',
    condition: 'used',
    image: hondaCivic,
    date: '2 hours ago',
    description: 'Well maintained, single owner, full service history.',
    seller: 'AutoLine Kyiv',
    featured: true,
    icon: categoryIcons['Vehicles']
  },
  {
    id: "2",
    title: 'Modern 2-Room Apartment in City Center',
    price: 55000,
    location: 'Lviv',
    category: 'Real Estate',
    condition: 'used',
    image: apartament2,
    date: '5 hours ago',
    description: 'Bright apartment with balcony, parking, and renovated interior.',
    seller: 'Lviv Property Group',
    featured: true,
    icon: categoryIcons['Real Estate']
  },
  {
    id: "3",
    title: 'iPhone 13 Pro 256GB',
    price: 750,
    location: 'Odesa',
    category: 'Electronics',
    condition: 'used',
    image: iphone13,
    date: '1 day ago',
    description: 'Excellent condition, original box and charger included.',
    seller: 'Private Seller',
    featured: false,
    icon: categoryIcons['Electronics']
  },
  {
    id: "4",
    title: 'Ergonomic Office Chair',
    price: 120,
    location: 'Dnipro',
    category: 'Home & Furniture',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69',
    date: '3 hours ago',
    description: 'Comfortable office chair with adjustable height and lumbar support.',
    seller: 'WorkSpace Store',
    featured: false,
    icon: categoryIcons['Home & Furniture']
  },
  {
    id: "5",
    title: 'BMW 320d 2016 Diesel',
    price: 12000,
    location: 'Kharkiv',
    category: 'Vehicles',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54c',
    date: '6 hours ago',
    description: 'Low mileage, clean interior, recently serviced.',
    seller: 'DriveMarket',
    featured: true,
    icon: categoryIcons['Vehicles']
  },
  {
    id: "6",
    title: 'MacBook Pro 2021 M1',
    price: 1400,
    location: 'Kyiv',
    category: 'Electronics',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    date: '1 day ago',
    description: 'Powerful laptop for development and design.',
    seller: 'TechHub UA',
    featured: false,
    icon: categoryIcons['Electronics']
  },
  {
    id: "7",
    title: 'New House Near Lake',
    price: 89000,
    location: 'Zhytomyr',
    category: 'Real Estate',
    condition: 'new',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    date: '2 days ago',
    description: 'Modern house with garden and lake view.',
    seller: 'GreenHome Agency',
    featured: true,
    icon: categoryIcons['Real Estate']
  },
  {
    id: "8",
    title: 'Gaming PC RTX 3060',
    price: 900,
    location: 'Vinnytsia',
    category: 'Electronics',
    condition: 'refurbished',
    image: 'https://images.unsplash.com/photo-1587202372775-98927c2c8d8c',
    date: '8 hours ago',
    description: 'High-performance gaming PC.',
    seller: 'GameTech',
    featured: false,
    icon: categoryIcons['Electronics']
  },
  {
    id: "9",
    title: 'Modern Sofa Set',
    price: 300,
    location: 'Poltava',
    category: 'Home & Furniture',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    date: '4 hours ago',
    description: 'Stylish sofa set.',
    seller: 'Private Seller',
    featured: false,
    icon: categoryIcons['Home & Furniture']
  },
  {
    id: "10",
    title: 'Toyota Corolla 2017',
    price: 9500,
    location: 'Cherkasy',
    category: 'Vehicles',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1549921296-3a6b3a6cfa6a',
    date: '7 hours ago',
    description: 'Reliable car.',
    seller: 'AutoPoint',
    featured: false,
    icon: categoryIcons['Vehicles']
  },
  {
    id: "11",
    title: 'Web Development Services',
    price: 0,
    location: 'Remote',
    category: 'Services',
    condition: 'new',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    date: '1 day ago',
    description: 'Professional web development.',
    seller: 'Freelancer',
    featured: true,
    icon: categoryIcons['Services']
  },
  {
    id: "12",
    title: 'Dining Table Set',
    price: 250,
    location: 'Rivne',
    category: 'Home & Furniture',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265',
    date: '3 hours ago',
    description: 'Wooden table with chairs.',
    seller: 'HomeStyle',
    featured: false,
    icon: categoryIcons['Home & Furniture']
  },
  {
    id: "13",
    title: 'Mountain Bike',
    price: 400,
    location: 'Lutsk',
    category: 'Sports & Hobbies',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8',
    date: '6 hours ago',
    description: 'Great bike.',
    seller: 'BikeZone',
    featured: false,
    icon: categoryIcons['Sports & Hobbies']
  },
  {
    id: "14",
    title: 'Canon Camera',
    price: 600,
    location: 'Sumy',
    category: 'Electronics',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be96e9b',
    date: '9 hours ago',
    description: 'Camera with kit.',
    seller: 'PhotoMarket',
    featured: false,
    icon: categoryIcons['Electronics']
  },
  {
    id: "15",
    title: 'Apartment for Rent',
    price: 450,
    location: 'Kyiv',
    category: 'Real Estate',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    date: '2 days ago',
    description: 'Furnished apartment.',
    seller: 'CityRent',
    featured: true,
    icon: categoryIcons['Real Estate']
  },
  {
    id: "16",
    title: 'Leather Jacket',
    price: 80,
    location: 'Lviv',
    category: 'Fashion',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38',
    date: '5 hours ago',
    description: 'Stylish jacket.',
    seller: 'Private Seller',
    featured: false,
    icon: categoryIcons['Fashion']
  },
  {
    id: "17",
    title: 'Plumbing Services',
    price: 0,
    location: 'Dnipro',
    category: 'Services',
    condition: 'new',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    date: '1 day ago',
    description: 'Professional plumbing.',
    seller: 'Dnipro Plumbing',
    featured: false,
    icon: categoryIcons['Services']
  },
  {
    id: "18",
    title: 'Kids Bicycle',
    price: 90,
    location: 'Kherson',
    category: 'Kids & Baby',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1595433562696-6c8d0cce13c5',
    date: '3 hours ago',
    description: 'Kids bike.',
    seller: 'Private Seller',
    featured: false,
    icon: categoryIcons['Kids & Baby']
  },
  {
    id: "19",
    title: 'Office Desk',
    price: 150,
    location: 'Chernihiv',
    category: 'Home & Furniture',
    condition: 'new',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    date: '4 hours ago',
    description: 'Minimal desk.',
    seller: 'OfficePro',
    featured: false,
    icon: categoryIcons['Home & Furniture']
  },
  {
    id: "20",
    title: 'Audi A4 2019',
    price: 18000,
    location: 'Odesa',
    category: 'Vehicles',
    condition: 'used',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c',
    date: '10 hours ago',
    description: 'Luxury sedan.',
    seller: 'Premium Auto',
    featured: true,
    icon: categoryIcons['Vehicles']
  }
]