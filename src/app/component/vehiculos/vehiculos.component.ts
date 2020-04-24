import { Component } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {

  // Vehicles;

  ListaDeVehicles: [];


  constructor( private VehiclesServices: VehiclesService){

    this.ListaDeVehicles = [];

    // this.Vehicles = this.VehiclesServices.getVehicles () ;
  }


  LlenarListaDeVehicles() {

    this.VehiclesServices.traerTodosLosVehiculos ().subscribe (
      (data) => {
        console.log('DATA:' , data);
        this.ListaDeVehicles = data ['results '];
      }
    );
    }
  }
