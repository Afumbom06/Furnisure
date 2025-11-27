import { motion } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const { t } = useLanguage();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 15000;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t('cart.title')} ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
            <h3 className="mb-2">{t('cart.empty')}</h3>
            <p className="mb-6 text-gray-600">{t('cart.emptyDesc')}</p>
            <Button onClick={onClose}>{t('cart.continue')}</Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4"
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <ImageWithFallback
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="line-clamp-1">{item.product.name}</h4>
                          <p className="text-sm text-gray-600">
                            ${item.product.price.toLocaleString()}
                          </p>
                          {item.customization && (
                            <p className="text-xs text-gray-500">
                              {item.customization.material} • {item.customization.color}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Summary */}
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('cart.subtotal')}</span>
                  <span>{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('cart.shipping')}</span>
                  <span>{shipping === 0 ? t('cart.free') : `${shipping.toLocaleString()} FCFA`}</span>
                </div>
                {subtotal < 500000 && (
                  <p className="text-xs text-gray-500">
                    {t('cart.add')} {(500000 - subtotal).toLocaleString()} FCFA {t('cart.freeShipping')}
                  </p>
                )}
              </div>

              <Separator />

              <div className="flex justify-between">
                <span>{t('cart.total')}</span>
                <span className="text-xl">{total.toLocaleString()} FCFA</span>
              </div>

              <Button onClick={onCheckout} className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800" size="lg">
                {t('cart.checkout')}
              </Button>

              <Button onClick={onClose} variant="outline" className="w-full">
                {t('cart.continue')}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
