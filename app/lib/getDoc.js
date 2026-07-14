// Server-only: reads a plan document from /content at build time.
import fs from 'node:fs';
import path from 'node:path';
import { ALL_DOCS } from './docs';

export function getDoc(slug) {
  const doc = ALL_DOCS.find((d) => d.slug === slug);
  if (!doc) return null;
  const filePath = path.join(process.cwd(), 'content', doc.file);
  const content = fs.readFileSync(filePath, 'utf8');
  return { ...doc, content };
}
