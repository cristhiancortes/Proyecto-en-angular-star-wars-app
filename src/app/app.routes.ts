import {RouterModule, Routes } from '@angular/router';

import {

  HistoriaComponent,
  IntegrantesDeTrabajoComponent,
  BannerComponent,
  PeliculasComponent,
  PersonasComponent,
  PlanetasComponent,
  EspeciesComponent,
  NavesEspacialesComponent,
  VehiculosComponent,
  Pagina2Component,
  Pagina3Component,
  Pagina4Component,
  Pagina5Component,
  Pagina6Component,
  Pagina7Component




} from "./component/index.paginas";


const app_routes: Routes = [
  {path : '', component: BannerComponent},
  {path : 'pagina2', component: Pagina2Component},
  {path : 'pagina3', component: Pagina3Component},
  {path : 'pagina4', component: Pagina4Component},
  {path : 'pagina5', component: Pagina5Component},
  {path : 'pagina6', component: Pagina6Component},
  {path : 'pagina7', component: Pagina7Component},
  {path : 'historia', component: HistoriaComponent},
  {path : 'integrantes-de-trabajo', component: IntegrantesDeTrabajoComponent},
  {path : 'peliculas', component: PeliculasComponent},
  {path : 'personas', component: PersonasComponent},
  {path : 'planetas', component: PlanetasComponent},
  {path : 'especies', component: EspeciesComponent},
  {path : 'naves-espaciales', component: NavesEspacialesComponent},
  {path : 'vehiculos', component: VehiculosComponent},

  {path : '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
