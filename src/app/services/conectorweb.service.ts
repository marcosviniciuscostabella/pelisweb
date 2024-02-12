import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectorwebService {
  static URL = "https://paniaguajavascript.github.io/movies/movies-1900s.json";
  clienteHttp: HttpClient|undefined;

  constructor() { }
  getMovies() {
    this.clienteHttp?.get<any>(ConectorwebService.URL);//Devuelve un observable

  }
}
