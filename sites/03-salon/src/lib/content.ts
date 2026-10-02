import type { ImageMetadata } from 'astro';
import data from '../content/site.json';

export const content = data;
export type ImageRef = { alt: string; unsplashQuery: string };
export type Link = { label: string; href: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const section = (id: string): any => {
  const found = data.sections.find((s) => s.id === id);
  if (!found) throw new Error(`Missing section ${id} in site.json`);
  return found;
};

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/*.jpg', { eager: true });
const slug = (q: string) => q.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const image = (query: string): ImageMetadata => {
  const found = images[`../assets/${slug(query)}.jpg`];
  if (!found) throw new Error(`Missing image for "${query}"`);
  return found.default;
};

/** Single-page site: hrefs to unbuilt pages or [TODO] fall back to the final CTA section. */
export const link = (l: Link): Link => ({
  label: l.label,
  href: l.href.startsWith('#') ? l.href : '#cta',
});

/** Header nav labels (reference order) mapped to on-page anchors. */
export const navAnchors = ['#servicos', '#faq', '#novidades', '#faq'];
/** Footer labels (reference order) mapped to on-page anchors; external/legal pages are [TODO]. */
export const footerAnchors = ['#audience', '#novidades', '#cta', '#', '#', '#'];
