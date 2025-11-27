import { Product, Carpenter, BlogPost } from '../types';

type Language = 'en' | 'fr';

// Carpenter data with translations
const carpenterData = [
  {
    id: '1',
    name: 'Alain Kamga',
    photo: 'https://images.unsplash.com/photo-1683133424422-98d4a8a2cc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE3ODU4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: {
      en: 'Master craftsman specializing in contemporary furniture in precious woods with 15 years of experience in Cameroonian woodworking.',
      fr: 'Maître artisan spécialisé dans le mobilier contemporain en bois précieux avec 15 ans d\'expérience dans l\'ébénisterie camerounaise.',
    },
    yearsExperience: 15,
    specialty: {
      en: 'Contemporary Design',
      fr: 'Design Contemporain',
    },
    rating: 4.9,
    location: 'Douala, Littoral',
    workshopImages: [
      'https://images.unsplash.com/photo-1728362369426-1647a7fd09d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b3Jrc2hvcCUyMHdvb2R3b3JraW5nfGVufDF8fHx8MTc2MjI2OTcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: '2',
    name: 'Ngwane Amina',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: {
      en: 'Award-winning designer creating minimalist and functional pieces with local Cameroonian woods.',
      fr: 'Designer primée créant des pièces minimalistes et fonctionnelles avec des bois locaux camerounais.',
    },
    yearsExperience: 12,
    specialty: {
      en: 'Minimalist Design',
      fr: 'Design Minimaliste',
    },
    rating: 4.8,
    location: 'Yaoundé, Centre',
    workshopImages: [],
  },
  {
    id: '3',
    name: 'Jacques Mbida',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: {
      en: 'Traditional carpenter passionate about sustainable materials and timeless designs inspired by Cameroonian craftsmanship.',
      fr: 'Menuisier traditionnel passionné par les matériaux durables et les designs intemporels inspirés de l\'artisanat camerounais.',
    },
    yearsExperience: 20,
    specialty: {
      en: 'Traditional Craftsmanship',
      fr: 'Artisanat Traditionnel',
    },
    rating: 5.0,
    location: 'Bafoussam, Ouest',
    workshopImages: [],
  },
];

// Product data with translations
const productData = [
  {
    id: '1',
    name: {
      en: 'Savane Dining Table',
      fr: 'Table à Manger Savane',
    },
    description: {
      en: 'Elegant solid Iroko wood table with clean lines and natural finish. Perfect for modern Cameroonian interiors.',
      fr: 'Table élégante en bois d\'Iroko massif avec lignes épurées et finition naturelle. Parfaite pour les intérieurs modernes camerounais.',
    },
    price: 325000,
    category: 'table',
    material: 'oak',
    color: {
      en: 'Natural Iroko',
      fr: 'Iroko Naturel',
    },
    dimensions: { width: 180, height: 75, depth: 90 },
    images: [
      'https://images.unsplash.com/photo-1593136596203-7212b076f4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjIyNTY2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1080',
    ],
    carpenterId: '1',
    rating: 4.9,
    reviews: [],
    inStock: true,
    customizable: true,
    featured: true,
  },
  {
    id: '2',
    name: {
      en: 'Wouri Premium Armchair',
      fr: 'Fauteuil Wouri Premium',
    },
    description: {
      en: 'Contemporary armchair with premium upholstery and ergonomic design for ultimate comfort.',
      fr: 'Fauteuil contemporain avec tapisserie haut de gamme et design ergonomique pour un confort ultime.',
    },
    price: 225000,
    category: 'chair',
    material: 'walnut',
    color: {
      en: 'Dark Mahogany',
      fr: 'Acajou Foncé',
    },
    dimensions: { width: 80, height: 85, depth: 90 },
    images: [
      'https://images.unsplash.com/photo-1760611656233-915efdf138b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNoYWlyJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjIyNjk3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1080',
    ],
    carpenterId: '2',
    rating: 4.8,
    reviews: [],
    inStock: true,
    customizable: true,
    featured: true,
  },
  {
    id: '3',
    name: {
      en: 'Mount Cameroon Platform Bed',
      fr: 'Lit Plateforme Mont Cameroun',
    },
    description: {
      en: 'Minimalist platform bed with integrated storage and elegant wood frame. Made from sustainable materials.',
      fr: 'Lit plateforme minimaliste avec rangement intégré et cadre en bois élégant. Fabriqué à partir de matériaux durables.',
    },
    price: 400000,
    category: 'bed',
    material: 'oak',
    color: {
      en: 'Light Teak',
      fr: 'Teck Clair',
    },
    dimensions: { width: 180, height: 40, depth: 200 },
    images: [
      'https://images.unsplash.com/photo-1583221742001-9ad88bf233ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBiZWQlMjBiZWRyb29tfGVufDF8fHx8MTc2MjI0NTgxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1080',
    ],
    carpenterId: '3',
    rating: 5.0,
    reviews: [],
    inStock: true,
    customizable: true,
    featured: true,
  },
  {
    id: '4',
    name: {
      en: 'Sanaga Contemporary Wardrobe',
      fr: 'Armoire Contemporaine Sanaga',
    },
    description: {
      en: 'Spacious wardrobe with sliding doors and customizable interior organization system.',
      fr: 'Armoire spacieuse avec portes coulissantes et système d\'organisation intérieure personnalisable.',
    },
    price: 475000,
    category: 'wardrobe',
    material: 'oak',
    color: {
      en: 'Natural',
      fr: 'Naturel',
    },
    dimensions: { width: 200, height: 220, depth: 60 },
    images: [
      'https://images.unsplash.com/photo-1598190185341-a77898d61bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjIxOTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    carpenterId: '1',
    rating: 4.7,
    reviews: [],
    inStock: true,
    customizable: true,
  },
  {
    id: '5',
    name: {
      en: 'Bamiléké Coffee Table',
      fr: 'Table Basse Bamiléké',
    },
    description: {
      en: 'Beautiful coffee table combining reclaimed wood and metal accents for a modern industrial aesthetic.',
      fr: 'Table basse magnifique combinant bois recyclé et accents métalliques pour une esthétique industrielle moderne.',
    },
    price: 150000,
    category: 'table',
    material: 'pine',
    color: {
      en: 'Rustic Brown',
      fr: 'Brun Rustique',
    },
    dimensions: { width: 120, height: 45, depth: 60 },
    images: [
      'https://images.unsplash.com/photo-1461418126083-a84e9ca935de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZSUyMGxpdmluZ3xlbnwxfHx8fDE3NjIxODI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    carpenterId: '2',
    rating: 4.6,
    reviews: [],
    inStock: true,
    customizable: false,
  },
  {
    id: '6',
    name: {
      en: 'Mvog-Mbi Executive Desk',
      fr: 'Bureau Exécutif Mvog-Mbi',
    },
    description: {
      en: 'Timeless executive desk with generous workspace and elegant drawer system.',
      fr: 'Bureau exécutif intemporel avec un espace de travail généreux et un système de tiroirs élégant.',
    },
    price: 375000,
    category: 'desk',
    material: 'oak',
    color: {
      en: 'Dark Ebony',
      fr: 'Ébène Foncé',
    },
    dimensions: { width: 160, height: 75, depth: 80 },
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1080',
    ],
    carpenterId: '3',
    rating: 4.9,
    reviews: [],
    inStock: true,
    customizable: true,
  },
];

// Blog post data with translations
const blogData = [
  {
    id: '1',
    title: {
      en: 'Choosing the Perfect Dining Table for Your Space',
      fr: 'Choisir la Table à Manger Parfaite pour Votre Espace',
    },
    excerpt: {
      en: 'A comprehensive guide to selecting the right size, shape, and material of dining table for your Cameroonian home.',
      fr: 'Un guide complet pour sélectionner la bonne taille, forme et matériau de table pour votre maison camerounaise.',
    },
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1593136596203-7212b076f4d2?w=800',
    author: 'Alain Kamga',
    date: '2024-10-15',
    category: {
      en: 'Design Tips',
      fr: 'Conseils Design',
    },
    readTime: 8,
  },
  {
    id: '2',
    title: {
      en: 'The Art of Sustainable Furniture in Cameroon',
      fr: 'L\'Art du Mobilier Durable au Cameroun',
    },
    excerpt: {
      en: 'Discover how our carpenters embrace eco-friendly practices and sustainable materials.',
      fr: 'Découvrez comment nos menuisiers adoptent des pratiques écologiques et des matériaux durables.',
    },
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1728034261566-cd6ab5d657b9?w=800',
    author: 'Ngwane Amina',
    date: '2024-10-10',
    category: {
      en: 'Sustainability',
      fr: 'Durabilité',
    },
    readTime: 6,
  },
  {
    id: '3',
    title: {
      en: 'Behind the Scenes: A Day in the Workshop',
      fr: 'Dans les Coulisses: Une Journée à l\'Atelier',
    },
    excerpt: {
      en: 'Step into our workshop and discover the meticulous process of creating artisan furniture.',
      fr: 'Entrez dans notre atelier et découvrez le processus méticuleux de fabrication de meubles artisanaux.',
    },
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1728362369426-1647a7fd09d7?w=800',
    author: 'Jacques Mbida',
    date: '2024-10-05',
    category: {
      en: 'Behind the Scenes',
      fr: 'Coulisses',
    },
    readTime: 10,
  },
];

// Helper function to get translated carpenters
export function getCarpenters(language: Language): Carpenter[] {
  return carpenterData.map(c => ({
    id: c.id,
    name: c.name,
    photo: c.photo,
    bio: c.bio[language],
    yearsExperience: c.yearsExperience,
    specialty: c.specialty[language],
    rating: c.rating,
    location: c.location,
    workshopImages: c.workshopImages,
  }));
}

// Helper function to get translated products
export function getProducts(language: Language): Product[] {
  const carpenters = getCarpenters(language);
  const carpenterMap = Object.fromEntries(carpenters.map(c => [c.id, c]));
  
  return productData.map(p => ({
    id: p.id,
    name: p.name[language],
    description: p.description[language],
    price: p.price,
    category: p.category,
    material: p.material,
    color: p.color[language],
    dimensions: p.dimensions,
    images: p.images,
    carpenter: carpenterMap[p.carpenterId],
    rating: p.rating,
    reviews: p.reviews,
    inStock: p.inStock,
    customizable: p.customizable,
    featured: p.featured,
  }));
}

// Helper function to get translated blog posts
export function getBlogPosts(language: Language): BlogPost[] {
  return blogData.map(b => ({
    id: b.id,
    title: b.title[language],
    excerpt: b.excerpt[language],
    content: b.content,
    image: b.image,
    author: b.author,
    date: b.date,
    category: b.category[language],
    readTime: b.readTime,
  }));
}

// Default exports for backward compatibility (using French as default)
export const carpenters = getCarpenters('fr');
export const products = getProducts('fr');
export const blogPosts = getBlogPosts('fr');
