import { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductGalleryProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductGallery({ products, onQuickView, onAddToCart }: ProductGalleryProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesMaterial = selectedMaterial === 'all' || product.material === selectedMaterial;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block">{t('gallery.category')}</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('gallery.cat.all')}</SelectItem>
            <SelectItem value="chair">{t('gallery.cat.chair')}</SelectItem>
            <SelectItem value="table">{t('gallery.cat.table')}</SelectItem>
            <SelectItem value="bed">{t('gallery.cat.bed')}</SelectItem>
            <SelectItem value="wardrobe">{t('gallery.cat.wardrobe')}</SelectItem>
            <SelectItem value="sofa">{t('gallery.cat.sofa')}</SelectItem>
            <SelectItem value="desk">{t('gallery.cat.desk')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block">{t('gallery.material')}</label>
        <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('gallery.mat.all')}</SelectItem>
            <SelectItem value="oak">{t('gallery.mat.oak')}</SelectItem>
            <SelectItem value="mahogany">{t('gallery.mat.mahogany')}</SelectItem>
            <SelectItem value="walnut">{t('gallery.mat.walnut')}</SelectItem>
            <SelectItem value="pine">{t('gallery.mat.pine')}</SelectItem>
            <SelectItem value="metal">{t('gallery.mat.metal')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="mb-2 block">
          {t('gallery.price')}: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} FCFA
        </label>
        <Slider
          min={0}
          max={1000000}
          step={25000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
      </div>
    </div>
  );

  return (
    <section id="gallery" className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-4">{t('gallery.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 md:max-w-md">
            <Input
              placeholder={t('gallery.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">{t('gallery.sort.featured')}</SelectItem>
                <SelectItem value="price-asc">{t('gallery.sort.asc')}</SelectItem>
                <SelectItem value="price-desc">{t('gallery.sort.desc')}</SelectItem>
                <SelectItem value="rating">{t('gallery.sort.rating')}</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  {t('gallery.filters')}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{t('gallery.filters')}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden w-64 md:block">
            <div className="sticky top-24 rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4">{t('gallery.filters')}</h3>
              <FilterPanel />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center text-gray-500">
                {t('gallery.noProducts')}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
