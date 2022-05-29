import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimVotacaoPage } from './fim-votacao.page';

const routes: Routes = [
  {
    path: '',
    component: FimVotacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimVotacaoPageRoutingModule {}
