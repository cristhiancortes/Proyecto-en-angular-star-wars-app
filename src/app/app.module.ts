import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// RUTAS

import { app_routing} from './app.routes';


// SERVICIOS

import { InformacionService } from './services/informacion.service';
import { PeliculasService } from './services/peliculas.service';
import { PersonasService } from './services/personas.service';
import { PlanetasService } from './services/planetas.service';
import { EspeciesService } from './services/especies.service';
import { NavesEspacialesService } from './services/naves-espaciales.service';
import { VehiculosService } from './services/vehiculos.service';

// COMPONENTES

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { HistoriaComponent } from './component/historia/historia.component';
import { PeliculasComponent } from './component/peliculas/peliculas.component';
import { PlanetasComponent } from './component/planetas/planetas.component';
import { PersonasComponent } from './component/personas/personas.component';
import { EspeciesComponent } from './component/especies/especies.component';
import { NavesEspacialesComponent } from './component/naves-espaciales/naves-espaciales.component';
import { VehiculosComponent } from './component/vehiculos/vehiculos.component';
import { IntegrantesDeTrabajoComponent } from './component/integrantes-de-trabajo/integrantes-de-trabajo.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Modulo de bosstrappppp.








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HistoriaComponent,
    PeliculasComponent,
    PlanetasComponent,
    PersonasComponent,
    EspeciesComponent,
    NavesEspacialesComponent,
    VehiculosComponent,
    IntegrantesDeTrabajoComponent,
    FooterComponent,
  ],
  imports: [
    app_routing,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule // / Modulo de bosstrappppp.
  ],
  providers: [
    PeliculasService,
    VehiculosService,
    NavesEspacialesService,
    EspeciesService,
    PersonasService,
    PlanetasService,
    InformacionService

  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
