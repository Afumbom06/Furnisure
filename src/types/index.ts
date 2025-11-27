export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'chair' | 'table' | 'bed' | 'wardrobe' | 'sofa' | 'desk';
  material: 'oak' | 'mahogany' | 'walnut' | 'pine' | 'metal';
  color: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
  carpenter: Carpenter;
  rating: number;
  reviews: Review[];
  inStock: boolean;
  customizable: boolean;
  featured?: boolean;
}

export interface Carpenter {
  id: string;
  name: string;
  photo: string;
  bio: string;
  yearsExperience: number;
  specialty: string;
  rating: number;
  location: string;
  workshopImages: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: {
    material?: string;
    color?: string;
    finish?: string;
  };
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'processing' | 'assembling' | 'shipped' | 'delivered';
  date: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}
