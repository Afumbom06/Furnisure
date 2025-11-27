import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const { t } = useLanguage();

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Video/Image Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjIxOTMzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        
        {/* Video Background (uncomment to use video instead of image) */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video> */}

        {/* Deep Blue Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-900/60" />
      </motion.div>

      {/* Decorative Elements - Deep Blue Accents */}
      <div className="absolute left-0 top-1/4 h-1 w-32 bg-gradient-to-r from-blue-400 to-transparent opacity-60" />
      <div className="absolute right-0 top-1/3 h-1 w-40 bg-gradient-to-l from-blue-500 to-transparent opacity-60" />
      <div className="absolute bottom-1/3 left-0 h-1 w-24 bg-gradient-to-r from-blue-300 to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white"
            >
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 backdrop-blur-sm"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                <span className="text-sm tracking-wide">{t('hero.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
              >
                {t('hero.title1')}
                <br />
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text">
                  {t('hero.title2')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 max-w-lg text-lg text-blue-100"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToGallery}
                  className="group h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-8 text-lg hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  {t('hero.explore')}
                  <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-14 border-2 border-blue-400/50 bg-blue-500/20 px-8 text-lg text-white backdrop-blur-sm hover:bg-blue-500/30"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {t('hero.video')}
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12 grid grid-cols-3 gap-8 border-t border-blue-400/20 pt-8"
              >
                <div>
                  <div className="mb-1 text-3xl">500+</div>
                  <div className="text-sm text-blue-200">{t('hero.stat1')}</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl">25+</div>
                  <div className="text-sm text-blue-200">{t('hero.stat2')}</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl">15 {t('hero.stat3').toLowerCase()}</div>
                  <div className="text-sm text-blue-200">{t('hero.stat3')}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="rounded-3xl border border-blue-400/30 bg-blue-950/40 p-8 backdrop-blur-xl">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 3L3 7.5V16.5L12 21L21 16.5V7.5L12 3Z"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path d="M12 3V21" stroke="white" strokeWidth="2" />
                        <path d="M3 7.5L21 16.5" stroke="white" strokeWidth="2" />
                        <path d="M21 7.5L3 16.5" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white">{t('hero.certification')}</h3>
                      <p className="text-sm text-blue-300">{t('hero.quality')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-blue-900/30 p-4">
                      <span className="text-blue-100">{t('hero.premium')}</span>
                      <span className="text-blue-400">✓</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-900/30 p-4">
                      <span className="text-blue-100">{t('hero.handmade')}</span>
                      <span className="text-blue-400">✓</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-900/30 p-4">
                      <span className="text-blue-100">{t('hero.delivery')}</span>
                      <span className="text-blue-400">✓</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-700/20 blur-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-blue-200/60 tracking-widest">{t('hero.scroll')}</span>
          <ArrowDown className="h-6 w-6 text-blue-200/60" />
        </div>
      </motion.div>
    </section>
  );
}
