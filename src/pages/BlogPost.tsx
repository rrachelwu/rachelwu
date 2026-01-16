import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getPostBySlug } from '@/data/posts';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'zh') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const content = language === 'zh' ? post.content : post.contentEn;

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <article className="container max-w-3xl">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('返回博客', 'Back to Blog')}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'zh' ? post.title : post.titleEn}
          </h1>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mb-12 rounded-xl overflow-hidden bg-muted aspect-[2/1]">
          <img
            src={post.coverImage}
            alt={language === 'zh' ? post.title : post.titleEn}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('返回博客', 'Back to Blog')}
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
