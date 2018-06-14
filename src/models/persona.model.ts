import { Direccion } from "./direccion.model";

export interface Persona{
    id: number;
    nombre: string;
    apellido: string;
    telefono: any;
    rut: string;
    direccion: Direccion;
    activo: number;
    _lowernombre?:string;
    _lowerapellido?:string;
}