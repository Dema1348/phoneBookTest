import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../base.url';
import { Persona } from '../../models/persona.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HelpersProvider } from '../helpers/helpers';


@Injectable()
export class PersonasProvider {

  private personasURL: string = `/persona`

  constructor(public http: HttpClient, public helpersProvider: HelpersProvider) {
  }

  /**
   * Get all person of PhoneBook.
   * @param {any}  urlParams  Parameters for filter 
   * 
   * @param {numbre}  comunaId  Comuna id  
   * 
   * @returns {Observable<Persona>} Return array of regions from the server.
   *
   */
  getPersonas(urlParams:any,comunaId?:number): Observable<Persona> {
    let url = BASE_URL.concat(this.personasURL);
    return this.http.get<Persona>(url).map((personas)=>{
      return this.mappingPersonas(personas).filter((persona)=>{
        return this.filterQuery(persona,urlParams,comunaId);
      });
      
    })
    
  }


  /**
   * Mapping all person of PhoneBook.
   * @param {Persona[]}  personas  All person of  PhoneBook
   * 
   * 
   * @returns {Persona[]} Return array of mapping person.
   *
   */
  mappingPersonas(personas){
    return personas.map((persona:Persona)=>{
      persona.apellido= this.helpersProvider.utf8Decode(persona.apellido);
      persona.nombre= this.helpersProvider.utf8Decode(persona.nombre);
      persona.direccion.calle= this.helpersProvider.utf8Decode(persona.direccion.calle);
      persona.direccion.comuna.nombre= this.helpersProvider.utf8Decode(persona.direccion.comuna.nombre);
      persona._lowernombre=persona.nombre.toLowerCase();
      persona._lowerapellido=persona.apellido.toLowerCase();
      return persona;
    })
  }

  /**
   * Filter person by parameters.
   * @param {Persona}  persona  Person to filter
   * 
   * @param {string}  query  Query to apply person
   * 
   * @param {number?}  comunaId Comuna id  
   * 
   * @returns {Persona[]} Return array of filter person.
   *
   */
  filterQuery(persona,query,comunaId?){
    let lowercaseQueryNombre = query.nombre.toLowerCase();
    let lowercaseQueryApellido = query.apellido.toLowerCase();
    if(comunaId){
      console.log("Comunda Id ",comunaId);
      return (persona.direccion.comuna.id === comunaId) &&  (persona._lowernombre.indexOf(lowercaseQueryNombre) === 0) && (persona._lowerapellido.indexOf(lowercaseQueryApellido) === 0) && (persona.activo === 1);

    }
    else if ((lowercaseQueryNombre && lowercaseQueryNombre.length>0) ||(lowercaseQueryApellido && lowercaseQueryApellido.length>0))
      return  (persona._lowernombre.indexOf(lowercaseQueryNombre) === 0) && (persona._lowerapellido.indexOf(lowercaseQueryApellido) === 0) && (persona.activo === 1);
    else
      return false;
    
  }
  

}
