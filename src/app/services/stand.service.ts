import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../all/library/http-client';
import { Stand } from '../models/stand';

@Injectable()
export class StandService {

  private url = 'http://dev.services.aptitus.com/v1/fair';

  constructor(
    private httpClient: HttpClient,
    @Inject('url') private urlBase
  ) { }

  getStandData(id: any): Observable<Stand> {
    return this.httpClient.get(`${this.urlBase.fair}/stand-types/${id}`)
        .map(response => response.json().data as Stand)
        .catch(this.httpClient.handleError);
  }

}
