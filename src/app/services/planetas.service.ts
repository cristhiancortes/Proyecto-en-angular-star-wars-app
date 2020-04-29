import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlanetasService {


  constructor( private httpClient: HttpClient ) { }

  getPlanetas () {
    const Planetas = { };
    return Planetas;
  }

  TraerTodosLosPlanetas(){

    return this.httpClient.get ('https://swapi.py4e.com/api/planets/');

  }

}
