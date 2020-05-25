import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CompanyList } from '../models/companyList';
import { HttpClient } from '../all/library/http-client';
import { Company } from 'app/models/company';

@Injectable()
export class CompaniesService {
  private fairID: number;

  constructor(private httpClient: HttpClient, @Inject('url') private urlBase) {
    this.fairID = 1;
  }

  getCompanyList(): Observable<CompanyList[]> {
    return this.httpClient.get(`${this.urlBase.fair}/fairs/${this.fairID}/companies`)
      .map((res) => {
        return res.json() as CompanyList[]
      })
      .catch(this.httpClient.handleError);
  }

  getCompany(companyId: string, category: string): Observable<Company> {
    return this.httpClient.get(`${this.urlBase.fair}/fairs/${this.fairID}/companies/${companyId}?category=${category}`)
      .map((res) => {
        return res.json() as Company
      })
      .catch(this.httpClient.handleError);
  }

  deleteCompany(id, category): any {
    const body = JSON.stringify({category});
    return this.httpClient.delete(`${this.urlBase.fair}/fairs/${this.fairID}/companies/${id}`, body)
      .map((res) => {
        return res.json()
      })
      .catch(this.httpClient.handleError);
  }

  uploadFile(formData, type: string): Observable<any> {
    return this.httpClient.postFile(`${this.urlBase.fair}/upload-file/${type}`, formData)
      .map(response => response.json())
      .catch(this.httpClient.handleError);
  }

  getDataCompany(rucCompany: number, category: string) {
    let url = `${this.urlBase.api}/companies/search?ruc=${rucCompany}`;
    if (category === 'Educacion') {url = `${this.urlBase.educationFair}/institutions/search?ruc=${rucCompany}`}
    return this.httpClient.get(url)
      .map((res) => res.json())
      .catch(this.httpClient.handleError);
  }

  saveCompany(currentCompany: any): Observable<any>  {
    let body;
    body = JSON.stringify(currentCompany);
    return this.httpClient.post(`${this.urlBase.fair}/fairs/${this.fairID}/companies`, body)
      .map(response => response.json())
      .catch(this.httpClient.handleError)
  }

  editCompany(currentCompany: any, idCompany: number, category: string): Observable<any>  {
    let body;
    body = JSON.stringify(currentCompany);
    return this.httpClient.put(`${this.urlBase.fair}/fairs/${this.fairID}/companies/${idCompany}?category=${category}`, body)
      .map(response => response.json())
      .catch(this.httpClient.handleError)
  }

  getStandModels(modelId) {
    return this.httpClient.get(`${this.urlBase.fair}/stand-models/${modelId}`)
      .map((res) => res.json())
      .catch(this.httpClient.handleError);
  }

  getStandAmphitryon(amphitryonId) {
    return this.httpClient.get(`${this.urlBase.fair}/stand-amphitryons/${amphitryonId}`)
      .map((res) => res.json())
      .catch(this.httpClient.handleError);
  }
}
