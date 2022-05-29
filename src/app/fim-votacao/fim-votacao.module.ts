import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FimVotacaoPageRoutingModule } from './fim-votacao-routing.module';

import { FimVotacaoPage } from './fim-votacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FimVotacaoPageRoutingModule
  ],
  declarations: [FimVotacaoPage]
})
export class FimVotacaoPageModule {}
