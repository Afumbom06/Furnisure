import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Heart, Rotate3D, Share2, Star } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, customization?: any) => void;
}

export function ProductDetailModal({ product, isOpen, onClose, onAddToCart }: ProductDetailModalProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customMaterial, setCustomMaterial] = useState(product?.material || 'oak');
  const [customColor, setCustomColor] = useState(product?.color || 'Natural');
  const [rotation, setRotation] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, {
      material: customMaterial,
      color: customColor,
      quantity,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 backdrop-blur-sm"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative bg-gray-50 p-8">
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-white">
                    <motion.div
                      animate={{ rotateY: rotation }}
                      transition={{ duration: 0.5 }}
                    >
                      <ImageWithFallback
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    
                    {/* 360 View Button */}
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setRotation(rotation + 90)}
                      className="absolute bottom-4 right-4"
                    >
                      <Rotate3D className="mr-2 h-4 w-4" />
                      {t('product.view360')}
                    </Button>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === index ? 'border-black' : 'border-transparent'
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col p-8">
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge>{product.category}</Badge>
                      {product.featured && <Badge variant="secondary">{t('common.featured')}</Badge>}
                    </div>
                    <h2 className="mb-2">{product.name}</h2>
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-500 text-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews.length} {t('common.reviews')})
                      </span>
                    </div>
                    <p className="mb-4 text-3xl">{product.price.toLocaleString()} FCFA</p>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  {/* Carpenter Info */}
                  <div className="mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src={product.carpenter.photo}
                        alt={product.carpenter.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm text-gray-600">{t('product.craftedBy')}</p>
                        <p className="font-medium">{product.carpenter.name}</p>
                        <p className="text-sm text-gray-500">
                          {product.carpenter.yearsExperience} {t('carpenter.experience')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Configurator */}
                  {product.customizable && (
                    <div className="mb-6 space-y-4">
                      <h3>{t('product.customize')}</h3>
                      
                      <div>
                        <label className="mb-2 block text-sm">{t('product.material')}</label>
                        <Select value={customMaterial} onValueChange={setCustomMaterial}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oak">{t('gallery.mat.oak')}</SelectItem>
                            <SelectItem value="mahogany">{t('gallery.mat.mahogany')}</SelectItem>
                            <SelectItem value="walnut">{t('gallery.mat.walnut')}</SelectItem>
                            <SelectItem value="pine">{t('gallery.mat.pine')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm">{t('product.finish')}</label>
                        <Select value={customColor} onValueChange={setCustomColor}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Natural">{t('product.finish.natural')}</SelectItem>
                            <SelectItem value="Dark Walnut">{t('product.finish.darkWalnut')}</SelectItem>
                            <SelectItem value="White Wash">{t('product.finish.whiteWash')}</SelectItem>
                            <SelectItem value="Black">{t('product.finish.black')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Dimensions */}
                  <div className="mb-6">
                    <h3 className="mb-2">{t('product.dimensions')}</h3>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="rounded-lg bg-gray-50 p-2 text-center">
                        <p className="text-gray-500">{t('product.width')}</p>
                        <p>{product.dimensions.width}cm</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-2 text-center">
                        <p className="text-gray-500">{t('product.height')}</p>
                        <p>{product.dimensions.height}cm</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-2 text-center">
                        <p className="text-gray-500">{t('product.depth')}</p>
                        <p>{product.dimensions.depth}cm</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex gap-2">
                    <Button onClick={handleAddToCart} className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t('product.addToCart')}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="mt-4 text-center text-sm text-gray-500">
                    {t('product.delivery')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
