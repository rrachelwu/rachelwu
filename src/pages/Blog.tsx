import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { posts } from '@/data/posts';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        <SectionTitle
          title={t('博客', 'Blog')}
          subtitle={t(
            '分享技术见解、项目经验与行业思考',
            'Sharing technical insights, project experiences, and industry thoughts'
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              {t('暂无文章', 'No posts yet')}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
