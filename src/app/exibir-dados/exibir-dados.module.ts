import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirDadosPageRoutingModule } from './exibir-dados-routing.module';

import { ExibirDadosPage } from './exibir-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirDadosPageRoutingModule
  ],
  declarations: [ExibirDadosPage]
})
export class ExibirDadosPageModule {}
