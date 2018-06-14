import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../base.url';
import { Region } from '../../models/region.model';
import 'rxjs/add/operator/map';

@Injectable()
export class RegionesProvider {

  private regionesURL: string = `/region`

  regiones:Region[];
  constructor(public http: HttpClient) {
  
  }

  /**
   * Get all regions of Chile.
   *
   * @returns {Promise<Region>} Return array of regions from the server.
   *
   */

  getRegiones():  Promise<Object> {
    let url = BASE_URL.concat(this.regionesURL);
    return this.http.get<Region>(url).toPromise();
  }



  
}


  
  

  