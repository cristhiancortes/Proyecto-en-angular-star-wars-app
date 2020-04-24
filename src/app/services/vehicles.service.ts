import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class VehiclesService {

  info: any = {};
  cargada: boolean = false;

  constructor( public httpClient: HttpClient ) { }

traerTodosLosVehiculos(){
  return this.httpClient.get ('https://swapi.py4e.com/api/vehicles/');

}

}
