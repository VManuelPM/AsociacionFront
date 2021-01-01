import { DetallePagos } from './detalle-pagos';

export interface Persona {
    id_persona?: number,
    dni_persona: string;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    fecha_nacimiento: Date;
    direccion_residencia: string;
    ciudad_residencia: string;
    telefono_celular: number;
    profesion: string;
    fecha_vinculacion: Date;
    fecha_vencimiento: Date;
    fecha_salida: Date;
    detallePagos: Array<DetallePagos>;
}
