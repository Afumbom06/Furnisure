import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ProductGallery } from './components/ProductGallery';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CarpenterSection } from './components/CarpenterSection';
import { BlogSection } from './components/BlogSection';
import { CartDrawer } from './components/CartDrawer';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';
import { getProducts, getCarpenters, getBlogPosts } from './data/mockData';
import { Product, CartItem, Carpenter } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  const products = getProducts(language);
  const carpenters = getCarpenters(language);
  const blogPosts = getBlogPosts(language);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (product: Product, customization?: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, customization }
            : item
        );
      }
      return [...prev, { product, quantity: 1, customization }];
    });
    toast.success('Added to cart', {
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    toast.info('Checkout feature', {
      description: 'In a full application, this would connect to Supabase for order processing',
    });
  };

  const handleViewCarpenterProfile = (carpenter: Carpenter) => {
    toast.info('Carpenter Profile', {
      description: `Viewing profile for ${carpenter.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        cartItemCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />

      <HeroSection />
      
      <StorySection />
      
      <ProductGallery
        products={products}
        onQuickView={handleQuickView}
        onAddToCart={handleAddToCart}
      />
      
      <CarpenterSection
        carpenters={carpenters}
        onViewProfile={handleViewCarpenterProfile}
      />
      
      <BlogSection posts={blogPosts} />
      
      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
