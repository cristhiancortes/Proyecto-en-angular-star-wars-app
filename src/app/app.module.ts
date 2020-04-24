import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// RUTAS

import { app_routing} from './app.routes';


// SERVICIOS

import { InformacionService } from './services/informacion.service';
import { VehiclesService } from './services/vehicles.service';


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
    AppRoutingModule
  ],
  providers: [
    VehiclesService,
    InformacionService

  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
