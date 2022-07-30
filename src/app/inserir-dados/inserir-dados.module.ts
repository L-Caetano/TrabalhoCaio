import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirDadosPageRoutingModule } from './inserir-dados-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { InserirDadosPage } from './inserir-dados.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule, FormsModule,
    ReactiveFormsModule,
    InserirDadosPageRoutingModule
  ],
  declarations: [InserirDadosPage]
})
export class InserirDadosPageModule {}
