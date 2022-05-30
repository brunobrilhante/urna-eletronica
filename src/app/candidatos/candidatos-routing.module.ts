import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatosPage } from './candidatos.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatosPageRoutingModule {}
