import {RouterModule, Routes } from '@angular/router';

import {
  HistoriaComponent,
  BannerComponent,
  PeliculasComponent,
  PersonasComponent,
  PlanetasComponent,
  EspeciesComponent,
  NavesEspacialesComponent
} from "./component/index.paginas";
import { VehiculosComponent } from './component/vehiculos/vehiculos.component';

const app_routes: Routes = [
  {path : '', component: BannerComponent},
  {path : 'historia', component: HistoriaComponent},
  {path : 'peliculas', component: PeliculasComponent},
  {path : 'personas', component: PersonasComponent},
  {path : 'planetas', component: PlanetasComponent},
  {path : 'especies', component: EspeciesComponent},
  {path : 'naves-espaciales', component: NavesEspacialesComponent},
  {path : 'vehiculos', component: VehiculosComponent},
  {path : '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
