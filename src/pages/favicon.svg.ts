import type { APIRoute } from 'astro';

/** Favicon: la llave sobre el sol naranja del encabezado. Se genera al compilar. */
export const GET: APIRoute = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#FF7A00"/>
  <g fill="none" stroke="#000" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(8 8) scale(2)">
    <circle cx="7.5" cy="12" r="4"/><path d="M11.5 12H21M18 12v3M15 12v2"/>
  </g>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
