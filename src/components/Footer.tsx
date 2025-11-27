import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  
  const footerLinks = {
    [t('footer.shop')]: language === 'fr' 
      ? ['Tous les Meubles', 'Chaises', 'Tables', 'Lits', 'Armoires', 'Commandes Sur Mesure']
      : ['All Furniture', 'Chairs', 'Tables', 'Beds', 'Wardrobes', 'Custom Orders'],
    [t('footer.company')]: language === 'fr'
      ? ['À Propos', 'Nos Artisans', 'Durabilité', 'Carrières', 'Presse']
      : ['About Us', 'Our Artisans', 'Sustainability', 'Careers', 'Press'],
    [t('footer.support')]: language === 'fr'
      ? ['Contact', 'FAQ', 'Livraison & Retours', 'Guide d\'Entretien', 'Garantie']
      : ['Contact', 'FAQs', 'Shipping & Returns', 'Care Guide', 'Warranty'],
    [t('footer.legal')]: language === 'fr'
      ? ['Politique de Confidentialité', 'Conditions d\'Utilisation', 'Cookies']
      : ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 5L5 12.5V27.5L20 35L35 27.5V12.5L20 5Z"
                  stroke="url(#footerLogoGradient)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path d="M20 5V35" stroke="url(#footerLogoGradient)" strokeWidth="2.5" />
                <path d="M5 12.5L35 27.5" stroke="url(#footerLogoGradient)" strokeWidth="2" />
                <path d="M35 12.5L5 27.5" stroke="url(#footerLogoGradient)" strokeWidth="2" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl text-white tracking-wider">ARTISAN</span>
                <span className="text-[10px] tracking-widest text-gray-400">CAMEROUN</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            <div className="mb-6">
              <h4 className="mb-3 text-white">{t('footer.newsletter')}</h4>
              <div className="flex gap-2">
                <Input
                  placeholder={t('footer.emailPlaceholder')}
                  className="bg-gray-800 border-gray-700"
                />
                <Button>
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm">
              © 2025 Artisan Cameroun. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="h-4 w-1 bg-blue-600 rounded" />
                <div className="h-4 w-1 bg-blue-700 rounded" />
                <div className="h-4 w-1 bg-blue-500 rounded" />
              </div>
              <span className="text-xs text-gray-500">{t('footer.madeIn')} ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
