import type { Cliente } from './tipos';

/**
 * Contenido de Cerrajería Caracas 24hs.
 * Todo lo que cambia de un cliente a otro vive en este archivo.
 * Los textos entre corchetes [así] están pendientes de confirmar con el dueño.
 */
export const cliente: Cliente = {
  marca: {
    nombre: 'Cerrajería Caracas 24hs',
    corto: 'Cerrajería Caracas',
    lema: '¡Tu seguridad, nuestra prioridad!',
    ciudad: 'Caracas',
    desde: 2026,
  },

  seo: {
    titulo: 'Cerrajería Caracas 24hs | Cerrajeros a domicilio en toda Caracas',
    descripcion:
      'Cerrajeros 24 horas en toda Caracas. Aperturas de casa y carro, cambio de cerraduras y combinaciones, llaves con chip y cerraduras digitales. Tienda en Baruta.',
    // Pendiente: confirmar el dominio con el dueño.
    url: 'https://cerrajeriacaracas24h.com',
    imagen: 'tienda-letrero.jpg',
    tipoNegocio: 'Locksmith',
  },

  contacto: {
    whatsapp: '584124021119',
    telefono: '+584124021119',
    telefonoVisible: '0412 402 1119',
    saludo: 'Hola, necesito un cerrajero urgente.',
  },

  redes: {
    instagram: 'https://www.instagram.com/cerrajeria_caracas24hs/',
    tiktok: 'https://www.tiktok.com/@cerrajeria_caracas24h',
    threads: 'https://www.threads.com/@cerrajeria_caracas24hs',
  },

  navegacion: [
    { texto: 'Servicios', href: '#servicios' },
    { texto: 'Zonas', href: '#zonas' },
    { texto: 'Tienda', href: '#tienda' },
    { texto: 'Trabajos', href: '#trabajos' },
  ],

  hero: {
    sello: 'De día o de noche, en toda Caracas',
    titulo: ['¡Tu seguridad,', 'nuestra prioridad!'],
    subtitulo: '¿Te quedaste afuera de la casa o del carro? Vamos a donde estés y lo resolvemos ahí mismo.',
    ctaWhatsapp: 'Escribir por WhatsApp',
  },

  casos: {
    titulo: '¿Qué te pasó?',
    descripcion: 'Toca tu caso y se abre WhatsApp con el mensaje listo.',
    items: [
      {
        icono: 'casa',
        titulo: 'Me quedé afuera de la casa',
        detalle: 'Apertura de puerta',
        mensaje: 'Hola, me quedé afuera de mi casa. Necesito una apertura urgente.',
      },
      {
        icono: 'carro',
        titulo: 'Las llaves quedaron en el carro',
        detalle: 'Apertura automotriz',
        mensaje: 'Hola, se me quedaron las llaves dentro del carro. Necesito una apertura.',
      },
      {
        icono: 'llave-carro',
        titulo: 'Perdí la llave del carro',
        detalle: 'Llaves con chip y controles',
        mensaje: 'Hola, perdí la llave de mi carro y necesito una nueva.',
      },
      {
        icono: 'candado',
        titulo: 'Quiero cambiar la cerradura',
        detalle: 'O su combinación',
        mensaje: 'Hola, quiero cambiar una cerradura o su combinación.',
      },
    ],
  },

  servicios: {
    titulo: 'La casa y el carro, el mismo equipo',
    descripcion: 'Desde una apertura de madrugada hasta una cerradura digital nueva. Te decimos el precio antes de empezar.',
    grupos: [
      {
        icono: 'casa',
        titulo: 'Hogar y negocio',
        items: [
          { nombre: 'Apertura de puertas', nota: 'Desde [precio]' },
          { nombre: 'Cambio de cerraduras', nota: 'Desde [precio]' },
          { nombre: 'Cambio de combinación', nota: 'Desde [precio]' },
          { nombre: 'Cerraduras digitales', nota: 'Venta e instalación' },
          { nombre: 'Cajas fuertes', nota: '[Confirmar]' },
        ],
      },
      {
        icono: 'carro',
        titulo: 'Carros y motos',
        items: [
          { nombre: 'Apertura de carros', nota: 'Desde [precio]' },
          { nombre: 'Llaves con chip y controles', nota: '[Confirmar]' },
          { nombre: 'Programación de llaves', nota: '[Confirmar]' },
          { nombre: 'Duplicado de llaves', nota: '[Confirmar]' },
          { nombre: 'Reparación de cerraduras y switch', nota: '[Confirmar]' },
        ],
      },
    ],
  },

  pasos: {
    titulo: 'Así trabajamos',
    descripcion: 'Tres pasos entre el problema y la puerta abierta.',
    items: [
      { titulo: 'Nos escribes', descripcion: 'Por WhatsApp o llamada, con lo que pasó y tu ubicación.' },
      { titulo: 'Te damos precio y hora', descripcion: 'Sabes cuánto cuesta y cuándo llegamos antes de que salgamos.' },
      {
        titulo: 'Lo resolvemos ahí mismo',
        descripcion: 'Abrimos tu casa o tu carro, o cambiamos la cerradura, en el mismo lugar.',
      },
    ],
  },

  zonas: {
    titulo: 'Toda Caracas, al pie del Ávila',
    descripcion:
      'Atendemos a domicilio en los cinco municipios. Si no ves tu zona, escríbenos y te decimos en cuánto tiempo llegamos.',
    items: [
      { nombre: 'Baruta', base: true, nota: 'aquí está la tienda' },
      { nombre: 'Chacao' },
      { nombre: 'Libertador' },
      { nombre: 'Sucre' },
      { nombre: 'El Hatillo' },
    ],
    nota: '[Confirmar con el dueño las zonas y los tiempos de llegada.]',
  },

  trabajos: {
    titulo: 'Más de 6 millones nos han visto abrir',
    descripcion: 'Grabamos nuestro trabajo para que sepas cómo lo hacemos antes de llamarnos.',
    videos: [
      { url: 'https://www.tiktok.com/@cerrajeria_caracas24h', titulo: '[Título del video fijado]', vistas: '6,8 M' },
      { url: 'https://www.tiktok.com/@cerrajeria_caracas24h', titulo: '[Título del video fijado]', vistas: '6,1 M' },
      { url: 'https://www.tiktok.com/@cerrajeria_caracas24h', titulo: '[Título del video fijado]', vistas: '1,3 M' },
      { url: 'https://www.instagram.com/cerrajeria_caracas24hs/', titulo: 'Instalación de cerradura digital' },
    ],
    enlaces: [
      { texto: 'Ver todo en TikTok', href: 'https://www.tiktok.com/@cerrajeria_caracas24h' },
      { texto: 'Ver todo en Instagram', href: 'https://www.instagram.com/cerrajeria_caracas24hs/' },
    ],
  },

  tienda: {
    titulo: 'Ven a vernos en Baruta',
    descripcion:
      'Si quieres una cerradura nueva, una llave o un control, pásate por la tienda. Búscanos por el letrero.',
    direccion: '[Dirección exacta], Baruta, Caracas',
    horario: ['[Lunes a sábado, de 8:00 a. m. a 6:00 p. m.]', 'Emergencias a domicilio: las 24 horas'],
    productos: [
      'Cerraduras digitales',
      'Llaves y controles de carro',
      'Cilindros',
      'Cajas fuertes',
      'Llaves de proximidad',
    ],
    ctaProductos: 'Consultar productos',
    // Pendiente: enlace de Google Maps de la tienda.
    mapa: undefined,
    foto: {
      src: 'tienda-letrero.jpg',
      alt: 'Cerrajero del equipo junto al letrero luminoso de Cerrajería Caracas, con la silueta de la ciudad, dentro de la tienda',
    },
  },

  testimonios: {
    titulo: 'Lo que dicen los clientes',
    descripcion: 'Testimonios tomados de nuestra destacada de clientes en Instagram.',
    items: [
      { texto: '[Testimonio real de un cliente]', autor: '[Nombre]', detalle: 'apertura de carro en [zona]' },
      { texto: '[Testimonio real de un cliente]', autor: '[Nombre]', detalle: 'cambio de cerradura en [zona]' },
      { texto: '[Testimonio real de un cliente]', autor: '[Nombre]', detalle: 'cerradura digital en [zona]' },
    ],
  },

  solicitud: {
    titulo: 'Pide tu cerrajero',
    descripcion:
      'Llena lo básico y se abre WhatsApp con tu solicitud escrita. Si es urgente, comparte tu ubicación para llegar más rápido.',
    nota: '¿Prefieres hablar? Llama al',
    servicios: [
      'Apertura de casa',
      'Apertura de carro',
      'Llave de carro',
      'Cambio de cerradura',
      'Cambio de combinación',
      'Cerradura digital',
      'Otro',
    ],
    ejemploZona: 'Ej.: Las Mercedes, Baruta',
    ejemploDetalles: 'Marca y modelo del carro, tipo de puerta o lo que necesites contarnos',
    boton: 'Enviar por WhatsApp',
  },

  credito: 'Web por Edgard',
};
