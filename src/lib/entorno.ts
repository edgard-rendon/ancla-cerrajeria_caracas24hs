/**
 * Modo "vista previa": la web se publica para enseñársela al cliente antes de que
 * sea oficial. Se activa con la variable de entorno VISTA_PREVIA=true en el
 * proveedor de hosting (Cloudflare, Vercel, Netlify) o en un archivo .env.
 *
 * En vista previa:
 * - Los buscadores no la indexan (meta robots + robots.txt).
 * - Se muestra una barra discreta que la identifica como propuesta.
 */
export const vistaPrevia = import.meta.env.VISTA_PREVIA === 'true';
