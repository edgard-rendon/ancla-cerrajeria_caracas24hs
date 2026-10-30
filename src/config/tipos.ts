/**
 * Forma del contenido de un negocio de Ancla.
 * Todo lo que cambia de un cliente a otro se llena en `src/config/cliente.ts`.
 */

/** Iconos disponibles en `src/components/ui/Icono.astro`. */
export type NombreIcono =
  | 'casa'
  | 'carro'
  | 'llave-carro'
  | 'candado'
  | 'whatsapp'
  | 'telefono'
  | 'ubicacion'
  | 'reloj'
  | 'bolsa'
  | 'llave';

/**
 * Una foto. `src` es el nombre del archivo dentro de `src/assets/fotos/`.
 * Si falta `src` o el archivo, se muestra un recuadro con el texto de `alt`.
 */
export interface Foto {
  src?: string;
  alt: string;
}

export interface Enlace {
  texto: string;
  href: string;
}

/** Caso de emergencia: un botón que abre WhatsApp con el mensaje ya escrito. */
export interface Caso {
  icono: NombreIcono;
  titulo: string;
  detalle: string;
  mensaje: string;
}

export interface LineaServicio {
  nombre: string;
  /** Precio de referencia o nota corta. */
  nota: string;
}

export interface GrupoServicios {
  icono: NombreIcono;
  titulo: string;
  items: LineaServicio[];
}

export interface Paso {
  titulo: string;
  descripcion: string;
}

export interface Zona {
  nombre: string;
  /** Marca la zona donde está la tienda. */
  base?: boolean;
  nota?: string;
}

export interface Video {
  url: string;
  titulo: string;
  /** Vistas, ya escritas: "6,8 M". */
  vistas?: string;
  miniatura?: Foto;
}

export interface Testimonio {
  texto: string;
  autor: string;
  detalle: string;
}

export interface Encabezado {
  titulo: string;
  descripcion?: string;
}

export interface Cliente {
  marca: {
    nombre: string;
    /** Nombre corto para el encabezado y el pie: "Cerrajería Caracas". */
    corto: string;
    lema: string;
    ciudad: string;
    desde?: number;
  };

  seo: {
    titulo: string;
    descripcion: string;
    /** URL pública definitiva, con https y sin barra final. */
    url: string;
    /** Foto (de `src/assets/fotos/`) para cuando se comparte el enlace. */
    imagen?: string;
    /** Tipo de negocio para Google (schema.org). */
    tipoNegocio: string;
  };

  contacto: {
    /** WhatsApp en formato internacional, sin "+" ni espacios. */
    whatsapp: string;
    /** Teléfono para llamar, en formato internacional con "+". */
    telefono: string;
    /** Cómo se muestra el número en la página. */
    telefonoVisible: string;
    /** Mensaje por defecto de los botones de WhatsApp. */
    saludo: string;
  };

  redes: {
    instagram?: string;
    tiktok?: string;
    threads?: string;
  };

  navegacion: Enlace[];

  hero: {
    sello: string;
    /** Titular en dos partes: la primera en negro, la segunda en claro. */
    titulo: [string, string];
    subtitulo: string;
    ctaWhatsapp: string;
  };

  casos: Encabezado & { items: Caso[] };

  servicios: Encabezado & { grupos: GrupoServicios[] };

  pasos: Encabezado & { items: Paso[] };

  zonas: Encabezado & { items: Zona[]; nota?: string };

  trabajos: Encabezado & {
    videos: Video[];
    enlaces: Enlace[];
  };

  tienda: Encabezado & {
    direccion: string;
    horario: string[];
    productos: string[];
    ctaProductos: string;
    /** Enlace de Google Maps. Si falta, el botón no se muestra. */
    mapa?: string;
    foto: Foto;
  };

  testimonios: Encabezado & { items: Testimonio[] };

  solicitud: Encabezado & {
    nota: string;
    servicios: string[];
    ejemploZona: string;
    ejemploDetalles: string;
    boton: string;
  };

  /** Muestra "Web por Edgard" en el pie de página (parte del plan Socio). */
  credito?: string;

  analitica?: {
    /** Token de Cloudflare Web Analytics. */
    cloudflare?: string;
  };
}
