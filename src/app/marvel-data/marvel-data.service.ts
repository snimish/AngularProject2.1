import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarvelDataService {
  // Url to Marvel API
  private url: string = "https://gateway.marvel.com:443/v1/public/";
  // User public key required to connect to the API
  private apiKey: string = "bee257b5891444c3d79350d1891c6186";

  constructor(private httpService: Http) { }

  getCharacters(): Observable<any> {
    return this.httpService.get(`${this.url}characters?limit=80&apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getComics(): Observable<any> {
    return this.httpService.get(`${this.url}comics?limit=80&apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getCreators(): Observable<any> {
    return this.httpService.get(`${this.url}creators?limit=80&apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getCreatorsByComicId(id: number): Observable<any> {
    return this.httpService.get(`${this.url}comics/${id}/creators?limit=80&apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getComicsByCharacterId(id: number): Observable<any> {
    return this.httpService.get(`${this.url}characters/${id}/comics?limit=80&apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getCharacterById(id: number): Observable<any> {
    return this.httpService.get(`${this.url}characters/${id}?apikey=${this.apiKey}`)
      .map(this.extractData)
  }

  getComicById(id: number): Observable<any> {
    return this.httpService.get(`${this.url}comics/${id}?apikey=${this.apiKey}`)
      .map(this.extractData)
  }
  
  private extractData(res: any) {
    let body = res.json();
    return body || {};
  }
}
