import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarvelDataService {
  private url: string = "https://gateway.marvel.com:443/v1/public/";

  constructor(private httpService: Http) { }

  getCharacters(): Observable<any> {
    return this.httpService.get(`${this.url}characters?apikey=bee257b5891444c3d79350d1891c6186`)
    .map(this.extractData)
    }

    getComics(): Observable<any> {
      return this.httpService.get(`${this.url}comics?apikey=bee257b5891444c3d79350d1891c6186`)
      .map(this.extractData)
    }

      private extractData(res: any){
      let body = res.json();
      return body || {};
    }
}
