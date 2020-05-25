import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SponsorList } from '../models/sponsorList';
import { HttpClient } from '../all/library/http-client';
import { Sponsor } from 'app/models/sponsor';

@Injectable()
export class SponsorsService {
  private fairID: number;

  constructor(private httpClient: HttpClient, @Inject('url') private urlBase) {
    this.fairID = 1;
  }

  getSponsorList(): Observable<SponsorList[]> {
    return this.httpClient.get(`${this.urlBase.fair}/${this.fairID}/sponsors`)
      .map((res) => {
        return res.json() as SponsorList[]
      })
      .catch(this.httpClient.handleError);
  }

  getSponsor(sponsorId: string): Observable<Sponsor> {
    return this.httpClient.get(`${this.urlBase.fair}/${this.fairID}/sponsor/${sponsorId}`)
      .map((res) => {
        return res.json() as Sponsor
      })
      .catch(this.httpClient.handleError);
  }

  deleteSponsor(sponsorId): any {
    return this.httpClient.delete(`${this.urlBase.fair}/${this.fairID}/sponsor/${sponsorId}`, {})
      .map((res) => {
        return res.json()
      })
      .catch(this.httpClient.handleError);
  }

  saveSponsor(currentSponsor: any): Observable<any> {
    let body;
    body = JSON.stringify(currentSponsor);
    return this.httpClient.post(`${this.urlBase.fair}/${this.fairID}/sponsors`, body)
      .map(response => response.json())
      .catch(this.httpClient.handleError)
  }

  editSponsor(currentSponsor: any, sponsorId: number): Observable<any> {
    let body;
    body = JSON.stringify(currentSponsor);
    return this.httpClient.put(`${this.urlBase.fair}/${this.fairID}/sponsor/${sponsorId}`, body)
      .map(response => response.json())
      .catch(this.httpClient.handleError)
  }

  uploadFile(formData, type: string): Observable<any> {
    return this.httpClient.postFile(`${this.urlBase.fair}/upload-file/${type}`, formData)
      .map(response => response.json())
      .catch(this.httpClient.handleError);
  }
}
