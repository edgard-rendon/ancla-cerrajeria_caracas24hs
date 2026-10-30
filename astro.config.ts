import { defineConfig } from 'astro/config';
import { cliente } from './src/config/cliente';

// Variables de entorno del proveedor de hosting (opcionales):
// - SITE_URL: URL pública cuando no es el dominio final (p. ej. una vista previa en *.workers.dev).
// - VISTA_PREVIA=true: no indexar en buscadores y mostrar la barra de "vista previa".
const sitio = process.env.SITE_URL || cliente.seo.url;
const vistaPrevia = process.env.VISTA_PREVIA === 'true' ? 'true' : 'false';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: sitio,
  vite: {
    define: {
      'import.meta.env.VISTA_PREVIA': JSON.stringify(vistaPrevia),
    },
  },
});
