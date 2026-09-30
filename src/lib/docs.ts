import fs from 'fs';
import path from 'path';

export interface DocItem {
  title: string;
  slug: string;
  path: string;
}

export interface DocCategory {
  title: string;
  slug: string;
  order: number;
  items: DocItem[];
}

const CANDIDATE_DOCS_DIRS = [
  path.join(process.cwd(), 'docs', 'scaleerp-web-content', 'website-structure', 'docs'),
  path.join(process.cwd(), 'memory-bank', 'scaleerp-web', 'website-structure', 'docs'),
];
const DOCS_DIR = CANDIDATE_DOCS_DIRS.find(dir => fs.existsSync(dir)) || CANDIDATE_DOCS_DIRS[0];

function extractTitleFromMarkdown(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function formatCategoryTitle(dirName: string): string {
  // e.g., "1-getting-started" -> "Getting Started"
  const withoutPrefix = dirName.replace(/^\d+-/, '');
  return withoutPrefix
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getDocsNav(): DocCategory[] {
  if (!fs.existsSync(DOCS_DIR)) return [];

  const categories = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      const dirName = dirent.name;
      const orderMatch = dirName.match(/^(\d+)-/);
      const order = orderMatch ? parseInt(orderMatch[1], 10) : 99;
      
      const categorySlug = dirName.replace(/^\d+-/, '');
      const categoryPath = path.join(DOCS_DIR, dirName);
      
      const items = fs.readdirSync(categoryPath)
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
          const filePath = path.join(categoryPath, fileName);
          const content = fs.readFileSync(filePath, 'utf-8');
          const slug = fileName.replace(/\.md$/, '');
          
          return {
            title: extractTitleFromMarkdown(content, slug),
            slug,
            path: `/docs/${categorySlug}/${slug}`
          };
        });

      return {
        title: formatCategoryTitle(dirName),
        slug: categorySlug,
        order,
        items
      };
    });

  return categories.sort((a, b) => a.order - b.order);
}

export function getDocContent(categorySlug: string, docSlug: string): { content: string; title: string } | null {
  if (!fs.existsSync(DOCS_DIR)) return null;
  
  const dirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
  // Find directory that matches `*-categorySlug`
  const categoryDir = dirs.find(d => {
    if (!d.isDirectory()) return false;
    const cleanSlug = d.name.replace(/^\d+-/, '');
    return cleanSlug === categorySlug;
  });
  
  if (!categoryDir) return null;
  
  const filePath = path.join(DOCS_DIR, categoryDir.name, `${docSlug}.md`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const title = extractTitleFromMarkdown(content, docSlug);
  
  return { content, title };
}
