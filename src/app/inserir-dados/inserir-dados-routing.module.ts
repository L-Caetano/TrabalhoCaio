import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { InserirDadosPage } from './inserir-dados.page';

const routes: Routes = [
  {
    path: '',
    component: InserirDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,
    ReactiveFormsModule,],
  exports: [RouterModule],
})
export class InserirDadosPageRoutingModule {}
