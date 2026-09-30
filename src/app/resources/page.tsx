import Link from 'next/link';
import { Search, ArrowRight, Mail } from 'lucide-react';
import { getAllResources } from '@/lib/resources';

export const metadata = {
  title: 'Agricultural Business Resources & Guides | ScaleERP Hub',
  description: 'Expert guides on managing feed stores, wholesale distribution, inventory tracking, and comparing accounting software like Tally.',
};

export default function ResourcesHubPage() {
  const articles = getAllResources();
  
  // Destructure for Bento Grid (fallback to empty if not enough articles)
  const featuredArticle = articles[0];
  const trending1 = articles[1];
  const trending2 = articles[2];
  const remaining = articles.slice(3);

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground">
          Master Your Wholesale & Retail Operations.
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Dive into expert guides, software comparisons, and operational strategies designed specifically for India's agricultural distributors and feed store owners.
        </p>
        
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search guides, tips, and tutorials..." 
            className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-border bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg shadow-sm"
          />
        </div>
      </section>

      {/* 3. Topic Categories */}
      <section className="py-6 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {['All Articles', 'Inventory Management', 'Ledgers & Accounting', 'Software Comparisons', 'WhatsApp Automation'].map((topic, i) => (
            <button 
              key={topic}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                i === 0 
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm' 
                  : 'bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Featured Articles Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          
          {/* Card A (Large Left - Featured) */}
          {featuredArticle && (
            <Link 
              href={`/resources/${featuredArticle.slug}`}
              className="lg:col-span-8 group relative overflow-hidden rounded-lg bg-card border border-border flex flex-col hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="h-64 lg:h-3/5 w-full bg-muted/30 border-b border-border/50 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-0"></div>
                <div className="z-10 bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm max-w-md w-full flex items-center gap-4 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-2 w-3/4 bg-border rounded"></div>
                    <div className="h-2 w-1/2 bg-border rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">Business Strategy</span>
                  <h2 className="text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-2 text-lg">
                    {featuredArticle.snippet}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-primary font-medium">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          )}

          {/* Right Stack (Trending) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            
            {/* Card B (Top Right) */}
            {trending1 && (
              <Link 
                href={`/resources/${trending1.slug}`}
                className="group flex-1 rounded-lg bg-card border border-border p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase mb-2 block">Tech & Software</span>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {trending1.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {trending1.snippet}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )}

            {/* Card C (Bottom Right) */}
            {trending2 && (
              <Link 
                href={`/resources/${trending2.slug}`}
                className="group flex-1 rounded-lg bg-card border border-border p-6 flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase mb-2 block">Operations</span>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {trending2.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {trending2.snippet}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Remaining Articles */}
        {remaining.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-6 border-b border-border pb-2">Latest Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remaining.map(article => (
                <Link 
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group rounded-xl bg-card border border-border p-6 hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <h4 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.snippet}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Newsletter Lead Capture */}
      <section className="bg-navy py-24 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-lg mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Get business tips directly in your inbox.
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of wholesale brokers and retail store owners who receive our monthly insights on growing their agricultural business.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-colors"
            />
            <button 
              type="button"
              className="px-6 py-3 rounded-lg bg-white text-navy font-bold hover:bg-white/90 transition-colors shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
