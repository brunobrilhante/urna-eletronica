import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Tab1Page } from "./tab1/tab1.page";
import { Tab2Page } from "./tab2/tab2.page";
import { Tab3Page } from "./tab3/tab3.page";

const APP_ROUTES: Routes = [
  { path: '', component: Tab1Page},
  { path: 'votacao', component: Tab2Page},
  { path: 'sobre', component: Tab3Page}
];

//contem a config e a definiçã das rotas
export const routing: ModuleWithProviders<NgModule> = RouterModule.forRoot(APP_ROUTES);
