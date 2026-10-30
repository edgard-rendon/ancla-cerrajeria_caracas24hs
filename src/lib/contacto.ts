import { cliente } from '../config/cliente';

const { contacto } = cliente;

/** Enlace a un chat de WhatsApp del negocio con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = contacto.saludo): string {
  return `https://wa.me/${contacto.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
}

/** Enlace para llamar al negocio. */
export const enlaceTelefono = `tel:${contacto.telefono}`;
