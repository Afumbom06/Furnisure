import { motion } from 'motion/react';
import { Star, MapPin, Award } from 'lucide-react';
import { Carpenter } from '../types';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface CarpenterSectionProps {
  carpenters: Carpenter[];
  onViewProfile: (carpenter: Carpenter) => void;
}

export function CarpenterSection({ carpenters, onViewProfile }: CarpenterSectionProps) {
  const { t } = useLanguage();
  return (
    <section id="carpenters" className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4">{t('carpenter.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t('carpenter.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {carpenters.map((carpenter, index) => (
            <motion.div
              key={carpenter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={carpenter.photo}
                    alt={carpenter.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span>{carpenter.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2">{carpenter.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {carpenter.specialty}
                  </Badge>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {carpenter.bio}
                  </p>

                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="h-4 w-4" />
                      <span>{carpenter.yearsExperience} {t('carpenter.experience')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{carpenter.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => onViewProfile(carpenter)}
                    variant="outline"
                    className="w-full"
                  >
                    {t('carpenter.viewProfile')}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
