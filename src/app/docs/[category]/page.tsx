import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDocsNav } from '@/lib/docs';
import { FileText, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  const categories = getDocsNav();
  return categories.map(category => ({ category: category.slug }));
}

export async function generateMetadata(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const categories = getDocsNav();
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }
  
  return {
    title: `${category.title} - ScaleERP Docs`,
    description: `Browse all articles in the ${category.title} category.`
  };
}

export default async function CategoryIndex(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const categories = getDocsNav();
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-heading font-bold mb-4 tracking-tight">{category.title}</h1>
        <p className="text-xl text-muted-foreground">
          Browse all {category.items.length} articles in this category.
        </p>
      </div>

      <div className="space-y-4">
        {category.items.map((item, index) => (
          <Link 
            key={item.slug} 
            href={item.path}
            className="group flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-medium text-sm">
                {index + 1}
              </div>
              <div>
                <h2 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Read article
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
