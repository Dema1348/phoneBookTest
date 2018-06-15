import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../base.url';
import { Region } from '../../models/region.model';
import 'rxjs/add/operator/map';
import { HelpersProvider } from '../helpers/helpers';

@Injectable()
export class RegionesProvider {

  private regionesURL: string = `/region`

  regiones:Region[];
  constructor(public http: HttpClient, public helpersProvider: HelpersProvider) {
  
  }

  /**
   * Get all regions of Chile.
   *
   * @returns {Promise<Region>} Return array of regions from the server.
   *
   */

  getRegiones():  Promise<Object> {
    let url = BASE_URL.concat(this.regionesURL);
    return this.http.get<Region>(url).map((regiones)=>{
      return this.mappingRegiones(regiones);
    }).toPromise();
  }

  /**
   * Mapping all regions of PhoneBook.
   * @param {Region[]}  regiones  All person of  PhoneBook
   * 
   * 
   * @returns {Region[]} Return array of mapping region.
   *
   */
  mappingRegiones(regiones){
    return regiones.map((region:Region)=>{
      region.nombre= this.helpersProvider.utf8Decode(region.nombre);
      region.comunas.map((comuna) => {
        comuna.nombre= this.helpersProvider.utf8Decode(comuna.nombre);
        return comuna;
      });
      return region;
    })
  }



  
}


  
  

  