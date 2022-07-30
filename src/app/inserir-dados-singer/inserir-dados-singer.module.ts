import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirDadosSingerPageRoutingModule } from './inserir-dados-singer-routing.module';

import { InserirDadosSingerPage } from './inserir-dados-singer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirDadosSingerPageRoutingModule
  ],
  declarations: [InserirDadosSingerPage]
})
export class InserirDadosSingerPageModule {}
