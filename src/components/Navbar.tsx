import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search, User, Heart, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Badge } from './ui/badge';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}

export function Navbar({ cartItemCount, onCartClick, onLoginClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.collections'), href: '#gallery' },
    { label: t('nav.artisans'), href: '#carpenters' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.blog'), href: '#blog' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+237 6 XX XX XX XX</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <MapPin className="h-3 w-3" />
              <span>Douala • Yaoundé • Bafoussam</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs">
              {t('topbar.shipping')}
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg'
            : 'bg-blue-950/20 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className={`transition-colors ${scrolled ? 'text-blue-900' : 'text-white'}`}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"
                  stroke="url(#logoGradient)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path d="M20 5V35" stroke="url(#logoGradient)" strokeWidth="2.5" />
                <path d="M5 12.5L35 27.5" stroke="url(#logoGradient)" strokeWidth="2" />
                <path d="M35 12.5L5 27.5" stroke="url(#logoGradient)" strokeWidth="2" />
              </svg>
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`text-xl tracking-wider transition-colors ${
                  scrolled ? 'text-blue-900' : 'text-white'
                }`}
              >
                ARTISAN
              </span>
              <span
                className={`text-[10px] tracking-widest transition-colors ${
                  scrolled ? 'text-blue-600' : 'text-blue-200'
                }`}
              >
                CAMEROUN
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative transition-colors hover:opacity-100 ${
                  scrolled ? 'text-gray-900' : 'text-white opacity-90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className={`hidden sm:flex ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`hidden sm:flex ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className={`relative ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            <Button
              onClick={onLoginClick}
              className={`hidden md:flex ${
                scrolled
                  ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-lg'
                  : 'bg-blue-500/30 text-white backdrop-blur-sm hover:bg-blue-500/40'
              }`}
            >
              <User className="mr-2 h-4 w-4" />
              {t('nav.login')}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-br from-gray-50 to-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center gap-3 border-b pb-4">
                    <div className="h-12 w-12">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <defs>
                          <linearGradient id="logoGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#60a5fa" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M24 6L6 15V33L24 42L42 33V15L24 6Z"
                          stroke="url(#logoGradientMobile)"
                          strokeWidth="3"
                          fill="none"
                        />
                        <path d="M24 6V42" stroke="url(#logoGradientMobile)" strokeWidth="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl">ARTISAN</div>
                      <div className="text-xs text-gray-600">CAMEROUN</div>
                    </div>
                  </div>

                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-xl hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="pt-4 border-t space-y-3">
                    <Button
                      onClick={onLoginClick}
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
                    >
                      <User className="mr-2 h-4 w-4" />
                      {t('nav.login')}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      {t('nav.contact')}
                    </Button>
                  </div>

                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+237 6 XX XX XX XX</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Douala • Yaoundé</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
