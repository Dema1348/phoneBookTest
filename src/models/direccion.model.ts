import { Comuna } from "./comuna.model";

export interface Direccion {
    calle: string;
    numero: number;
    comuna: Comuna;
}