import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getResourceBySlug, getAllResources } from '@/lib/resources';
import { MarkdownRenderer } from '@/components/docs/MarkdownRenderer';

export function generateStaticParams() {
  const articles = getAllResources();
  return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getResourceBySlug(params.slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }
  
  return {
    title: `${article.title} | ScaleERP Resources`,
    description: article.snippet
  };
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getResourceBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Strip the title from the markdown content so we don't render it twice 
  // (since we render it in the custom hero section)
  const contentWithoutTitle = article.content.replace(/^#\s+(.+)$/m, '').trim();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Blog Article Hero */}
      <div className="bg-muted/30 border-b border-border pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                OF
              </div>
              <span className="font-medium text-foreground">ScaleERP Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>August 2026</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <MarkdownRenderer content={contentWithoutTitle} />
      </article>

      {/* Footer CTA */}
      <section className="max-w-3xl mx-auto mb-24 px-6">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">Ready to scale your store?</h3>
            <p className="text-muted-foreground">Join hundreds of distributors running on ScaleERP.</p>
          </div>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
