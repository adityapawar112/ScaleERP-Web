import Link from 'next/link';
import { getDocsNav } from '@/lib/docs';
import { BookOpen, Folder } from 'lucide-react';

export default function DocsIndex() {
  const categories = getDocsNav();

  return (
    <div className="max-w-4xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4 tracking-tight">ScaleERP Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the operator standard operating procedures and guides. Select a category below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            href={`/docs/${category.slug}`}
            className="group flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                <Folder className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                {category.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 flex-1">
              Explore {category.items.length} articles in this section.
            </p>
            <div className="flex flex-col gap-2">
              {category.items.slice(0, 3).map((item) => (
                <div key={item.slug} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <BookOpen className="w-4 h-4 opacity-50" />
                  <span className="truncate">{item.title}</span>
                </div>
              ))}
              {category.items.length > 3 && (
                <div className="text-sm text-primary mt-2 font-medium">
                  + {category.items.length - 3} more articles
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
