import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClient {
  private isDummy: boolean;

  constructor(private http: Http) {
    this.isDummy = false;
  }

  private createAuthorizationJsonHeader(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    if (!this.isDummy) {
      headers.append('token', localStorage.getItem('auth_token'));
    }
    return headers;
  }

  private createAuthorizationFormDataHeader(): Headers {
    const headers = new Headers();
    if (!this.isDummy) {
      headers.append('token', localStorage.getItem('auth_token'));
    }
    return headers;
  }

  // Just for dummies
  setDummy() {
    this.isDummy = true;
  }

  get(url: string) {
    const headers = this.createAuthorizationJsonHeader();
    return this.http.get(url, {headers: headers});
  }

  post(url: string, data: any) {
    const headers = this.createAuthorizationJsonHeader();
    return this.http.post(url, data, {headers: headers});
  }

  postFile(url: string, data: any) {
    const headers = this.createAuthorizationFormDataHeader();
    return this.http.post(url, data, {headers: headers});
  }

  put(url: string, data: any) {
    const headers = this.createAuthorizationJsonHeader();
    return this.http.put(url, data, {headers: headers});
  }

  delete(url: string, data: any) {
    const headers = this.createAuthorizationJsonHeader();
    return this.http.delete(url, {headers: headers, body: data});
  }

  handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(error.json());
  }
}
