import type { APIRoute } from 'astro';

/** Sitemap con las páginas del sitio. */
export const GET: APIRoute = ({ site }) => {
  const rutas = ['/'];
  const urls = rutas.map((ruta) => `  <url><loc>${site ? new URL(ruta, site).href : ruta}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
