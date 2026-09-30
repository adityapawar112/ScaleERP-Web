import fs from 'fs';
import path from 'path';

export interface ResourceArticle {
  title: string;
  slug: string;
  snippet: string;
  content: string;
}

const CANDIDATE_RESOURCES_DIRS = [
  path.join(process.cwd(), 'docs', 'scaleerp-web-content', 'website-structure', 'resources', 'articles'),
  path.join(process.cwd(), 'memory-bank', 'scaleerp-web', 'website-structure', 'resources', 'articles'),
];
const RESOURCES_DIR = CANDIDATE_RESOURCES_DIRS.find(dir => fs.existsSync(dir)) || CANDIDATE_RESOURCES_DIRS[0];

function extractTitleFromMarkdown(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function extractSnippet(content: string): string {
  // Extract the first italicized text or first paragraph after the title
  const match = content.match(/^\*(.+?)\*$/m) || content.match(/^([^#\n].+?)$/m);
  return match ? match[1].trim() : 'Read this article to learn more.';
}

export function getAllResources(): ResourceArticle[] {
  if (!fs.existsSync(RESOURCES_DIR)) return [];

  const files = fs.readdirSync(RESOURCES_DIR).filter(file => file.endsWith('.md'));
  
  return files.map(fileName => {
    const filePath = path.join(RESOURCES_DIR, fileName);
    const content = fs.readFileSync(filePath, 'utf-8');
    const slug = fileName.replace(/\.md$/, '');
    
    return {
      title: extractTitleFromMarkdown(content, slug),
      slug,
      snippet: extractSnippet(content),
      content
    };
  });
}

export function getResourceBySlug(slug: string): ResourceArticle | null {
  if (!fs.existsSync(RESOURCES_DIR)) return null;
  
  const filePath = path.join(RESOURCES_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  return {
    title: extractTitleFromMarkdown(content, slug),
    slug,
    snippet: extractSnippet(content),
    content
  };
}
