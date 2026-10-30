import type { ImageMetadata } from 'astro';

/**
 * Todas las fotos de `src/assets/fotos/`, indexadas por nombre de archivo.
 * El contenido del cliente se refiere a una foto por su nombre ("tienda-letrero.jpg")
 * y Astro la optimiza (tamaño y formato) al compilar.
 */
const fotos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/fotos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const porNombre = new Map<string, ImageMetadata>(
  Object.entries(fotos).map(([ruta, modulo]) => [ruta.split('/').pop() ?? ruta, modulo.default]),
);

/** Devuelve la foto por nombre, o `undefined` si no existe (y avisa en consola). */
export function buscarFoto(nombre?: string): ImageMetadata | undefined {
  if (!nombre) return undefined;
  const foto = porNombre.get(nombre);
  if (!foto) {
    console.warn(`[ancla] No encontré la foto "${nombre}" en src/assets/fotos/. Se mostrará un recuadro de reemplazo.`);
  }
  return foto;
}
