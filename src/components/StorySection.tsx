import { motion } from 'motion/react';
import { Hammer, Users, Leaf, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function StorySection() {
  const { t } = useLanguage();

  const stories = [
    {
      title: t('story.wood.title'),
      description: t('story.wood.desc'),
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1737534884876-426964ba462a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2MjI2OTcyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      stat: '100%',
      statLabel: t('story.wood.stat'),
    },
    {
      title: t('story.artisan.title'),
      description: t('story.artisan.desc'),
      icon: Users,
      image: 'https://images.unsplash.com/photo-1728362369426-1647a7fd09d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b3Jrc2hvcCUyMHdvb2R3b3JraW5nfGVufDF8fHx8MTc2MjI2OTcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      stat: '25+',
      statLabel: t('story.artisan.stat'),
    },
    {
      title: t('story.sustainable.title'),
      description: t('story.sustainable.desc'),
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1728034261566-cd6ab5d657b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdvb2QlMjBtYXRlcmlhbHxlbnwxfHx8fDE3NjIyNjk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stat: '15',
      statLabel: t('story.sustainable.stat'),
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-24">
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-blue-400 via-blue-500 to-transparent opacity-30" />
      <div className="absolute right-0 top-1/4 h-px w-1/4 bg-gradient-to-l from-blue-600 to-transparent opacity-30" />
      
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
          >
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-sm text-blue-700">{t('story.badge')}</span>
          </motion.div>
          <h2 className="mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
            {t('story.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t('story.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          {stories.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                <div className={`flex flex-col justify-center ${isEven ? '' : 'md:col-start-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-0.5"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </motion.div>

                  <h3 className="mb-4 text-3xl">{story.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {story.description}
                  </p>

                  {/* Stat Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-baseline gap-3"
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-5xl text-transparent">
                      {story.stat}
                    </span>
                    <span className="text-gray-500">{story.statLabel}</span>
                  </motion.div>
                </div>

                <div className={`relative ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-20 blur-2xl transition-opacity group-hover:opacity-30" />

                    {/* Blue Accent */}
                    <div className={`absolute ${isEven ? '-right-4 top-8' : '-left-4 top-8'} flex flex-col gap-2`}>
                      <div className="h-16 w-2 rounded-full bg-blue-600" />
                      <div className="h-16 w-2 rounded-full bg-blue-700" />
                      <div className="h-16 w-2 rounded-full bg-blue-500" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-12 shadow-xl">
            <h3 className="mb-4 text-3xl">{t('story.cta.title')}</h3>
            <p className="mb-8 text-lg text-gray-600">
              {t('story.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#gallery"
                className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-8 text-white shadow-lg hover:shadow-xl"
              >
                {t('story.cta.button')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
