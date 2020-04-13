import {RouterModule, Routes } from '@angular/router';

import {
  HistoriaComponent,
  BannerComponent
} from "./component/index.paginas";

const app_routes: Routes = [
  {path : '', component: BannerComponent},
  {path : 'historia', component: HistoriaComponent},
  {path : '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
