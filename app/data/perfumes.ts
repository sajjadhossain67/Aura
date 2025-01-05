export interface Perfume {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Premium' | 'Best Selling' | 'Deals';
  rating: number;
}

export const featuredPerfumes: Perfume[] = [
  // Premium Perfumes
  {
    id: 1,
    name: "Royal Oud",
    price: 12500,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    category: "Premium",
    rating: 4.8
  },
  {
    id: 2,
    name: "Arabian Nights",
    price: 15000,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800",
    category: "Premium",
    rating: 4.9
  },
  {
    id: 3,
    name: "Velvet Amber",
    price: 13500,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
    category: "Premium",
    rating: 4.7
  },
  // Best Selling Perfumes
  {
    id: 4,
    name: "Midnight Rose",
    price: 8500,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800",
    category: "Best Selling",
    rating: 4.9
  },
  {
    id: 5,
    name: "Fresh Citrus",
    price: 7500,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800",
    category: "Best Selling",
    rating: 4.6
  },
  {
    id: 6,
    name: "Vanilla Dreams",
    price: 8000,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800",
    category: "Best Selling",
    rating: 4.8
  },
  // Deals Perfumes
  {
    id: 7,
    name: "Ocean Breeze",
    price: 6500,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800",
    category: "Deals",
    rating: 4.7
  },
  {
    id: 8,
    name: "Summer Bloom",
    price: 5500,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800",
    category: "Deals",
    rating: 4.5
  },
  {
    id: 9,
    name: "Sweet Jasmine",
    price: 6000,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800",
    category: "Deals",
    rating: 4.6
  }
];