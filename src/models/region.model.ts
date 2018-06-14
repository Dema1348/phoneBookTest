import { Comuna } from "./comuna.model";

export interface Region{
	id:number;
    nombre: string;
    comunas: Comuna[];
    _lowernombre?:string
}