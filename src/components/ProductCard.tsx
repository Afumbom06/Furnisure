import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group relative overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              size="icon"
              variant="secondary"
              onClick={() => onQuickView(product)}
              className="h-10 w-10 rounded-full"
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={() => onAddToCart(product)}
              className="h-10 w-10 rounded-full"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Badges */}
          {product.featured && (
            <Badge className="absolute left-3 top-3">{t('common.featured')}</Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute right-3 top-3">
              {t('common.outOfStock')}
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-1 flex items-center justify-between">
            <Badge variant="outline">{product.category}</Badge>
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{product.rating}</span>
            </span>
          </div>
          <h3 className="mb-1">{product.name}</h3>
          <p className="mb-2 line-clamp-2 text-sm text-gray-600">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gray-900">{product.price.toLocaleString()} FCFA</span>
            <span className="text-xs text-gray-500">{t('blog.by')} {product.carpenter.name}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
