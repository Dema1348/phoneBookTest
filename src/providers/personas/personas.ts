import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../base.url';
import { Persona } from '../../models/persona.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PersonasProvider {

  private personasURL: string = `/persona`

  constructor(public http: HttpClient) {
  }

  /**
   * Get all person of PhoneBook.
   * 
   * @returns {Observable<Persona>} Return array of regions from the server.
   *
   */

  getPersonas(): Observable<Persona> {
    let url = BASE_URL.concat(this.personasURL);
    console.log("URL Persons call", url);
    return this.http.get<Persona>(url);
  }

}
