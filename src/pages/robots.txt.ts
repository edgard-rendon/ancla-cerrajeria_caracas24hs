import type { APIRoute } from 'astro';
import { vistaPrevia } from '../lib/entorno';

export const GET: APIRoute = ({ site }) => {
  // En vista previa, ningún buscador debe indexar la web.
  const lineas = vistaPrevia ? ['User-agent: *', 'Disallow: /'] : ['User-agent: *', 'Allow: /'];
  if (site && !vistaPrevia) lineas.push(`Sitemap: ${new URL('/sitemap.xml', site).href}`);
  return new Response(lineas.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
