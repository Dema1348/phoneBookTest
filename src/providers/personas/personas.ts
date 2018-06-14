import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../base.url';
import { Persona } from '../../models/persona.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PersonasProvider {

  private personasURL: string = `/persona`

  constructor(public http: HttpClient) {
  }

  /**
   * Get all person of PhoneBook.
   * @param {any}  urlParams  Parameters for filter 
    * 
   * @returns {Observable<Persona>} Return array of regions from the server.
   *
   */

  getPersonas(urlParams?:any): Observable<Persona> {
    let url = BASE_URL.concat(this.personasURL);
    return this.http.get<Persona>(url).map((personas)=>{
      return this.mappingPersonas(personas).filter((persona)=>{
        console.log("Filter ",urlParams);
        return this.filterQuery(persona,urlParams);
      });
      
    })
    
  }

  mappingPersonas(personas){
    return personas.map((persona:Persona)=>{
      persona._lowernombre=persona.nombre.toLowerCase();
      persona._lowerapellido=persona.apellido.toLowerCase();
      return persona;
    })
  }

  filterQuery(persona,query){
    let lowercaseQueryNombre = query.nombre.toLowerCase();
    let lowercaseQueryApellido = query.apellido.toLowerCase();
    return (persona._lowernombre.indexOf(lowercaseQueryNombre) === 0) && (persona._lowerapellido.indexOf(lowercaseQueryApellido) === 0);
  }




  

}
