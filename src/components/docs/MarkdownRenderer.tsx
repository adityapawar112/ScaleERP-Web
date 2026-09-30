'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MediaPlaceholder } from './MediaPlaceholder';
import { JargonTooltip } from '@/components/JargonTooltip';
import { TooltipProvider } from '@/components/ui/tooltip';

const JARGON_DICTIONARY: Record<string, string> = {
  "hardware-bound": "Locked to your specific computer and does not require the internet to verify.",
  "device fingerprint": "A unique identifier representing your computer's exact hardware components.",
  "air-gapped": "A security measure where a computer network is completely isolated from the internet.",
  "ledger": "A digital or physical book used to record financial transactions.",
  "ledgers": "A digital or physical book used to record financial transactions.",
  "rsa": "A highly secure cryptographic method tied specifically to your physical device.",
  "sqlite": "A high-performance local database system.",
  "godown": "A warehouse or storage facility for goods.",
  "godowns": "A warehouse or storage facility for goods.",
  "offline-first": "Works without an active internet connection by saving data locally on your device."
};

function replaceJargonInString(text: string): React.ReactNode[] | string {
  const keys = Object.keys(JARGON_DICTIONARY);
  keys.sort((a, b) => b.length - a.length);
  
  const regex = new RegExp(`\\b(${keys.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  
  if (parts.length === 1) return text;
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    if (JARGON_DICTIONARY[lowerPart]) {
      return (
        <JargonTooltip key={index} explanation={JARGON_DICTIONARY[lowerPart]}>
          {part}
        </JargonTooltip>
      );
    }
    return part;
  });
}

function processTextNodes(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return replaceJargonInString(children);
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => <React.Fragment key={i}>{processTextNodes(child)}</React.Fragment>);
  }
  if (React.isValidElement(children)) {
    const props = (children.props || {}) as Record<string, any>;
    return React.cloneElement(
      children as React.ReactElement<any>,
      props,
      processTextNodes(props.children) as any
    );
  }
  return children;
}

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <TooltipProvider>
      <div className="prose prose-lg dark:prose-invert prose-headings:font-heading max-w-3xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ node, children, ...props }) => {
              return <p {...props}>{processTextNodes(children)}</p>;
            },
            li: ({ node, children, ...props }) => {
              return <li {...props}>{processTextNodes(children)}</li>;
            },
            blockquote: (props) => {
              const { node, children, ...rest } = props;
              
              const extractText = (element: any): string => {
                if (typeof element === 'string') return element;
                if (Array.isArray(element)) return element.map(extractText).join('');
                if (element && element.props && element.props.children) {
                  return extractText(element.props.children);
                }
                return '';
              };
              
              const textContent = extractText(children);
              
              if (textContent.includes('📸') && textContent.includes('Screenshot')) {
                const match = textContent.match(/\[(.*?)\]/);
                const description = match ? match[1] : textContent.replace(/📸.*?Screenshot Placement:?/i, '').trim();
                
                return <MediaPlaceholder description={description} type="image" />;
              }
              
              return <blockquote {...rest}>{processTextNodes(children)}</blockquote>;
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </TooltipProvider>
  );
}
