import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { IndustryList } from '../models/industryList';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '../all/library/http-client';

@Injectable()
export class IndustryService {

  constructor(
    private httpClient: HttpClient,
    @Inject('url') private urlBase
  ) { }

  getIndustries(category: string): Observable<IndustryList[]> {
    return this.httpClient.get(`${this.urlBase.api}/industries?category=${category.toLowerCase()}`)
      .map( (res) => {
        return res.json().data as IndustryList[]
      })
      .catch(this.httpClient.handleError);
  }
}
