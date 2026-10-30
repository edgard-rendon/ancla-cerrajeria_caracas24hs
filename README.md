# ancla-cerrajeria_caracas24hs

Web de **Cerrajería Caracas 24hs**, cerrajería del hogar y automotriz con atención a domicilio las 24 horas en toda Caracas y tienda en Baruta. Proyecto de **Ancla**.

La página está pensada para alguien con una emergencia: botones de llamar y WhatsApp siempre a mano, casos rápidos con el mensaje ya escrito y un formulario que arma la solicitud (servicio, zona, urgencia y ubicación) y la abre en WhatsApp.

- **Producción:** `https://cerrajeriacaracas24h.com` *(pendiente: confirmar dominio)*
- **Repositorio:** privado

---

## Stack

| Pieza | Para qué |
| --- | --- |
| [Astro](https://astro.build) 7 | Sitio estático. Componentes en servidor y HTML final casi sin JavaScript. |
| TypeScript 6 (`strict`) | Tipado del contenido del cliente y del script del formulario. |
| `@astrojs/check` | Revisión de tipos de los `.astro` antes de compilar. |
| `astro:assets` | Optimización de la foto de la tienda (WebP y tamaños responsivos). |
| [Fontsource](https://fontsource.org) | Anton (titulares) y Archivo (texto), servidas desde el propio sitio. |

Los estilos son CSS propio: los colores y piezas comunes en `src/styles/global.css`, y cada componente trae sus estilos en su bloque `<style>` (Astro los limita a ese componente).

## Puesta en marcha

Requiere **Node.js 22.23.4 o superior**.

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga al guardar. |
| `npm run build` | Revisa tipos (`astro check`) y genera el sitio en `dist/`. |
| `npm run preview` | Sirve `dist/` para probar la versión compilada. |

## Modo vista previa

Para enseñarle la web al cliente antes de que sea oficial, se publica con la variable de entorno `VISTA_PREVIA=true`. En ese modo:

- Aparece arriba una barra: "Vista previa · Propuesta de diseño para Cerrajería Caracas 24hs. Esta todavía no es su web oficial."
- La página lleva `noindex, nofollow` y `robots.txt` bloquea a los buscadores.

Para probarlo en tu computadora, copia `.env.example` como `.env`. Al publicar la web oficial, quita la variable (o ponla en `false`).

`SITE_URL` sirve para la URL pública mientras no exista el dominio final (por ejemplo, la de `*.workers.dev`), para que la canónica y la imagen al compartir apunten bien.

## Estructura

```
src/
├── config/
│   ├── cliente.ts      ← todo el contenido del negocio (textos, número, zonas, servicios…)
│   └── tipos.ts        ← la forma de ese contenido
├── components/
│   ├── Navbar.astro, Hero.astro, Casos.astro, Servicios.astro, Pasos.astro,
│   │   Zonas.astro, Trabajos.astro, Tienda.astro, Testimonios.astro,
│   │   Solicitud.astro, Footer.astro, BarraMovil.astro
│   ├── escena/
│   │   ├── Escena.astro     ← sol, Ávila en papel cortado, Humboldt y silueta de Caracas
│   │   └── Flotantes.astro  ← Codiplug, llave de carro y llaves de contacto flotando
│   └── ui/              ← Icono, Foto y Cresta (borde de montaña entre secciones)
├── layouts/Base.astro  ← <head>, SEO, datos estructurados y barra de vista previa
├── lib/                ← entorno (vista previa), contacto (enlaces de WhatsApp y teléfono), imágenes
├── pages/              ← index, robots.txt, sitemap.xml y favicon
├── styles/             ← global.css y fuentes
└── assets/fotos/       ← fotos del negocio
```

Para cambiar un texto, un precio o una zona, edita solo `src/config/cliente.ts`.

## Fotos

Van en `src/assets/fotos/` y se refieren por nombre desde `cliente.ts`. Si falta una, se muestra un recuadro con su descripción.

- `tienda-letrero.jpg`: la foto vertical del letrero luminoso de la tienda. También es la imagen al compartir el enlace.

## La escena de la portada

Es un SVG hecho a mano, sin imágenes. De atrás hacia adelante: el sol con el 24, el Ávila en tres capas facetadas con el Hotel Humboldt asomado en la cima, dos capas de edificios de relleno y, al frente, los emblemáticos (Catedral, Capitolio, Parque Central, Torres del Silencio, obelisco de Altamira y Torre Británica). Las ventanas se encienden al cargar.

Los objetos flotantes van en dibujos aparte para que no crezcan en pantallas anchas. Todas las animaciones se apagan si el visitante tiene activado "reducir movimiento".

## Despliegue

Sitio 100 % estático (`dist/`). Está listo para Cloudflare Workers:

```bash
npm run build
npx wrangler deploy
```

Configura `VISTA_PREVIA` y `SITE_URL` en el panel del proveedor.

## Pendientes antes de publicar

Todo lo que está entre corchetes en `src/config/cliente.ts`:

- Precios de referencia y servicios por confirmar.
- Zonas y tiempos de llegada.
- Dirección exacta, horario y enlace de Google Maps de la tienda.
- Testimonios reales y miniaturas de los videos.
- Dominio definitivo.
