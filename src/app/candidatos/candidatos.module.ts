import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatosPageRoutingModule } from './candidatos-routing.module';

import { CandidatosPage } from './candidatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatosPageRoutingModule,
  ],
  declarations: [CandidatosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CandidatosPageModule {}
