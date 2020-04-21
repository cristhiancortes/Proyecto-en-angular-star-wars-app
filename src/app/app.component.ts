import { Component } from '@angular/core';
import {InformacionService} from "./services/informacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  informacion = [];

  constructor( public informacionService: InformacionService ){


  }

  ngOnInit(){
    this.informacionService.getIformacion(),
      .subscribe(
        informacion => {
          console.log(informacion)
          this.informacion = Informacion,
        },
        err => console.log(err),
        
      )
  }
}
