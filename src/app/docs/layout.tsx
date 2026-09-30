import { getDocsNav } from '@/lib/docs';
import { DocsSidebar } from '@/components/docs/DocsSidebar';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const categories = getDocsNav();
  
  return (
    <div className="flex flex-col md:flex-row w-full mx-auto min-h-screen bg-background">
      <DocsSidebar categories={categories} />
      <main className="flex-1 min-w-0 p-6 md:p-12 lg:p-16 max-w-5xl">
        {children}
      </main>
    </div>
  );
}
