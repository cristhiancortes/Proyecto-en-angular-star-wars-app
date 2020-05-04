import {RouterModule, Routes } from '@angular/router';

import {
  Pagina2Component,
  HistoriaComponent,
  IntegrantesDeTrabajoComponent,
  BannerComponent,
  PeliculasComponent,
  PersonasComponent,
  PlanetasComponent,
  EspeciesComponent,
  NavesEspacialesComponent,
  VehiculosComponent,



} from "./component/index.paginas";


const app_routes: Routes = [
  {path : '', component: BannerComponent},
  {path : 'pagina2', component: Pagina2Component},
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
