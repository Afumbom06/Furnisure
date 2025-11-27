import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationKey = string;

const translations: Record<'en' | 'fr', Record<TranslationKey, string>> = {
  en: {
    // Navbar
    'nav.collections': 'Collections',
    'nav.artisans': 'Artisans',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.login': 'Sign In',
    'nav.contact': 'Contact Us',
    
    // Top bar
    'topbar.shipping': 'Free Shipping from 500,000 FCFA',
    
    // Hero
    'hero.badge': 'Premium Cameroonian Craftsmanship',
    'hero.title1': 'Artisanal Excellence',
    'hero.title2': 'Made in Cameroon',
    'hero.subtitle': 'Discover exceptional handcrafted furniture created by Cameroonian master craftsmen. Each piece tells a story of passion, precision, and unparalleled excellence.',
    'hero.explore': 'Explore Collections',
    'hero.video': 'Watch Video',
    'hero.stat1': 'Unique Creations',
    'hero.stat2': 'Expert Artisans',
    'hero.stat3': 'of Excellence',
    'hero.scroll': 'SCROLL',
    'hero.certification': 'Artisanal Certification',
    'hero.quality': 'Quality Guarantee',
    'hero.premium': 'Premium Local Woods',
    'hero.handmade': 'Handcrafted',
    'hero.delivery': 'National Delivery',
    
    // Story Section
    'story.badge': 'Cameroonian Artisanal Excellence',
    'story.title': 'Our Story',
    'story.subtitle': 'Discover the passion and dedication behind every piece we create',
    'story.wood.title': 'From Wood to Wonder',
    'story.wood.desc': 'Each piece begins with carefully selected precious Cameroonian woods - Iroko, Mahogany, Teak - transformed through traditional craft techniques passed down through generations.',
    'story.wood.stat': 'Local Woods',
    'story.artisan.title': 'Artisans of Excellence',
    'story.artisan.desc': 'Our Cameroonian master craftsmen bring decades of experience, ensuring each piece of furniture meets the highest standards of quality and design excellence.',
    'story.artisan.stat': 'Expert Artisans',
    'story.sustainable.title': 'Sustainable Design',
    'story.sustainable.desc': 'Committed to environmental responsibility, we source our materials ethically and create furniture designed to last for generations.',
    'story.sustainable.stat': 'of Excellence',
    'story.cta.title': 'Cameroonian Art at Your Service',
    'story.cta.subtitle': 'Each piece of furniture is a unique work of art, carefully crafted by our passionate artisans',
    'story.cta.button': 'Discover Our Creations',
    
    // Product Gallery
    'gallery.title': 'Our Collections',
    'gallery.subtitle': 'Explore our selection of handcrafted furniture, each designed with attention to detail and built to last.',
    'gallery.search': 'Search furniture... (e.g., tables, chairs)',
    'gallery.filters': 'Filters',
    'gallery.category': 'Category',
    'gallery.material': 'Material',
    'gallery.price': 'Price Range',
    'gallery.sort.featured': 'Featured',
    'gallery.sort.asc': 'Price: Low to High',
    'gallery.sort.desc': 'Price: High to Low',
    'gallery.sort.rating': 'Highest Rated',
    'gallery.noProducts': 'No products found matching your criteria.',
    'gallery.cat.all': 'All Categories',
    'gallery.cat.chair': 'Chairs',
    'gallery.cat.table': 'Tables',
    'gallery.cat.bed': 'Beds',
    'gallery.cat.wardrobe': 'Wardrobes',
    'gallery.cat.sofa': 'Sofas',
    'gallery.cat.desk': 'Desks',
    'gallery.mat.all': 'All Materials',
    'gallery.mat.oak': 'Iroko',
    'gallery.mat.mahogany': 'Mahogany',
    'gallery.mat.walnut': 'Teak',
    'gallery.mat.pine': 'Ebony',
    'gallery.mat.metal': 'Metal',
    
    // Carpenters
    'carpenter.title': 'Meet Our Master Craftsmen',
    'carpenter.subtitle': 'Talented artisans dedicated to creating exceptional furniture pieces with passion and precision',
    'carpenter.experience': 'years of experience',
    'carpenter.viewProfile': 'View Profile',
    
    // Blog
    'blog.title': 'Inspiration & Insights',
    'blog.subtitle': 'Explore design trends, furniture care tips, and stories from our workshop',
    'blog.readTime': 'min read',
    'blog.by': 'by',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Articles',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add some beautiful furniture to get started',
    'cart.continue': 'Continue Shopping',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.freeShipping': 'for free shipping',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.add': 'more',
    
    // Product Detail
    'product.craftedBy': 'Crafted by',
    'product.customize': 'Customize Your Piece',
    'product.material': 'Material',
    'product.finish': 'Color Finish',
    'product.finish.natural': 'Natural',
    'product.finish.darkWalnut': 'Dark Walnut',
    'product.finish.whiteWash': 'White Wash',
    'product.finish.black': 'Black',
    'product.dimensions': 'Dimensions',
    'product.width': 'Width',
    'product.height': 'Height',
    'product.depth': 'Depth',
    'product.addToCart': 'Add to Cart',
    'product.delivery': 'Estimated delivery: 3-4 weeks',
    'product.view360': '360° View',
    
    // Footer
    'footer.shop': 'Shop',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.newsletter': 'Subscribe to Our Newsletter',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.description': 'Handcrafted furniture designed to last a lifetime. Created by Cameroonian master artisans with passion and precision.',
    'footer.rights': 'All rights reserved.',
    'footer.madeIn': 'Made in Cameroon with',
    
    // Login Modal
    'login.welcome': 'Welcome to Artisan',
    'login.tab.login': 'Login',
    'login.tab.signup': 'Sign Up',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.emailPlaceholder': 'your@email.com',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Remember me',
    'login.forgotPassword': 'Forgot password?',
    'login.loginButton': 'Login',
    'login.fullName': 'Full Name',
    'login.namePlaceholder': 'John Doe',
    'login.createAccount': 'Create Account',
    'login.orContinue': 'Or continue with',
    'login.google': 'Google',
    'login.facebook': 'Facebook',
    
    // Common
    'common.featured': 'Featured',
    'common.reviews': 'reviews',
    'common.outOfStock': 'Out of Stock',
  },
  fr: {
    // Navbar
    'nav.collections': 'Collections',
    'nav.artisans': 'Artisans',
    'nav.about': 'À Propos',
    'nav.blog': 'Blog',
    'nav.login': 'Connexion',
    'nav.contact': 'Nous Contacter',
    
    // Top bar
    'topbar.shipping': 'Livraison Gratuite à partir de 500,000 FCFA',
    
    // Hero
    'hero.badge': 'Artisanat Camerounais Premium',
    'hero.title1': 'L\'Excellence Artisanale',
    'hero.title2': 'Made in Cameroun',
    'hero.subtitle': 'Découvrez des meubles artisanaux d\'exception créés par des maîtres ébénistes camerounais. Chaque pièce raconte une histoire de passion, de précision et d\'excellence inégalée.',
    'hero.explore': 'Explorer les Collections',
    'hero.video': 'Voir la Vidéo',
    'hero.stat1': 'Créations Uniques',
    'hero.stat2': 'Artisans Experts',
    'hero.stat3': 'D\'Excellence',
    'hero.scroll': 'DÉFILER',
    'hero.certification': 'Certification Artisanale',
    'hero.quality': 'Garantie Qualité',
    'hero.premium': 'Bois Locaux Premium',
    'hero.handmade': 'Fabrication Artisanale',
    'hero.delivery': 'Livraison Nationale',
    
    // Story Section
    'story.badge': 'Excellence Artisanale Camerounaise',
    'story.title': 'Notre Histoire',
    'story.subtitle': 'Découvrez la passion et le dévouement derrière chaque pièce que nous créons',
    'story.wood.title': 'Du Bois à la Merveille',
    'story.wood.desc': 'Chaque pièce commence avec des bois précieux camerounais soigneusement sélectionnés - Iroko, Acajou, Teck - transformés par des techniques artisanales transmises de génération en génération.',
    'story.wood.stat': 'Bois Locaux',
    'story.artisan.title': 'Artisans d\'Excellence',
    'story.artisan.desc': 'Nos maîtres ébénistes camerounais apportent des décennies d\'expérience, garantissant que chaque meuble répond aux plus hauts standards de qualité et d\'excellence en design.',
    'story.artisan.stat': 'Artisans Experts',
    'story.sustainable.title': 'Design Durable',
    'story.sustainable.desc': 'Engagés envers la responsabilité environnementale, nous sourçons nos matériaux de manière éthique et créons des meubles conçus pour durer des générations.',
    'story.sustainable.stat': 'D\'Excellence',
    'story.cta.title': 'L\'Art Camerounais à Votre Service',
    'story.cta.subtitle': 'Chaque meuble est une œuvre d\'art unique, façonnée avec soin par nos artisans passionnés',
    'story.cta.button': 'Découvrir nos Créations',
    
    // Product Gallery
    'gallery.title': 'Nos Collections',
    'gallery.subtitle': 'Explorez notre sélection de meubles artisanaux, chacun conçu avec attention aux détails et construit pour durer.',
    'gallery.search': 'Rechercher des meubles... (ex: tables, chaises)',
    'gallery.filters': 'Filtres',
    'gallery.category': 'Catégorie',
    'gallery.material': 'Matériau',
    'gallery.price': 'Gamme de Prix',
    'gallery.sort.featured': 'En Vedette',
    'gallery.sort.asc': 'Prix: Croissant',
    'gallery.sort.desc': 'Prix: Décroissant',
    'gallery.sort.rating': 'Mieux Notés',
    'gallery.noProducts': 'Aucun produit trouvé correspondant à vos critères.',
    'gallery.cat.all': 'Toutes les Catégories',
    'gallery.cat.chair': 'Chaises',
    'gallery.cat.table': 'Tables',
    'gallery.cat.bed': 'Lits',
    'gallery.cat.wardrobe': 'Armoires',
    'gallery.cat.sofa': 'Canapés',
    'gallery.cat.desk': 'Bureaux',
    'gallery.mat.all': 'Tous les Matériaux',
    'gallery.mat.oak': 'Iroko',
    'gallery.mat.mahogany': 'Acajou',
    'gallery.mat.walnut': 'Teck',
    'gallery.mat.pine': 'Ébène',
    'gallery.mat.metal': 'Métal',
    
    // Carpenters
    'carpenter.title': 'Rencontrez Nos Maîtres Artisans',
    'carpenter.subtitle': 'Des artisans talentueux dédiés à la création de meubles exceptionnels avec passion et précision',
    'carpenter.experience': 'ans d\'expérience',
    'carpenter.viewProfile': 'Voir le Profil',
    
    // Blog
    'blog.title': 'Inspiration & Conseils',
    'blog.subtitle': 'Explorez les tendances design, les conseils d\'entretien, et les histoires de notre atelier',
    'blog.readTime': 'min de lecture',
    'blog.by': 'par',
    'blog.readMore': 'Lire Plus',
    'blog.viewAll': 'Voir Tous les Articles',
    
    // Cart
    'cart.title': 'Panier',
    'cart.empty': 'Votre panier est vide',
    'cart.emptyDesc': 'Ajoutez de beaux meubles pour commencer',
    'cart.continue': 'Continuer vos Achats',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.free': 'Gratuite',
    'cart.freeShipping': 'pour la livraison gratuite',
    'cart.total': 'Total',
    'cart.checkout': 'Passer la Commande',
    'cart.add': 'Ajoutez',
    
    // Product Detail
    'product.craftedBy': 'Créé par',
    'product.customize': 'Personnalisez Votre Pièce',
    'product.material': 'Matériau',
    'product.finish': 'Finition Couleur',
    'product.finish.natural': 'Naturel',
    'product.finish.darkWalnut': 'Noyer Foncé',
    'product.finish.whiteWash': 'Blanchi',
    'product.finish.black': 'Noir',
    'product.dimensions': 'Dimensions',
    'product.width': 'Largeur',
    'product.height': 'Hauteur',
    'product.depth': 'Profondeur',
    'product.addToCart': 'Ajouter au Panier',
    'product.delivery': 'Livraison estimée: 3-4 semaines',
    'product.view360': 'Vue 360°',
    
    // Footer
    'footer.shop': 'Boutique',
    'footer.company': 'Entreprise',
    'footer.support': 'Support',
    'footer.legal': 'Légal',
    'footer.newsletter': 'Inscrivez-vous à Notre Newsletter',
    'footer.emailPlaceholder': 'Entrez votre email',
    'footer.description': 'Meubles artisanaux conçus pour durer toute une vie. Créés par des maîtres artisans camerounais avec passion et précision.',
    'footer.rights': 'Tous droits réservés.',
    'footer.madeIn': 'Fait au Cameroun avec',
    
    // Login Modal
    'login.welcome': 'Bienvenue chez Artisan',
    'login.tab.login': 'Connexion',
    'login.tab.signup': 'Inscription',
    'login.email': 'Email',
    'login.password': 'Mot de passe',
    'login.emailPlaceholder': 'votre@email.com',
    'login.passwordPlaceholder': '••••••••',
    'login.rememberMe': 'Se souvenir de moi',
    'login.forgotPassword': 'Mot de passe oublié?',
    'login.loginButton': 'Se Connecter',
    'login.fullName': 'Nom Complet',
    'login.namePlaceholder': 'Jean Dupont',
    'login.createAccount': 'Créer un Compte',
    'login.orContinue': 'Ou continuer avec',
    'login.google': 'Google',
    'login.facebook': 'Facebook',
    
    // Common
    'common.featured': 'En Vedette',
    'common.reviews': 'avis',
    'common.outOfStock': 'Rupture de Stock',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage or default to 'fr'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved === 'en' || saved === 'fr') ? saved : 'fr';
    }
    return 'fr';
  });

  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
