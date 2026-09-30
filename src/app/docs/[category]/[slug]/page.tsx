import { notFound } from 'next/navigation';
import { getDocContent, getDocsNav } from '@/lib/docs';
import { MarkdownRenderer } from '@/components/docs/MarkdownRenderer';

export function generateStaticParams() {
  const categories = getDocsNav();
  const params: { category: string; slug: string }[] = [];
  
  categories.forEach(category => {
    category.items.forEach(item => {
      params.push({ category: category.slug, slug: item.slug });
    });
  });
  
  return params;
}

export async function generateMetadata(props: { params: Promise<{ category: string, slug: string }> }) {
  const params = await props.params;
  const doc = getDocContent(params.category, params.slug);
  
  if (!doc) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${doc.title} - ScaleERP Docs`,
    description: `Documentation for ${doc.title}`
  };
}

export default async function DocPage(props: { params: Promise<{ category: string, slug: string }> }) {
  const params = await props.params;
  const doc = getDocContent(params.category, params.slug);
  
  if (!doc) {
    notFound();
  }
  
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <MarkdownRenderer content={doc.content} />
    </article>
  );
}
