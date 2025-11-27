import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const { t } = useLanguage();
  return (
    <section id="blog" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4">{t('blog.title')}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute left-4 top-4">{post.category}</Badge>
                </div>

                <div className="flex flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} {t('blog.readTime')}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 line-clamp-2 group-hover:text-gray-600">
                    {post.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{t('blog.by')} {post.author}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            {t('blog.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
