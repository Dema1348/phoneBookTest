import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../base.url';
import { Region } from '../../models/region.model';

@Injectable()
export class RegionesProvider {

  private regionesURL: string = `/region`

  constructor(public http: HttpClient) {
  
  }

  /**
   * Get all regions of Chile.
   *
   * @returns {Observable<Region>} Return array of regions from the server.
   *
   */

  getRegiones(): Observable<Region> {
    let url = BASE_URL.concat(this.regionesURL);
    console.log("URL Regions call", url);
    return this.http.get<Region>(url);
  }

  
}


  
  

  