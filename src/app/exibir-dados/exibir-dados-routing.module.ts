import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibirDadosPage } from './exibir-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibirDadosPageRoutingModule {}
