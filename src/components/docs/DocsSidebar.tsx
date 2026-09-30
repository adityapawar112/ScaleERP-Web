'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DocCategory } from '@/lib/docs';
import { ChevronDown, ChevronRight } from 'lucide-react';

export function DocsSidebar({ categories }: { categories: DocCategory[] }) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newOpenState = { ...openCategories };
    categories.forEach((category) => {
      // Open if it's the active category or one of its items is active
      const isActive = pathname === `/docs/${category.slug}` || category.items.some(item => pathname === item.path);
      if (isActive) {
        newOpenState[category.slug] = true;
      }
    });
    setOpenCategories(newOpenState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, categories]);

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <aside className="w-full md:w-72 flex-shrink-0 md:border-r border-border md:min-h-screen">
      <nav className="p-6 md:sticky md:top-20 md:max-h-[calc(100vh-5rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="mb-8">
          <Link href="/docs" className="block group">
            <h2 className="text-xl font-heading font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">ScaleERP Docs</h2>
            <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">Operator SOPs & Guides</p>
          </Link>
        </div>
        <div className="space-y-4">
          {categories.map((category) => {
            const isCategoryActive = pathname === `/docs/${category.slug}`;
            const isOpen = openCategories[category.slug];
            
            return (
              <div key={category.slug} className="mb-2">
                <button 
                  onClick={() => toggleCategory(category.slug)}
                  className={`w-full flex items-center justify-between py-2 text-left transition-colors ${isCategoryActive ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  <h4 className="font-heading font-medium text-sm tracking-wide uppercase">
                    {category.title}
                  </h4>
                  {isOpen ? <ChevronDown className="w-4 h-4 opacity-50" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
                </button>
                
                {isOpen && (
                  <ul className="space-y-1 mt-2 pl-2 border-l border-border/50 ml-1">
                    <li>
                      <Link
                        href={`/docs/${category.slug}`}
                        className={`block px-3 py-1.5 -ml-3 text-sm rounded-md transition-colors ${
                          isCategoryActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        Category Overview
                      </Link>
                    </li>
                    
                    {category.items.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={item.path}
                            className={`block px-3 py-1.5 -ml-3 text-sm rounded-md transition-colors ${
                              isActive
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
