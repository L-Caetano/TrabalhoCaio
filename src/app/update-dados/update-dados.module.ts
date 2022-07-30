import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDadosPageRoutingModule } from './update-dados-routing.module';

import { UpdateDadosPage } from './update-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDadosPageRoutingModule
  ],
  declarations: [UpdateDadosPage]
})
export class UpdateDadosPageModule {}
